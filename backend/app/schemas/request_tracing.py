from pydantic import BaseModel
from typing import Optional


class RequestTracingBase(BaseModel):
    request_time: Optional[str] = None
    client_ip: Optional[str] = None
    method: Optional[str] = None
    url: Optional[str] = None
    status_code: Optional[str] = None
    response_time: Optional[str] = None
    request_body: Optional[str] = None
    response: Optional[str] = None

class RequestTracingCreate(RequestTracingBase):
    pass


class RequestTracingUpdate(BaseModel):
    request_time: Optional[str] = None
    client_ip: Optional[str] = None
    method: Optional[str] = None
    url: Optional[str] = None
    status_code: Optional[str] = None
    response_time: Optional[str] = None
    request_body: Optional[str] = None
    response: Optional[str] = None


class RequestTracingInDBBase(RequestTracingBase):
    id: int
    request_time: Optional[str] = None
    client_ip: Optional[str] = None
    method: Optional[str] = None
    url: Optional[str] = None
    status_code: Optional[str] = None
    response_time: Optional[str] = None
    request_body: Optional[str] = None
    response: Optional[str] = None

    class Config:
        orm_mode = True


class RequestTracing(RequestTracingInDBBase):
    pass