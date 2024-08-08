from pydantic import BaseModel
from typing import Optional


class RoleBase(BaseModel):
    name: str
    description: str


class RoleCreate(RoleBase):
    pass


class RoleUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None


class RoleInDBBase(RoleBase):
    id: int
    name: str
    description: str

    class Config:
        orm_mode = True


class Role(RoleInDBBase):
    pass