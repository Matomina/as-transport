from typing import Annotated

from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.schemas.contact_request import (
    ContactRequestCreate,
    ContactRequestResponse,
)
from app.services.contact_request_service import create_contact_request

router = APIRouter(
    prefix="/contact-requests",
    tags=["Contact requests"],
)

DbSession = Annotated[Session, Depends(get_db)]


@router.post(
    "",
    response_model=ContactRequestResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_contact_request_endpoint(
    payload: ContactRequestCreate,
    db: DbSession,
):
    return create_contact_request(db=db, payload=payload)