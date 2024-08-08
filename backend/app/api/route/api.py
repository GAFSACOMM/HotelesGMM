from fastapi import APIRouter
from app.api.endpoint import request_tracing, users, role, login

api_router = APIRouter()

api_router.include_router(request_tracing.router, prefix="/request_tracing", tags=['request_tracing'])
api_router.include_router(login.router, prefix="/login", tags=['login'])
api_router.include_router(users.router, prefix="/users", tags=['users'])
api_router.include_router(role.router, prefix="/role", tags=['role'])


