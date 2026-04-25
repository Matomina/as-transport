import logging

from sqlalchemy.orm import Session

from app.core.config import settings
from app.models.contact_request import ContactRequest
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