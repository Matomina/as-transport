from typing import Annotated

from fastapi import APIRouter, Depends, Response, status
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.schemas.contact_request import (
    ContactRequestCreate,
    ContactRequestResponse,
)
from app.services.contact_request_service import create_contact_request

router = APIRouter(
    prefix="/quotes",
    tags=["Quotes"],
)

DbSession = Annotated[Session, Depends(get_db)]


@router.post(
    "",
    response_model=ContactRequestResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_quote_request_endpoint(
    payload: ContactRequestCreate,
    db: DbSession,
):
    """
    Créer une demande de devis depuis le formulaire public.
    Route utilisée par le front : POST /api/quotes
    """

    if payload.website:
        return Response(status_code=status.HTTP_204_NO_CONTENT)

    return create_contact_request(db=db, payload=payload)