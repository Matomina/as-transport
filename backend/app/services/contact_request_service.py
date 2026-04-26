import logging

from sqlalchemy.orm import Session

from app.core.config import settings
from app.models.contact_request import ContactRequest, ContactRequestStatus
from app.schemas.contact_request import ContactRequestCreate
from app.services.email_service import send_contact_request_email

logger = logging.getLogger(__name__)


def create_contact_request(
    db: Session,
    payload: ContactRequestCreate,
) -> ContactRequest:
    """
    Créer une nouvelle demande de devis/contact.

    La demande est toujours sauvegardée en base.
    L'envoi email est tenté uniquement si SMTP est configuré.
    Une erreur email ne doit pas bloquer la demande client.
    """

    contact_request = ContactRequest(**payload.to_model_data())

    db.add(contact_request)
    db.commit()
    db.refresh(contact_request)

    if settings.SMTP_USER and settings.SMTP_PASSWORD:
        try:
            send_contact_request_email(contact_request)
        except Exception:
            logger.exception(
                "Erreur pendant l'envoi email de la demande #%s",
                contact_request.id,
            )

    return contact_request


def get_contact_requests(
    db: Session,
    status: ContactRequestStatus | None = None,
) -> list[ContactRequest]:
    """
    Récupérer les demandes de devis.

    Si un statut est fourni, la liste est filtrée par statut.
    """

    query = db.query(ContactRequest).order_by(ContactRequest.created_at.desc())

    if status is not None:
        query = query.filter(ContactRequest.status == status)

    return query.all()


def get_contact_request_by_id(
    db: Session,
    contact_request_id: int,
) -> ContactRequest | None:
    """
    Récupérer une demande de devis par son identifiant.
    """

    return (
        db.query(ContactRequest)
        .filter(ContactRequest.id == contact_request_id)
        .first()
    )


def update_contact_request_status(
    db: Session,
    contact_request: ContactRequest,
    status: ContactRequestStatus,
) -> ContactRequest:
    """
    Mettre à jour le statut d'une demande de devis.
    """

    contact_request.status = status

    db.add(contact_request)
    db.commit()
    db.refresh(contact_request)

    return contact_request