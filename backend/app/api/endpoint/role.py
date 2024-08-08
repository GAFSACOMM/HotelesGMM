from typing import Any, List
from sqlalchemy.ext.asyncio import AsyncSession
from fastapi import APIRouter, Depends, HTTPException

from app.api.route import deps
from app import crud, model, schemas

router = APIRouter()


@router.post("/", response_model=schemas.Role)
async def create_role(
    *,
    db: AsyncSession = Depends(deps.async_get_db),
    entity_in: schemas.RoleCreate,
    current_user: model.Users = Depends(deps.get_current_user)
) -> Any:
    entity = await crud.role.create_entity(db=db, obj_in=entity_in)
    return entity


@router.get("/", response_model=List[schemas.Role])
async def read_role_all(
    db: AsyncSession = Depends(deps.async_get_db),
    current_user: model.Users = Depends(deps.get_current_user)
) -> Any:
    entities = await crud.role.get_multi(db=db)
    return entities

@router.get("/{id}", response_model=schemas.Role)
async def read_role_by_id(
    *,
    db: AsyncSession = Depends(deps.async_get_db),
    current_user: model.Users = Depends(deps.get_current_user),
    id: int
) -> Any:
    entity = await crud.role.get(db=db, id=id)
    if entity is None:
        raise HTTPException(status_code=404)
    return entity

@router.patch("/{id}", response_model=schemas.Role)
async def update_role(
    *,
    db: AsyncSession = Depends(deps.async_get_db),
    id: int,
    entity_in: schemas.RoleUpdate,
    current_user: model.Users = Depends(deps.get_current_user)
) -> Any:
    entity = await crud.role.get(db=db, id=id)
    if entity is None:
        raise HTTPException(status_code=404)
    entity_updated = await crud.role.update(db=db, db_obj=entity, obj_in=entity_in)
    return entity_updated