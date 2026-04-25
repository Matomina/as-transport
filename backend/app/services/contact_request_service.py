from sqlalchemy.orm import Session

from app.models.contact_request import ContactRequest
from app.schemas.contact_request import ContactRequestCreate


def create_contact_request(
    db: Session,
    payload: ContactRequestCreate,
) -> ContactRequest:
    """
    Créer une nouvelle demande de devis/contact.
    """

    contact_request = ContactRequest(**payload.model_dump())

    db.add(contact_request)
    db.commit()
    db.refresh(contact_request)

    return contact_request