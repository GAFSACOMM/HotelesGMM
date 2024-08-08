from typing import Any, List
from sqlalchemy.ext.asyncio import AsyncSession
from fastapi import APIRouter, Depends, HTTPException
from pydantic.networks import EmailStr

from app.api.route import deps
from app import crud, model, schemas

router = APIRouter()


@router.post("/", response_model=schemas.User)
async def create_user(
    *,
    db: AsyncSession = Depends(deps.async_get_db),
    entity_in: schemas.UserCreate,
    current_user: model.Users = Depends(deps.get_current_user)
) -> Any:
    entity = await crud.users.create_entity(db=db, obj_in=entity_in)
    return entity


@router.get("/get_all/", response_model=List[schemas.User])
async def read_user_all(
    db: AsyncSession = Depends(deps.async_get_db),
) -> Any:
    entities = await crud.users.get_multi(db=db)
    return entities


@router.get("/{id}", response_model=schemas.User)
async def read_user_by_id(
    *,
    db: AsyncSession = Depends(deps.async_get_db),
    current_user: model.Users = Depends(deps.get_current_user),
    id: int
) -> Any:
    entity = await crud.users.get(db=db, id=id)
    if entity is None:
        raise HTTPException(status_code=404)
    return entity


@router.patch("/{id}", response_model=schemas.User)
async def update_user(
    *,
    db: AsyncSession = Depends(deps.async_get_db),
    id: int,
    entity_in: schemas.UserUpdate,
    current_user: model.Users = Depends(deps.get_current_user)
) -> Any:
    entity = await crud.users.get(db=db, id=id)
    if entity is None:
        raise HTTPException(status_code=404)
    entity_updated = await crud.users.update(db=db, db_obj=entity, obj_in=entity_in)
    return entity_updated


#Obtener el correo del usuario
@router.get("/get_email_address/")
async def read_user_email(
    email: EmailStr,
    db: AsyncSession = Depends(deps.async_get_db),
    current_user: model.Users = Depends(deps.get_current_user)
) -> Any:
    entities = await crud.users.get_by_email(db=db,email=email)
    if entities != None:
        return True
    else:
        return False