from datetime import datetime
from typing import Optional

from pydantic import BaseModel, EmailStr, Field


class ContactRequestCreate(BaseModel):
    full_name: str = Field(..., min_length=2, max_length=150)
    phone: str = Field(..., min_length=6, max_length=30)
    email: EmailStr

    service_type: str

    departure_city: Optional[str] = None
    arrival_city: Optional[str] = None
    desired_date: Optional[str] = None

    housing_type: Optional[str] = None
    departure_floor: Optional[str] = None
    arrival_floor: Optional[str] = None

    departure_elevator: Optional[str] = None
    arrival_elevator: Optional[str] = None

    estimated_volume: Optional[str] = None
    callback_slot: Optional[str] = None

    constraints: Optional[str] = None
    message: str


class ContactRequestResponse(BaseModel):
    id: int
    full_name: str
    phone: str
    email: EmailStr
    service_type: str
    status: str
    created_at: datetime

    class Config:
        from_attributes = True