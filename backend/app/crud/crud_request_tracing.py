from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.sql.expression import select
from app.crud.base import CRUDBase
from app.model.request_tracing import RequestTracing
from app.schemas.request_tracing import RequestTracingCreate, RequestTracingUpdate
import json, ast
from datetime import date, datetime

class CRUDRequestTracing(CRUDBase[RequestTracing, RequestTracingCreate, RequestTracingUpdate]):
    async def create_entity(self, obj_in, db: AsyncSession) -> RequestTracing:
        midd_req = ast.literal_eval(obj_in)

        db_obj = RequestTracing(
            request_time=str(midd_req["request_time"]),
            client_ip=str(midd_req["client_ip"]),
            method=str(midd_req["method"]),
            url=str(midd_req["url"]),
            status_code=str(midd_req["status_code"]),
            response_time=str(midd_req["response_time"]),
            request_body=str(midd_req["request_body"]),
            response=str(midd_req["response"]),
        )
        
        db.add(db_obj)
        await db.commit()
        await db.refresh(db_obj)
        return db_obj
    

    async def delete_req_tracing(self, db: AsyncSession):
        query_RT = await db.execute(select(RequestTracing))
        list_RT: list[RequestTracing] = query_RT.scalars().all()

        for entity_RT in list_RT:
            if entity_RT:
                date_now = datetime.now()
                response_date = datetime.strptime(entity_RT.response_time, '%Y-%m-%d %H:%M:%S')
                diff_hours = (date_now - response_date).total_seconds() / 3600
                if diff_hours > 12:
                    await db.delete(entity_RT)
                    await db.commit()
                    return entity_RT
        return False

request_tracing = CRUDRequestTracing(RequestTracing)
