from sqlalchemy import Column, Integer, String
from app.base_class import Base


class RequestTracing(Base):
    id: int = Column(Integer, primary_key=True, index=True)

    request_time: str = Column(String, nullable= True, index=True)
    client_ip: str = Column(String, nullable= True, index=True)
    method: str = Column(String, nullable= True, index=True)
    url: str = Column(String, nullable= True, index=True)
    status_code: str = Column(String, nullable= True, index=True)
    response_time: str = Column(String, nullable= True, index=True)
    request_body: str = Column(String, nullable= True, index=True)
    response: str = Column(String, nullable= True, index=True)
    