from pydantic import BaseModel
from typing import Optional

class UserGetMe(BaseModel):
    id: int
    full_name: Optional[str] = None
    apaterno: Optional[str] = None
    amaterno: Optional[str] = None
    email: Optional[str] = None

    class Config:
        from_attributes = True

