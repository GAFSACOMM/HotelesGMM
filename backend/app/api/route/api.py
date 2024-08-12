from fastapi import APIRouter
from app.api.endpoint import request_tracing, login

api_router = APIRouter()

api_router.include_router(request_tracing.router, prefix="/request_tracing", tags=['request_tracing'])
api_router.include_router(login.router, prefix="/login", tags=['login'])


