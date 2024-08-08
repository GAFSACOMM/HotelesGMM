from app.api.endpoint.timing_middleware import TimingMiddleware
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from app.api.route.api import api_router
from datetime import datetime, timedelta
from app.core.config import settings
#! REQUEST TRACING
from fastapi import FastAPI, Request, APIRouter
import logging, json, os, httpx
from dotenv import load_dotenv
from typing import Any


router = APIRouter()

app = FastAPI(title=settings.PROJECT_NAME, swagger_ui_parameters={"defaultModelsExpandDepth": -1}, openapi_url=f"{settings.API_V1_STR}/openapi.json")

app.add_middleware(TimingMiddleware)
logging.basicConfig(filename="request_tracing.log", level=logging.INFO, format="%(asctime)s - %(message)s")

#! Desactivar si se prueba pasarela, hay un BUG en donde no muestra los detalles. 
# @app.middleware("http")
async def log_requests(request: Request, call_next):
    #? Se excluyen las rutas para la autenticación... NO JALAAA... YA JALÓ C:
    list_banned_to_tracing = [
        f"{settings.API_V1_STR}/docs/oauth2-redirect",
        f"{settings.API_V1_STR}/docs",
        f"{settings.API_V1_STR}/openapi.json",
        f"{settings.API_V1_STR}/openapi.json",
        f"{settings.API_V1_STR}/login/access-token/",
        f"{settings.API_V1_STR}/transaction/",
        f"{settings.API_V1_STR}/booking_order_detail/",
        f"{settings.API_V1_STR}/login/validate_token/",
        # f"{settings.API_V1_STR}/hotel/get_all_hotel_availiable/'"
        # f"{settings.API_V1_STR}/payment/cybersource/webhook/"
    ]
    
    for banned in list_banned_to_tracing:
        if request.url.path.startswith(banned):
            return await call_next(request)

    try:
        response = await call_next(request)
        response_status_code = response.status_code
        response_detail = None
        path_params = request.path_params
        if bool(path_params):
            request_body = path_params
        else:
            request_body = request["query_string"].decode('utf-8');
        
        if response_status_code == 401 or response_status_code == 403 or response_status_code == 422 or response_status_code == 429 or response_status_code >= 500:
            resp_body = [section async for section in response.__dict__["body_iterator"]]
            response.__setattr__("body_iterator", AsyncIteratorWrapper(resp_body))
            response_detail = resp_body[0].decode('utf-8')
            log_data = {
                "client_ip": request.client.host,
                "method": request.method,
                "url": request.url.path,
                "status_code": response.status_code,
                "request_time": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
                "request_body": request_body,
                "response_time": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
                "response": response_detail,
            }
            logging.info(f"\n\n+------------ REQUEST_TRACING by-mahu ------------------------------> \n{log_data}")
            await scheduled_job_user(log_data)
            print("+-------------------------------------------------------------------->\n")
            return response
        else:
            return response
        
    except Exception as e:
        request_body = str(e)
        response_status_code = 500
        response_detail = str(e)
        response = JSONResponse(
            status_code=response_status_code,
            content={"detail": response_detail}
        )
        response_body = response.body.decode()
        response_content = json.loads(response_body)
        detail = response_content.get("detail")
        log_data = {
            "client_ip": request.client.host,
            "method": request.method,
            "url": request.url.path,
            "status_code": response.status_code,
            "request_time": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            "request_body": request_body,
            "response_time": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            "response": detail,
        }
        logging.info(f"\n\n+-------REQUEST_TRACING EXCEPT by-mahu ------------------------------> \n{log_data}")
        await scheduled_job_user(log_data)
        print("+---------------------------------------------------------------->\n\n")
        return response


async def scheduled_job_user(log_data) -> Any:
    async with httpx.AsyncClient() as client:
        try:
            login_data = {
                "username": "devs-admin@gafsacomm.com",
                "password": "oKE3gcyÑ6,mahu7WS}=MN~x&M-S0ñdBV4sP,dQ5Ri|d[!y(P6-"
            }
            token_response = await client.post(
                f'{settings.API_DOMAIN}{settings.API_V1_STR}/login/job-access-token/',
                data=login_data
            )
            token = token_response.json()
            async with httpx.AsyncClient() as client:
                user_response = await client.post(
                    f'{settings.API_DOMAIN}{settings.API_V1_STR}/scheduled_job/request_tracing/?log_data={str(log_data)}',
                    headers={"Authorization": f"Bearer {token['access_token']}"},
                )
            user_res = user_response.json()
            return user_res
        except Exception as e:
            print(f"Error in scheduled_job_user: {str(e)}")
            return None


class AsyncIteratorWrapper:
    """The following is a utility class that transforms a
        regular iterable to an asynchronous one.

        link: https://www.python.org/dev/peps/pep-0492/#example-2
    """

    def __init__(self, obj):
        self._it = iter(obj)

    def __aiter__(self):
        return self

    async def __anext__(self):
        try:
            value = next(self._it)
        except StopIteration:
            raise StopAsyncIteration
        return value
    
    
class RateLimitingMiddleware(BaseHTTPMiddleware):
    RATE_LIMIT_DURATION = timedelta(seconds=10)
    RATE_LIMIT_REQUESTS = 150

    def __init__(self, app):
        super().__init__(app)
        self.request_counts = {}

    async def dispatch(self, request, call_next):
        client_ip = request.client.host
        print("DIRECCIÓN IP -> :", client_ip)
        request_count, last_request = self.request_counts.get(client_ip, (0, datetime.min))

        elapsed_time = datetime.now() - last_request
        if elapsed_time > self.RATE_LIMIT_DURATION:
            request_count = 1
        else:
            if request_count >= self.RATE_LIMIT_REQUESTS:
                return JSONResponse(
                    status_code=429,
                    content={"message": "Límite excedido, intente de nuevo en: ", }
                )
            request_count += 1

        self.request_counts[client_ip] = (request_count, datetime.now())
        response = await call_next(request)
        return response 
    
app.add_middleware(RateLimitingMiddleware)
origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3001",
    "http://localhost:8000"
]

if settings.BACKEND_CORS_ORIGINS:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

app.include_router(api_router, prefix=settings.API_V1_STR)
