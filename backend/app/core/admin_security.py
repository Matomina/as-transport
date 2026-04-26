from typing import Annotated

from app.core.config import settings
from fastapi import Header, HTTPException, status

AdminApiKeyHeader = Annotated[
    str | None,
    Header(alias="X-Admin-Api-Key"),
]


def verify_admin_api_key(
    x_admin_api_key: AdminApiKeyHeader = None,
) -> None:
    """
    Vérifier la clé API admin envoyée dans le header X-Admin-Api-Key.
    Protection temporaire avant mise en place d'une vraie authentification.
    """

    if not settings.ADMIN_API_KEY:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="ADMIN_API_KEY n'est pas configurée.",
        )

    if x_admin_api_key != settings.ADMIN_API_KEY:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Accès admin non autorisé.",
        )