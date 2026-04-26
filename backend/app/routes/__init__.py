from app.routes.admin_contact_requests import (
    router as admin_contact_requests_router,
)
from app.routes.contact_requests import router as contact_requests_router
from app.routes.quotes import router as quotes_router

__all__ = [
    "admin_contact_requests_router",
    "contact_requests_router",
    "quotes_router",
]