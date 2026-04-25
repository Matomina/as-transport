from datetime import datetime
from enum import StrEnum

from sqlalchemy import DateTime, Enum, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.database.session import Base


class ContactRequestStatus(StrEnum):
    NEW = "new"
    TO_CALL = "to_call"
    QUOTE_SENT = "quote_sent"
    ACCEPTED = "accepted"
    CANCELLED = "cancelled"
    ARCHIVED = "archived"


class ContactRequest(Base):
    __tablename__ = "contact_requests"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)

    full_name: Mapped[str] = mapped_column(String(150), nullable=False)
    phone: Mapped[str] = mapped_column(String(30), nullable=False)
    email: Mapped[str] = mapped_column(String(255), nullable=False)

    service_type: Mapped[str] = mapped_column(String(100), nullable=False)

    departure_city: Mapped[str | None] = mapped_column(String(120), nullable=True)
    arrival_city: Mapped[str | None] = mapped_column(String(120), nullable=True)
    desired_date: Mapped[str | None] = mapped_column(String(50), nullable=True)

    housing_type: Mapped[str | None] = mapped_column(String(100), nullable=True)
    departure_floor: Mapped[str | None] = mapped_column(String(50), nullable=True)
    arrival_floor: Mapped[str | None] = mapped_column(String(50), nullable=True)

    departure_elevator: Mapped[str | None] = mapped_column(String(50), nullable=True)
    arrival_elevator: Mapped[str | None] = mapped_column(String(50), nullable=True)

    estimated_volume: Mapped[str | None] = mapped_column(String(100), nullable=True)
    callback_slot: Mapped[str | None] = mapped_column(String(100), nullable=True)

    constraints: Mapped[str | None] = mapped_column(Text, nullable=True)
    message: Mapped[str] = mapped_column(Text, nullable=False)

    status: Mapped[ContactRequestStatus] = mapped_column(
        Enum(ContactRequestStatus),
        default=ContactRequestStatus.NEW,
        nullable=False,
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        nullable=False,
    )

    updated_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
        nullable=False,
    )