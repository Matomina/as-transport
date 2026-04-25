from app.database.session import Base, engine
from app.models.contact_request import ContactRequest  # noqa: F401


def init_db() -> None:
    """
    Créer les tables nécessaires au backend AS Transports.
    À utiliser uniquement en développement avant la mise en place d'Alembic.
    """

    Base.metadata.create_all(bind=engine)


if __name__ == "__main__":
    init_db()
    print("Database tables created successfully.")