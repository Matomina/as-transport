from datetime import datetime
from typing import Literal

from pydantic import BaseModel, ConfigDict, EmailStr, Field, field_validator

ServiceType = Literal[
    "Déménagement",
    "Montage de meubles",
    "Montage cuisine",
    "Débarras",
    "Livraison",
]

ContactRequestStatusValue = Literal[
    "new",
    "to_call",
    "quote_sent",
    "accepted",
    "cancelled",
    "archived",
]


class ContactRequestCreate(BaseModel):
    model_config = ConfigDict(
        extra="forbid",
        str_strip_whitespace=True,
    )

    full_name: str = Field(..., min_length=2, max_length=150)
    phone: str = Field(..., min_length=10, max_length=30)
    email: EmailStr

    service_type: ServiceType

    departure_city: str | None = Field(default=None, max_length=120)
    arrival_city: str | None = Field(default=None, max_length=120)
    desired_date: str | None = Field(default=None, max_length=50)

    housing_type: str | None = Field(default=None, max_length=100)
    departure_floor: str | None = Field(default=None, max_length=50)
    arrival_floor: str | None = Field(default=None, max_length=50)

    departure_elevator: str | None = Field(default=None, max_length=50)
    arrival_elevator: str | None = Field(default=None, max_length=50)

    estimated_volume: str | None = Field(default=None, max_length=100)
    callback_slot: str | None = Field(default=None, max_length=100)

    constraints: str | None = Field(default=None, max_length=1200)
    message: str = Field(..., min_length=10, max_length=2500)

    # Honeypot anti-spam côté front
    website: str | None = Field(default=None, max_length=255)

    @field_validator("phone")
    @classmethod
    def validate_phone(cls, value: str) -> str:
        allowed_chars = set("0123456789+ .()-")

        if not all(char in allowed_chars for char in value):
            raise ValueError(
                "Le numéro de téléphone contient des caractères invalides."
            )

        return value

    def to_model_data(self) -> dict:
        return self.model_dump(exclude={"website"})


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


class ContactRequestDetailResponse(BaseModel):
    id: int
    full_name: str
    phone: str
    email: EmailStr
    service_type: str

    departure_city: str | None
    arrival_city: str | None
    desired_date: str | None

    housing_type: str | None
    departure_floor: str | None
    arrival_floor: str | None

    departure_elevator: str | None
    arrival_elevator: str | None

    estimated_volume: str | None
    callback_slot: str | None

    constraints: str | None
    message: str

    status: str
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True


class ContactRequestUpdateStatus(BaseModel):
    status: ContactRequestStatusValue