from fastapi import HTTPException
from app.model.users import Users
from app.crud.base import CRUDBase
from app import crud
from sqlalchemy.sql.expression import select
from typing import Any, Dict, Optional, Union
from sqlalchemy.ext.asyncio import AsyncSession
from app.schemas.users import UserCreate, UserUpdate
from app.validation.check_validation import Validations
# from app.enum.EnumStatusUser import EnumStatusUser as StatusUser
from app.core.security import get_password_hash, verify_password
from jose import jwt
from app.core.config import settings
from app import schemas, crud
from fastapi import HTTPException, status
from pydantic import ValidationError
from datetime import timedelta
from app.core import security


class CRUDUsers(CRUDBase[Users, UserCreate, UserUpdate]):
    async def get_by_email(self, db: AsyncSession, *, email: str) -> Optional[Users]:
        result = await db.execute(select(Users).filter(Users.email == email))
        entity_user: Users = result.scalars().first()
        return entity_user

    async def create_entity(self, db: AsyncSession, *, obj_in: UserCreate) -> Users:
        db_obj = Users(
            first_name=obj_in.first_name,
            last_name=obj_in.last_name,
            maiden_name=obj_in.maiden_name,
            address=obj_in.address,
            phone_number=obj_in.phone_number,
            email=obj_in.email,
            password=get_password_hash(obj_in.password),
            fk_users_id=obj_in.fk_users_id,
            fk_role_id=obj_in.fk_role_id,
            status_user=int(1)
        )

        user_email = await self.get_by_email(db=db, email=db_obj.email)

        Validations.validate_is_not_none(
            user_email, "Ya existe una cuenta con ese correo.")

        Validations.validate_name(db_obj.first_name)
        Validations.validate_lastname(db_obj.last_name)
        Validations.validate_email(db_obj.email)
        Validations.validate_phone(db_obj.phone_number)
        Validations.validate_password(db_obj.password)

        db.add(db_obj)
        await db.commit()
        await db.refresh(db_obj)
        return db_obj

    async def update(
        self, db: AsyncSession, *, db_obj: Users, obj_in: Union[UserUpdate, Dict[str, Any]]
    ) -> Users:
        if isinstance(obj_in, dict):
            update_data = obj_in
        else:
            update_data = obj_in.dict(exclude_unset=True)
        if update_data.get("password", None):
            hashed_password = get_password_hash(update_data["password"])
            del update_data["password"]
            update_data["password"] = hashed_password
        return await super().update(db, db_obj=db_obj, obj_in=update_data)

    def is_active(self, user: Users) -> bool:
        is_active: bool = user.status_user == 1
        return is_active

    async def authenticate(self, db: AsyncSession, *, email: str, password: str) -> Optional[Users]:
        user = await self.get_by_email(db, email=email)
        if not user:
            return None
        if not verify_password(password, user.password):
            return None
        return user


    async def get_current_user_by_token(self, token: str, db):
        try:
            payload = jwt.decode(
                token, settings.SECRET_KEY, algorithms=[security.ALGORITHM]
            )
            token_data = schemas.TokenPayload(**payload)
        except (jwt.JWTError, ValidationError):
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="No se pueden validar las credenciales.",
            )
        user: Users = await crud.users.get(db, id=token_data.sub)
        access_token_expires = timedelta(
            minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
        return user

    @staticmethod
    def get_concat_name(data_user: any):
        return f"{data_user.first_name} {data_user.last_name} {data_user.maiden_name}"


users = CRUDUsers(Users)
