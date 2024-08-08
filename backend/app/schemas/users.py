from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional

class UserBase(BaseModel):
    first_name: str
    last_name: str
    maiden_name: Optional[str] = None
    address: str
    phone_number: str
    email: EmailStr
    password: str
    fk_users_id: Optional[int] = None
    fk_role_id: Optional[int] = None


class UserCreate(UserBase):
    email: Optional[EmailStr] = None
    password: str
    fk_users_id: Optional[int]


class UserUpdate(BaseModel):
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    maiden_name: Optional[str] = None
    address: Optional[str] = None
    phone_number: Optional[str] = None
    email: Optional[EmailStr] = None
    password: Optional[str] = None
    fk_users_id: Optional[int] = None
    fk_role_id: Optional[int] = None

class UserGetMe(BaseModel):
    id: int
    first_name: str
    last_name: str
    maiden_name: Optional[str] = None
    fk_role_id: Optional[int] = None
    fk_users_id: Optional[int] = None
    phone_number: Optional[str] = None
    email: Optional[EmailStr] = None
    
    class Config:
        orm_mode = True

class UserInDBBase(UserBase):
    id: int
    first_name: str
    last_name: str
    maiden_name: Optional[str] = None
    address: str
    phone_number: str
    email: EmailStr
    password: str
    fk_users_id: Optional[int] = None
    fk_role_id: Optional[int] = None

    class Config:
        orm_mode = True

class UserGetEmail(BaseModel):
    email: EmailStr
class User(UserInDBBase):
    pass
