from typing import Any, List
from app.api.route import deps
from app import crud, model, schemas
from sqlalchemy.ext.asyncio import AsyncSession
from fastapi import APIRouter, Depends, HTTPException


router = APIRouter()

@router.get("/", response_model=List[schemas.RequestTracing])
# @request_tracing(request)
async def read_request_tracing_all(
    db: AsyncSession = Depends(deps.async_get_db),
    current_user: model.Users = Depends(deps.get_current_user)
) -> Any:
    entities = await crud.request_tracing.get_multi(db=db)
    return entities


@router.post("/", response_model=schemas.RequestTracing)
async def create_request_tracing(
    entity_in,
    db: AsyncSession = Depends(deps.async_get_db)
) -> Any:
    entity = await crud.request_tracing.create(db=db, obj_in=entity_in)
    return entity

@router.delete("/delete_request_tracing/")
async def delete_req_tracing(
    db: AsyncSession = Depends(deps.async_get_db),
    current_user: model.Users = Depends(deps.get_current_user)
) -> Any:
    res = await crud.request_tracing.delete_req_tracing(db=db)
    return res

@router.patch("/{id}", response_model=schemas.RequestTracing)
async def update_req_tracing(
    *,
    db: AsyncSession = Depends(deps.async_get_db),
    id: int,
    entity_in: schemas.RequestTracingUpdate,
    current_user: model.Users = Depends(deps.get_current_user)
) -> Any:
    entity = await crud.request_tracing.get(db=db, id=id)
    if entity is None:
        raise HTTPException(status_code=404)
    entity_updated = await crud.request_tracing.update(db=db, db_obj=entity, obj_in=entity_in)
    return entity_updated
