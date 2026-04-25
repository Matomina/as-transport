from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.routes import contact_requests_router, quotes_router


def create_application() -> FastAPI:
    """
    Factory principale FastAPI.
    Initialise l'application, middleware, routes et configuration.
    """

    app = FastAPI(
        title=settings.APP_NAME,
        version=settings.APP_VERSION,
        debug=settings.APP_DEBUG,
        docs_url="/docs",
        redoc_url="/redoc",
        openapi_url="/openapi.json",
    )

    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    app.include_router(quotes_router, prefix="/api")

    # Route conservée temporairement pour compatibilité interne / future admin.
    app.include_router(contact_requests_router, prefix="/api/v1")

    @app.get("/", tags=["Root"])
    async def root():
        return {
            "message": "AS Transports API running",
            "environment": settings.APP_ENV,
            "version": settings.APP_VERSION,
        }

    @app.get("/health", tags=["Health"])
    async def healthcheck():
        return {
            "status": "ok",
            "service": settings.APP_NAME,
        }

    return app


app = create_application()