from typing import Any
from datetime import timedelta

from sqlalchemy.ext.asyncio import AsyncSession
from fastapi.security import OAuth2PasswordRequestForm
from fastapi import APIRouter, Body, Depends, HTTPException

from app.api.route import deps
from app import crud, schemas, model
from app.core import security
from app.core.config import settings
from app.core.security import get_password_hash
from app.utils.utils import (
    generate_password_reset_token,
    send_reset_password_email,
    verify_password_reset_token,
)
from app.model import Users
router = APIRouter()


@router.post("/access-token/", response_model=schemas.Token)
async def login_access_token(
        db: AsyncSession = Depends(deps.async_get_db),
        form_data: OAuth2PasswordRequestForm = Depends()
) -> Any:
    """
    OAuth2 compatible token login, get an access token for future requests
    """
    user = await crud.users.authenticate(
        db, email=form_data.username, password=form_data.password
    )
    if not user:
        raise HTTPException(
            status_code=400, detail="Incorrect email or password")
    elif not crud.users.is_active(user):
        raise HTTPException(status_code=400, detail="Inactive user")
    access_token_expires = timedelta(
        minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    return {
        "access_token": security.create_access_token(
            user.id, expires_delta=access_token_expires
        ),
        "token_type": "bearer",
    }


@router.get("/getMe/", response_model=schemas.UserGetMe)
async def getMe(
    token=Depends(deps.reusable_oauth2),
    db: AsyncSession = Depends(deps.async_get_db)
) -> Any:
    """Obtain the user that is authenticated.

    Args:
        token (_type_, optional): _description_. Defaults to Depends(deps.reusable_oauth2).
        db (AsyncSession, optional): _description_. Defaults to Depends(deps.async_get_db).

    Returns:
        User: User authenticated.
    """
    res = await crud.users.get_current_user_by_token(token=token, db=db)
    return res

# @router.get("/test-token", response_model=bool)
# def test_token(valid_user: bool = Depends(deps.get_valid_current_user)) -> bool:
#     """
#     Test access token
#     """
#     return valid_user


@router.post("/password-recovery/{email}", response_model=schemas.Msg)
async def recover_password(email: str, db: AsyncSession = Depends(deps.async_get_db)) -> Any:
    """
    Password Recovery
    """
    user = await crud.users.get_by_email(db, email=email)
    if not user:
        raise HTTPException(
            status_code=404,
            detail="error",
        )
    password_reset_token = generate_password_reset_token(email=email)
    send_reset_password_email(
        email_to=user.email, email=email, token=password_reset_token
    )
    return {"msg": "Password recovery email sent"}


@router.post("/reset-password/", response_model=schemas.Msg)
async def reset_password(
        token: str = Body(...),
        new_password: str = Body(...),
        db: AsyncSession = Depends(deps.async_get_db),
) -> Any:
    """
    Reset password
    """
    email = verify_password_reset_token(token)
    if not email:
        raise HTTPException(status_code=400, detail="Invalid token")
    user: Users = await crud.users.get_by_email(db, email=email)
    
    if not user:
        raise HTTPException(
            status_code=404,
            detail="Erro rese",
        )
    elif not crud.users.is_active(user):
        raise HTTPException(
            status_code=400, detail="kipido")
    hashed_password = get_password_hash(new_password)
    user.password = hashed_password

    db.add(user)
    await db.commit()
    await db.refresh(user)
    return {"msg": "Password updated successfully"}

@router.get("/validate_token/")
async def bool_validate_token(
    current_user: model.Users = Depends(deps.get_current_user)
) -> Any:
    return True


@router.post("/job-access-token/", response_model=schemas.Token)
async def login_access_token(
        db: AsyncSession = Depends(deps.async_get_db),
        form_data: OAuth2PasswordRequestForm = Depends()
) -> Any:
    """
    OAuth2 compatible token login, just for users to do jobs.
    """
    user = await crud.users.authenticate(
        db, email=form_data.username, password=form_data.password
    )
    if not user:
        raise HTTPException(
            status_code=400, detail="Incorrect email or password")
    elif not crud.users.is_active(user):
        raise HTTPException(status_code=400, detail="Inactive user")
    access_token_expires = timedelta(
        minutes=settings.JOB_ACCESS_TOKEN_EXPIRE_MINUTES)
    return {
        "access_token": security.create_access_token(
            user.id, expires_delta=access_token_expires
        ),
        "token_type": "bearer",
    }