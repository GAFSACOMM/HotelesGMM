from typing import TYPE_CHECKING
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.base_class import Base

if TYPE_CHECKING:
    from .role import Role
    from .users import Users

class Users(Base):
    id: int = Column(Integer, primary_key=True, index=True)
    first_name: str = Column(String, nullable=False)
    last_name: str = Column(String, nullable=False)
    maiden_name: str = Column(String, nullable=True)
    address: str = Column(String, nullable=False)
    phone_number: str = Column(String, nullable=True)
    email: str = Column(String, nullable=False)
    password: str = Column(String, nullable=False)
    status_user: int = Column(Integer, nullable=False)
    
    fk_role_id: int = Column(Integer, ForeignKey("role.id", ondelete="CASCADE", onupdate="CASCADE"), nullable= True, index=True)
    role: "Role" = relationship("Role", back_populates="users")
    
    fk_users_id: int = Column(Integer, ForeignKey("users.id", ondelete="CASCADE", onupdate="CASCADE"), nullable=True, index=True)
    users: "Users" = relationship("Users", remote_side=[id])
    
    #! Agregar FK aquí para identificar que el usuario a qué hotel le pertenece.
    
    # %RJSÑN54Vj'Ak<&{'4jPt5r2P7f/$ñG=wfJI4t#@A3(opT3y=/