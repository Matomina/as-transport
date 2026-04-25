from email.message import EmailMessage
from html import escape
import smtplib

from app.core.config import settings
from app.models.contact_request import ContactRequest


class EmailConfigurationError(RuntimeError):
    pass


def _assert_email_settings() -> None:
    missing = []

    if not settings.SMTP_HOST:
        missing.append("SMTP_HOST")
    if not settings.SMTP_USER:
        missing.append("SMTP_USER")
    if not settings.SMTP_PASSWORD:
        missing.append("SMTP_PASSWORD")
    if not settings.CONTACT_RECEIVER_EMAIL:
        missing.append("CONTACT_RECEIVER_EMAIL")

    if missing:
        raise EmailConfigurationError(
            f"Configuration email incomplète : {', '.join(missing)}"
        )


def _format_value(value: object) -> str:
    if value is None:
        return "Non renseigné"

    value_as_string = str(value).strip()
    return value_as_string if value_as_string else "Non renseigné"


def _build_text(contact_request: ContactRequest) -> str:
    return f"""
Nouvelle demande de devis - AS Transports

Référence demande : #{contact_request.id}

Nom : {_format_value(contact_request.full_name)}
Téléphone : {_format_value(contact_request.phone)}
Email : {_format_value(contact_request.email)}
Prestation : {_format_value(contact_request.service_type)}

Ville de départ : {_format_value(contact_request.departure_city)}
Ville d'arrivée : {_format_value(contact_request.arrival_city)}
Date souhaitée : {_format_value(contact_request.desired_date)}

Type de logement / lieu : {_format_value(contact_request.housing_type)}
Étage départ : {_format_value(contact_request.departure_floor)}
Étage arrivée : {_format_value(contact_request.arrival_floor)}

Ascenseur départ : {_format_value(contact_request.departure_elevator)}
Ascenseur arrivée : {_format_value(contact_request.arrival_elevator)}

Volume approximatif : {_format_value(contact_request.estimated_volume)}
Créneau de rappel préféré : {_format_value(contact_request.callback_slot)}

Contraintes particulières :
{_format_value(contact_request.constraints)}

Message :
{_format_value(contact_request.message)}
""".strip()


def _build_html(contact_request: ContactRequest) -> str:
    rows = [
        ("Référence demande", f"#{contact_request.id}"),
        ("Nom", contact_request.full_name),
        ("Téléphone", contact_request.phone),
        ("Email", contact_request.email),
        ("Prestation", contact_request.service_type),
        ("Ville de départ", contact_request.departure_city),
        ("Ville d'arrivée", contact_request.arrival_city),
        ("Date souhaitée", contact_request.desired_date),
        ("Type de logement / lieu", contact_request.housing_type),
        ("Étage départ", contact_request.departure_floor),
        ("Étage arrivée", contact_request.arrival_floor),
        ("Ascenseur départ", contact_request.departure_elevator),
        ("Ascenseur arrivée", contact_request.arrival_elevator),
        ("Volume approximatif", contact_request.estimated_volume),
        ("Créneau de rappel préféré", contact_request.callback_slot),
        ("Contraintes particulières", contact_request.constraints),
        ("Message", contact_request.message),
    ]

    table_rows = "\n".join(
        f"""
        <tr>
          <th align="left" style="background:#f5f5f5;padding:10px;border:1px solid #ddd;width:220px;">
            {escape(label)}
          </th>
          <td style="padding:10px;border:1px solid #ddd;">
            {escape(_format_value(value))}
          </td>
        </tr>
        """
        for label, value in rows
    )

    return f"""
    <div style="font-family:Arial,sans-serif;color:#111;line-height:1.5;">
      <h1>Nouvelle demande de devis - AS Transports</h1>
      <p>Une nouvelle demande vient d'être envoyée depuis le site.</p>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:900px;">
        <tbody>
          {table_rows}
        </tbody>
      </table>
    </div>
    """


def send_contact_request_email(contact_request: ContactRequest) -> None:
    _assert_email_settings()

    message = EmailMessage()
    message["Subject"] = f"Nouvelle demande de devis - {contact_request.full_name}"
    message["From"] = settings.SMTP_FROM_EMAIL
    message["To"] = settings.CONTACT_RECEIVER_EMAIL
    message["Reply-To"] = contact_request.email

    message.set_content(_build_text(contact_request))
    message.add_alternative(_build_html(contact_request), subtype="html")

    with smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT) as smtp:
        smtp.starttls()
        smtp.login(settings.SMTP_USER, settings.SMTP_PASSWORD)
        smtp.send_message(message)