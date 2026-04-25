from functools import lru_cache

from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """
    Configuration centrale du backend AS Transports.
    Chargée automatiquement depuis .env
    """

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=True,
        extra="ignore",
    )

    # ======================================================
    # APP
    # ======================================================

    APP_NAME: str = "AS Transports API"
    APP_ENV: str = "development"
    APP_DEBUG: bool = True
    APP_VERSION: str = "0.1.0"

    # ======================================================
    # SERVER
    # ======================================================

    HOST: str = "0.0.0.0"
    PORT: int = 8000

    # ======================================================
    # DATABASE
    # ======================================================

    DATABASE_URL: str = Field(
        default="postgresql+psycopg://postgres:postgres@localhost:5432/as_transports"
    )

    # ======================================================
    # SECURITY
    # ======================================================

    SECRET_KEY: str = "CHANGE_ME_SUPER_SECRET_KEY"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60
    ALGORITHM: str = "HS256"

    # ======================================================
    # CORS
    # ======================================================

    BACKEND_CORS_ORIGINS: str = (
        "http://localhost:5173,http://127.0.0.1:5173"
    )

    # ======================================================
    # EMAIL
    # ======================================================

    SMTP_HOST: str = "smtp.gmail.com"
    SMTP_PORT: int = 587
    SMTP_USER: str = ""
    SMTP_PASSWORD: str = ""
    SMTP_FROM_EMAIL: str = "contact@as-transports.fr"

    # ======================================================
    # CONTACT
    # ======================================================

    CONTACT_RECEIVER_EMAIL: str = "alban.transports@gmail.com"

    # ======================================================
    # LOGGING
    # ======================================================

    LOG_LEVEL: str = "INFO"

    # ======================================================
    # PAYMENT
    # ======================================================

    STRIPE_SECRET_KEY: str = ""
    STRIPE_PUBLIC_KEY: str = ""
    STRIPE_WEBHOOK_SECRET: str = ""

    # ======================================================
    # HELPERS
    # ======================================================

    @property
    def cors_origins(self) -> list[str]:
        return [
            origin.strip()
            for origin in self.BACKEND_CORS_ORIGINS.split(",")
            if origin.strip()
        ]


@lru_cache
def get_settings() -> Settings:
    """
    Singleton settings cache.
    """
    return Settings()


settings = get_settings()