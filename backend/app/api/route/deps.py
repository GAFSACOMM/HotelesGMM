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

reusable_oauth2 = OAuth2PasswordBearer(
    tokenUrl=f"{settings.API_V1_STR}/login/access-token/"
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

async def get_current_user(
    db: AsyncSession = Depends(async_get_db),
    token: str = Depends(reusable_oauth2)
) -> model.Users:
    try:
        payload = jwt.decode(
            token, settings.SECRET_KEY, algorithms=[security.ALGORITHM]
        )
        token_data = schemas.TokenPayload(**payload)
    except (jwt.JWTError, ValidationError):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail=EnumError.XSO_403_INVALID_CREDENTIALS.value,
        )
    user = await crud.users.get(db, id=token_data.sub)
    if not user:
        raise HTTPException(status_code=404, detail=EnumError.XSO_404_USER_NOT_FOUND.value)
    else:
        return user

async def get_current_user_by_token(
    token: str,
    db: AsyncSession = Depends(async_get_db),
) -> model.Users:
    try:
        payload = jwt.decode(
            token, settings.SECRET_KEY, algorithms=[security.ALGORITHM]
        )
        token_data = schemas.TokenPayload(**payload)
    except (jwt.JWTError, ValidationError):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail=EnumError.XSO_403_INVALID_CREDENTIALS.value,
        )
    user = await crud.users.get(db, id=token_data.sub)
    # token = Depends(reusable_oauth2)
    
    access_token_expires = timedelta(
            minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    return {
            "access_token": security.create_access_token(
                user.id, expires_delta=access_token_expires
            )
        }, user
        

async def gen_new_token(
    token: str,
    db: AsyncSession = Depends(async_get_db),
) -> model.Users:
    try:
        payload = jwt.decode(
            token, settings.SECRET_KEY, algorithms=[security.ALGORITHM]
        )
        token_data = schemas.TokenPayload(**payload)
    except (jwt.JWTError, ValidationError):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail=EnumError.XSO_403_INVALID_CREDENTIALS.value,
        )
    user = await crud.users.get(db, id=token_data.sub)
    access_token_expires = timedelta(
            minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    return {
            "access_token": security.create_access_token(
                user.id, expires_delta=access_token_expires
            )
        }
        