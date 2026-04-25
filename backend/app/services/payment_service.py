import stripe

from app.core.config import settings
from app.models.contact_request import ContactRequest, ContactRequestStatus


class PaymentSessionError(RuntimeError):
    pass


def _get_stripe_client():
    if not settings.STRIPE_SECRET_KEY:
        raise PaymentSessionError("STRIPE_SECRET_KEY est manquant.")

    stripe.api_key = settings.STRIPE_SECRET_KEY
    return stripe


def create_payment_session_for_contact_request(
    contact_request: ContactRequest,
    amount_cents: int,
) -> stripe.checkout.Session:
    """
    Prépare une session Stripe Checkout après validation d'un devis.

    Important :
    - Cette fonction ne doit pas être appelée depuis une route publique.
    - Le montant doit venir d'une validation admin, jamais du client.
    """

    if contact_request.status != ContactRequestStatus.ACCEPTED:
        raise PaymentSessionError(
            "Impossible de générer un paiement pour un devis non accepté."
        )

    if amount_cents < 100:
        raise PaymentSessionError("Le montant doit être supérieur ou égal à 1 euro.")

    stripe_client = _get_stripe_client()

    return stripe_client.checkout.Session.create(
        mode="payment",
        customer_email=contact_request.email,
        success_url="https://as-transports.fr/paiement-reussi.html?session_id={CHECKOUT_SESSION_ID}",
        cancel_url="https://as-transports.fr/paiement-annule.html",
        metadata={
            "contact_request_id": str(contact_request.id),
        },
        line_items=[
            {
                "quantity": 1,
                "price_data": {
                    "currency": "eur",
                    "unit_amount": amount_cents,
                    "product_data": {
                        "name": f"AS Transports - Devis #{contact_request.id}",
                        "description": contact_request.service_type,
                    },
                },
            }
        ],
    )