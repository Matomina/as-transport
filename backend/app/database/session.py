from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, sessionmaker

from app.core.config import settings


# ======================================================
# SQLALCHEMY ENGINE
# ======================================================

engine = create_engine(
    settings.DATABASE_URL,
    echo=settings.APP_DEBUG,
    future=True,
    pool_pre_ping=True,
)


# ======================================================
# SESSION FACTORY
# ======================================================

SessionLocal = sessionmaker(
    bind=engine,
    autoflush=False,
    autocommit=False,
    expire_on_commit=False,
)


# ======================================================
# BASE MODEL
# ======================================================

class Base(DeclarativeBase):
    """
    Base SQLAlchemy commune à tous les modèles.
    """
    pass


# ======================================================
# DB DEPENDENCY
# ======================================================

def get_db():
    """
    Dependency FastAPI pour injecter la session DB.
    """

    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()