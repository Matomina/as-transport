from sqlalchemy.orm import Session

from app.core.config import settings
from app.models.contact_request import ContactRequest
from app.schemas.contact_request import ContactRequestCreate
from app.services.email_service import send_contact_request_email


def create_contact_request(
    db: Session,
    payload: ContactRequestCreate,
) -> ContactRequest:
    """
    Créer une nouvelle demande de devis/contact.
    En développement, l'email est envoyé uniquement si SMTP est configuré.
    """

    contact_request = ContactRequest(**payload.to_model_data())

    db.add(contact_request)
    db.commit()
    db.refresh(contact_request)

    if settings.SMTP_USER and settings.SMTP_PASSWORD:
        send_contact_request_email(contact_request)

    return contact_request