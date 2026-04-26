from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from app.core.admin_security import verify_admin_api_key
from app.database.session import get_db
from app.models.contact_request import ContactRequestStatus
from app.schemas.contact_request import (
    ContactRequestDetailResponse,
    ContactRequestResponse,
    ContactRequestUpdateStatus,
)
from app.services.contact_request_service import (
    get_contact_request_by_id,
    get_contact_requests,
    update_contact_request_status,
)

router = APIRouter(
    prefix="/contact-requests",
    tags=["Admin contact requests"],
    dependencies=[Depends(verify_admin_api_key)],
)

DbSession = Annotated[Session, Depends(get_db)]
StatusQuery = Annotated[
    ContactRequestStatus | None,
    Query(),
]


@router.get(
    "",
    response_model=list[ContactRequestResponse],
)
def list_contact_requests_endpoint(
    db: DbSession,
    request_status: StatusQuery = None,
):
    """
    Lister les demandes de devis.

    Filtrage optionnel par statut :
    - new
    - to_call
    - quote_sent
    - accepted
    - cancelled
    - archived
    """

    return get_contact_requests(db=db, status=request_status)


@router.get(
    "/{contact_request_id}",
    response_model=ContactRequestDetailResponse,
)
def get_contact_request_detail_endpoint(
    contact_request_id: int,
    db: DbSession,
):
    """
    Récupérer le détail complet d'une demande de devis.
    """

    contact_request = get_contact_request_by_id(
        db=db,
        contact_request_id=contact_request_id,
    )

    if contact_request is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Demande de devis introuvable.",
        )

    return contact_request


@router.patch(
    "/{contact_request_id}/status",
    response_model=ContactRequestDetailResponse,
)
def update_contact_request_status_endpoint(
    contact_request_id: int,
    payload: ContactRequestUpdateStatus,
    db: DbSession,
):
    """
    Mettre à jour le statut d'une demande de devis.

    Route protégée par clé API admin.
    Une authentification plus complète pourra être ajoutée plus tard.
    """

    contact_request = get_contact_request_by_id(
        db=db,
        contact_request_id=contact_request_id,
    )

    if contact_request is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Demande de devis introuvable.",
        )

    return update_contact_request_status(
        db=db,
        contact_request=contact_request,
        status=ContactRequestStatus(payload.status),
    )