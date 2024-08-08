from fastapi.encoders import jsonable_encoder
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.sql.expression import select
from app.crud.base import CRUDBase
from app.model.role import Role
from app.schemas.role import RoleCreate, RoleUpdate
from app.validation.check_validation import Validations


class CRUDRole(CRUDBase[Role, RoleCreate, RoleUpdate]):
    async def get_role_by_name(self, db: AsyncSession, role_name: str):
        query_role = await db.execute(select(Role).filter(
            Role.name == role_name
        ))
        entity_role: Role = query_role.scalars().first()
        return entity_role
        
        
        
    async def create_entity(self, db: AsyncSession, *, obj_in: RoleCreate) -> Role:
        obj_in_data = jsonable_encoder(obj_in)
        db_obj = self.model(**obj_in_data)
        
        entity_role = await self.get_role_by_name(db=db, role_name=db_obj.name)
        
        Validations.validate_is_not_none(entity_role, "El rol ya existe.")
        Validations.validate_len_min(db_obj.name, 5)
        Validations.validate_len_max(db_obj.name, 60)
        # Validations.validate_role(db_obj.name)
        
        db.add(db_obj)
        await db.commit()
        await db.refresh(db_obj)
        return db_obj

    async def get_role_by_user_id(self, db: AsyncSession, role_id: int) -> Role:
        query_role = await db.execute(select(Role).filter(
            Role.id == role_id
        ))
        entity_role: Role = query_role.scalars().first()
        return entity_role

role = CRUDRole(Role)
