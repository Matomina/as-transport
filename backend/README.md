# AS Transports — Backend FastAPI

Backend métier développé pour **AS Transports**, entreprise spécialisée dans le déménagement, le montage de meubles, le montage de cuisines, le débarras et la livraison.

Cette API permet de recevoir les demandes de devis envoyées depuis le site React, de les valider côté serveur, de les enregistrer en base PostgreSQL et de préparer les futures évolutions : notification email, gestion des statuts, back-office et paiement sécurisé après validation du devis.

---

## Stack backend

- Python 3.11+
- FastAPI
- Uvicorn
- SQLAlchemy
- PostgreSQL
- Psycopg
- Pydantic
- Pydantic Settings
- Ruff
- Docker Compose
- SMTP / EmailMessage
- Stripe préparé pour une future intégration

---

## Objectifs

### Objectifs métier

- Recevoir les demandes de devis du formulaire public
- Centraliser les demandes en base de données
- Préparer une gestion professionnelle des leads
- Notifier AS Transports par email
- Préparer un futur parcours de devis validé
- Préparer la génération de liens de paiement sécurisés

### Objectifs techniques

- Créer une API claire et maintenable
- Valider les données côté serveur
- Séparer les routes, schemas, modèles et services
- Utiliser PostgreSQL pour persister les demandes
- Garder une architecture évolutive
- Préparer Stripe sans exposer de logique de paiement publique
- Maintenir une qualité de code contrôlée avec Ruff

---

## Fonctionnalités actuelles

- Application FastAPI structurée
- Configuration centralisée avec `.env`
- CORS configuré pour le front Vite
- Route de santé `/health`
- Documentation Swagger `/docs`
- Route publique `POST /api/quotes`
- Validation serveur avec Pydantic
- Honeypot anti-spam côté formulaire
- Enregistrement des demandes en base PostgreSQL
- Modèle SQLAlchemy `ContactRequest`
- Statuts métier de demande
- Service email SMTP préparé
- Envoi email conditionnel selon la configuration SMTP
- Structure de paiement Stripe préparée
- Base PostgreSQL locale via Docker Compose
- Script d’initialisation des tables en développement

---

## Parcours actuel

```txt
Formulaire React
→ POST /api/quotes
→ Validation Pydantic
→ Création ContactRequest
→ Sauvegarde PostgreSQL
→ Envoi email si SMTP configuré
→ Réponse API
→ Redirection front vers /merci.html
```

---

## Parcours cible futur

```txt
Demande de devis
→ Enregistrement en base
→ Notification AS Transports
→ Étude commerciale
→ Passage du devis en statut accepté
→ Définition du montant par AS Transports
→ Génération d’un lien de paiement Stripe
→ Envoi du lien au client
→ Confirmation du paiement
```

---

## Architecture backend

```txt
backend/
├── app/
│   ├── core/
│   │   └── config.py
│   │
│   ├── database/
│   │   ├── init_db.py
│   │   └── session.py
│   │
│   ├── models/
│   │   └── contact_request.py
│   │
│   ├── routes/
│   │   ├── __init__.py
│   │   ├── contact_requests.py
│   │   └── quotes.py
│   │
│   ├── schemas/
│   │   └── contact_request.py
│   │
│   ├── services/
│   │   ├── contact_request_service.py
│   │   ├── email_service.py
│   │   └── payment_service.py
│   │
│   └── main.py
│
├── .env.example
├── pyproject.toml
└── README.md
```

---

## Fichiers clés

### `app/main.py`

Point d’entrée FastAPI.

Il initialise :

- l’application FastAPI
- le middleware CORS
- les routes publiques
- les routes de santé
- la documentation Swagger

Routes principales :

```txt
GET  /
GET  /health
POST /api/quotes
POST /api/v1/contact-requests
```

---

### `app/core/config.py`

Configuration centrale du backend.

Les variables sont chargées depuis le fichier `.env`.

La configuration gère :

- nom de l’application
- environnement
- port
- base PostgreSQL
- sécurité
- CORS
- SMTP
- email destinataire
- Stripe

---

### `app/routes/quotes.py`

Route publique utilisée par le formulaire du site.

Endpoint principal :

```txt
POST /api/quotes
```

Cette route :

- reçoit les données du formulaire
- applique la validation Pydantic
- vérifie le champ honeypot
- crée une demande de devis
- retourne la demande créée

---

### `app/routes/contact_requests.py`

Route conservée pour compatibilité interne et future évolution admin.

Endpoint actuel :

```txt
POST /api/v1/contact-requests
```

Cette route pourra être remplacée ou complétée plus tard par des routes protégées de gestion des demandes.

---

### `app/schemas/contact_request.py`

Définit les données acceptées par l’API.

Champs principaux :

- `full_name`
- `phone`
- `email`
- `service_type`
- `departure_city`
- `arrival_city`
- `desired_date`
- `housing_type`
- `departure_floor`
- `arrival_floor`
- `departure_elevator`
- `arrival_elevator`
- `estimated_volume`
- `callback_slot`
- `constraints`
- `message`
- `website`

Le champ `website` sert de honeypot anti-spam.

Types de prestations acceptés :

```txt
Déménagement
Montage de meubles
Montage cuisine
Débarras
Livraison
```

---

### `app/models/contact_request.py`

Modèle SQLAlchemy représentant une demande de devis.

Table :

```txt
contact_requests
```

Statuts disponibles :

```txt
new
to_call
quote_sent
accepted
cancelled
archived
```

Statut par défaut :

```txt
new
```

---

### `app/services/contact_request_service.py`

Service métier de création de demande.

Il est responsable de :

- créer l’objet `ContactRequest`
- l’enregistrer en base
- déclencher l’envoi email si SMTP est configuré
- éviter qu’une erreur email bloque la demande client

Règle importante :

```txt
La demande client doit toujours être sauvegardée en base.
L’échec de l’envoi email ne doit pas bloquer l’enregistrement.
```

---

### `app/services/email_service.py`

Service d’envoi email.

Il prépare :

- un email texte
- un email HTML
- un `Reply-To` vers l’adresse du client
- un envoi SMTP avec timeout

L’email est envoyé uniquement si les variables SMTP sont configurées.

---

### `app/services/payment_service.py`

Préparation de la future intégration Stripe.

Le paiement ne doit pas être public.

Règle métier importante :

```txt
Le client ne choisit jamais le montant.
Le montant est défini par AS Transports après validation du devis.
```

Le service prépare la création d’une session Stripe Checkout pour un devis accepté.

---

## Variables d’environnement

Créer un fichier :

```txt
backend/.env
```

Exemple :

```env
# ======================================================
# APP
# ======================================================

APP_NAME="AS Transports API"
APP_ENV=development
APP_DEBUG=true
APP_VERSION=0.1.0

# ======================================================
# SERVER
# ======================================================

HOST=0.0.0.0
PORT=8000

# ======================================================
# DATABASE
# ======================================================

DATABASE_URL=postgresql+psycopg://postgres:postgres@127.0.0.1:5432/as_transports?connect_timeout=5

# ======================================================
# SECURITY
# ======================================================

SECRET_KEY=CHANGE_ME_SUPER_SECRET_KEY
ACCESS_TOKEN_EXPIRE_MINUTES=60
ALGORITHM=HS256

# ======================================================
# CORS
# ======================================================

BACKEND_CORS_ORIGINS=http://localhost:5173,http://127.0.0.1:5173

# ======================================================
# EMAIL
# ======================================================

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=
SMTP_PASSWORD=
SMTP_FROM_EMAIL="AS Transports <contact@as-transports.fr>"

# ======================================================
# FORM / CONTACT
# ======================================================

CONTACT_RECEIVER_EMAIL=alban.transports@gmail.com

# ======================================================
# LOGGING
# ======================================================

LOG_LEVEL=INFO

# ======================================================
# FUTURE PAYMENT
# ======================================================

STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_PUBLIC_KEY=
```

---

## Installation locale

Depuis la racine du projet :

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements.txt
```

Si le projet utilise uniquement `pyproject.toml`, installer les dépendances manuellement :

```powershell
pip install fastapi uvicorn[standard] sqlalchemy psycopg[binary] pydantic-settings email-validator stripe ruff pytest httpx
```

---

## Base de données PostgreSQL

Le backend utilise PostgreSQL.

Le conteneur est défini dans le fichier `docker-compose.yml` à la racine du projet.

Démarrer PostgreSQL :

```powershell
docker compose up -d
```

Vérifier que le conteneur tourne :

```powershell
docker ps
```

Tester le port PostgreSQL :

```powershell
Test-NetConnection 127.0.0.1 -Port 5432
```

Résultat attendu :

```txt
TcpTestSucceeded : True
```

---

## Initialisation des tables

Depuis le dossier `backend` :

```powershell
.\.venv\Scripts\Activate.ps1
python -m app.database.init_db
```

Résultat attendu :

```txt
Database tables created successfully.
```

Cette commande crée les tables SQLAlchemy en développement.

À terme, cette logique pourra être remplacée par Alembic pour gérer les migrations proprement.

---

## Démarrage du backend

Depuis le dossier `backend` :

```powershell
.\.venv\Scripts\Activate.ps1
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

URL locale :

```txt
http://localhost:8000
```

Documentation Swagger :

```txt
http://localhost:8000/docs
```

Healthcheck :

```txt
http://localhost:8000/health
```

---

## Test API

### Tester le healthcheck

```powershell
Invoke-RestMethod -Uri "http://localhost:8000/health" -Method GET
```

Résultat attendu :

```txt
status  service
------  -------
ok      AS Transports API
```

---

### Tester la création d’une demande

```powershell
$body = @{
  full_name = "Client Test"
  phone = "0765166125"
  email = "client@test.fr"
  service_type = "Déménagement"
  message = "Bonjour, je souhaite obtenir un devis pour un déménagement."
} | ConvertTo-Json -Compress

$utf8Body = [System.Text.Encoding]::UTF8.GetBytes($body)

Invoke-RestMethod `
  -Uri "http://localhost:8000/api/quotes" `
  -Method POST `
  -ContentType "application/json; charset=utf-8" `
  -Body $utf8Body `
  -TimeoutSec 10
```

Résultat attendu :

```txt
id           : 1
full_name    : Client Test
phone        : 0765166125
email        : client@test.fr
service_type : Déménagement
status       : new
created_at   : ...
```

---

## Vérifier les demandes en base

Afficher les dernières demandes :

```powershell
docker exec -it as_transports_postgres psql -U postgres -d as_transports -c "SELECT id, full_name, phone, email, service_type, status, created_at FROM contact_requests ORDER BY id DESC LIMIT 10;"
```

Afficher tous les champs de la dernière demande :

```powershell
docker exec -it as_transports_postgres psql -U postgres -d as_transports -x -c "SELECT * FROM contact_requests ORDER BY id DESC LIMIT 1;"
```

Compter les demandes :

```powershell
docker exec -it as_transports_postgres psql -U postgres -d as_transports -c "SELECT COUNT(*) FROM contact_requests;"
```

---

## Connexion avec le front

Le front React utilise un proxy Vite en développement.

Dans `vite.config.js` :

```js
server: {
  proxy: {
    "/api": {
      target: "http://localhost:8000",
      changeOrigin: true,
    },
  },
}
```

Le formulaire appelle :

```txt
/api/quotes
```

Vite transmet ensuite vers :

```txt
http://localhost:8000/api/quotes
```

---

## Email

L’envoi email est prêt mais dépend de la configuration SMTP.

Variables nécessaires :

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=adresse_email
SMTP_PASSWORD=mot_de_passe_application
SMTP_FROM_EMAIL="AS Transports <adresse_email>"
CONTACT_RECEIVER_EMAIL=alban.transports@gmail.com
```

Avec Gmail, `SMTP_PASSWORD` doit être un mot de passe d’application.

L’envoi email ne bloque pas la sauvegarde en base.

Si SMTP n’est pas configuré :

```txt
la demande est quand même enregistrée en base
aucun email n’est envoyé
```

---

## Paiement Stripe

Le backend prépare une future intégration Stripe.

Principe retenu :

```txt
Un lien de paiement est généré uniquement après validation du devis.
```

Le client ne doit jamais envoyer le montant depuis le formulaire public.

Parcours cible :

```txt
Demande enregistrée
→ AS Transports étudie la demande
→ Le devis est accepté
→ AS Transports définit le montant
→ Backend génère une session Stripe Checkout
→ Le lien de paiement est envoyé au client
```

---

## Qualité de code

Linter backend :

```powershell
python -m ruff check .
```

Correction automatique possible :

```powershell
python -m ruff check . --fix
```

---

## Scripts utiles

Démarrer PostgreSQL :

```powershell
docker compose up -d
```

Arrêter PostgreSQL :

```powershell
docker compose down
```

Démarrer FastAPI :

```powershell
cd backend
.\.venv\Scripts\Activate.ps1
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

Créer les tables :

```powershell
cd backend
python -m app.database.init_db
```

Vérifier Ruff :

```powershell
cd backend
python -m ruff check .
```

---

## Statut actuel

Validé :

```txt
FastAPI démarre correctement
/health fonctionne
/docs fonctionne
PostgreSQL fonctionne via Docker
La table contact_requests est créée
POST /api/quotes fonctionne
Le formulaire React enregistre bien les demandes en base
Le proxy Vite transmet correctement les appels /api
```

En attente :

```txt
Configuration SMTP réelle du client
Test email réel
Mise en place d’Alembic
Préparation back-office
Préparation route Stripe sécurisée
```

---

## Roadmap backend

### Phase 1 — Base API devis

- FastAPI
- PostgreSQL
- Route `/api/quotes`
- Validation Pydantic
- Sauvegarde en base
- Proxy Vite
- Tests manuels API

Statut : validé.

### Phase 2 — Email

- Configuration SMTP client
- Envoi email AS Transports
- Template HTML propre
- Gestion d’erreur non bloquante

Statut : prêt à tester dès réception des accès email.

### Phase 3 — Gestion métier des demandes

- Statuts avancés
- Route de consultation des demandes
- Route de mise à jour du statut
- Protection admin
- Mini back-office

Statut : à préparer.

### Phase 4 — Paiement

- Ajout champs paiement
- Génération lien Stripe
- Webhook Stripe
- Suivi paiement
- Historique transactionnel

Statut : structure préparée.

### Phase 5 — Production

- Variables d’environnement production
- Base PostgreSQL hébergée
- API déployée
- Domaine API ou reverse proxy
- CORS production
- Monitoring minimal
- Logs propres

Statut : à planifier.

---

## Auteur

Projet développé par Matomina pour AS Transports.

---

## Licence

Projet privé.

Utilisation réservée au développement du site AS Transports.
