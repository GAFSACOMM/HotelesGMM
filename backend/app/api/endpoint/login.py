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
router = APIRouter()
import httpx


@router.post("/access-token/", response_model=schemas.Token)
async def job_access_token(
        db: AsyncSession = Depends(deps.async_get_db),
        form_data: OAuth2PasswordRequestForm = Depends()
) -> Any:
    """
    OAuth2 compatible token login, just for users to do jobs.
    """
    async with httpx.AsyncClient() as client:
        response_sso = await client.post(
            f"http://10.1.7.92:8000/api/v1/login/access-token/{settings.CODE_SYSTEM}",
            data={"username": form_data.username, "password": form_data.password}
        )

    if response_sso.status_code != 200:
        raise HTTPException(status_code=response_sso.status_code, detail="Failed to obtain access.")

    token_data = response_sso.json()
    print("<<<<<<<<<183", token_data)
    return {
        "access_token": token_data["access_token"],
        "token_type": token_data["token_type"]
    }
    
    
@router.get("/getMe/", response_model=schemas.UserGetMe)
async def getMe(
    current_user = Depends(deps.get_current_user)
) -> Any:
    return current_user


# @router.post("/password-recovery/{email}", response_model=schemas.Msg)
# async def recover_password(email: str, db: AsyncSession = Depends(deps.async_get_db)) -> Any:
#     """
#     Password Recovery
#     """
#     user = await crud.users.get_by_email(db, email=email)
#     if not user:
#         raise HTTPException(
#             status_code=404,
#             detail="error",
#         )
#     password_reset_token = generate_password_reset_token(email=email)
#     send_reset_password_email(
#         email_to=user.email, email=email, token=password_reset_token
#     )
#     return {"msg": "Password recovery email sent"}


# @router.post("/reset-password/", response_model=schemas.Msg)
# async def reset_password(
#         token: str = Body(...),
#         new_password: str = Body(...),
#         db: AsyncSession = Depends(deps.async_get_db),
# ) -> Any:
#     """
#     Reset password
#     """
#     email = verify_password_reset_token(token)
#     if not email:
#         raise HTTPException(status_code=400, detail="Invalid token")
#     user: Users = await crud.users.get_by_email(db, email=email)
    
#     if not user:
#         raise HTTPException(
#             status_code=404,
#             detail="Erro rese",
#         )
#     elif not crud.users.is_active(user):
#         raise HTTPException(
#             status_code=400, detail="kipido")
#     hashed_password = get_password_hash(new_password)
#     user.password = hashed_password

#     db.add(user)
#     await db.commit()
#     await db.refresh(user)
#     return {"msg": "Password updated successfully"}

@router.get("/validate_token/")
async def bool_validate_token(
    current_user = Depends(deps.get_current_user)
) -> Any:
    return True

