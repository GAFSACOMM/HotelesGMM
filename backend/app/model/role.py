from sqlalchemy import Column, Integer, String, Text
from sqlalchemy.orm import relationship
from app.base_class import Base


class Role(Base):
    id: int = Column(Integer, primary_key=True, index=True)
    name: str = Column(String, nullable=False)
    description: str = Column(Text, nullable=True)

    users = relationship("Users", back_populates="role")
