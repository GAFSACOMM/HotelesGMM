import httpx
from jose import jwt
from app.core import security
from datetime import timedelta
from pydantic import ValidationError
from app.core.config import settings
from app import crud, model, schemas
from app.db.session import SessionLocal
from app.db.session import async_session
from app.enum.EnumError import EnumError
from typing import Generator, AsyncGenerator
from sqlalchemy.ext.asyncio import AsyncSession
from fastapi.security import OAuth2PasswordBearer
from fastapi import Depends, HTTPException, status


#* SSO IP
reusable_oauth2 = OAuth2PasswordBearer(
    tokenUrl=f"http://10.110.156.176:8000/api/v1/login/access-token/{settings.CODE_SYSTEM}"
)

def get_db() -> Generator:
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()


async def async_get_db() -> AsyncGenerator:
    async with async_session() as session:
        yield session


async def get_current_user(token: str = Depends(reusable_oauth2)):
    async with httpx.AsyncClient() as client:
        #* SSO IP
        sso_response = await client.get(
            f"http://10.110.156.176:8000/api/v1/access_system/getCurrentUserSSO/{settings.CODE_SYSTEM}",
            headers={"Authorization": f"Bearer {token}"}
        )
        sso_data = sso_response.json()
    if sso_response.status_code != 200:
        raise HTTPException(status_code=sso_response.status_code,
                            detail="Fallo de obtener el usuario desde el SSO.")
    if sso_response.status_code == 200:
        return sso_data

