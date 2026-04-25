# AS Transports — Site vitrine premium React + Vite

Site vitrine moderne développé pour **AS Transports**, entreprise spécialisée dans le déménagement, le montage de meubles, le montage de cuisines, le débarras et la livraison.

Le projet est orienté **conversion**, **SEO local**, **prise de devis** et prépare une future évolution vers un backend métier et un paiement sécurisé après validation du devis.

---

## Stack

- React
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React
- ESLint
- GitHub Actions

---

## Objectifs

### Objectifs business

- Présenter les prestations de manière claire
- Rassurer les visiteurs
- Favoriser les demandes de devis
- Mettre en avant le téléphone et WhatsApp
- Professionnaliser la présence digitale

### Objectifs techniques

- Préparer un futur backend de gestion des demandes
- Préparer une future intégration de paiement sécurisé
- Centraliser les données métier
- Maintenir une architecture scalable
- Conserver une structure propre et maintenable

---

## Fonctionnalités actuelles

- Header sticky responsive
- Menu mobile animé
- Hero section orientée conversion
- Trust bar
- Sections services, étapes, réalisations, tarifs, paiement, FAQ et contact
- Formulaire de demande de devis enrichi
- Bouton WhatsApp flottant
- Page de confirmation `/merci.html`
- Mentions légales
- Politique de confidentialité
- SEO local
- Open Graph / Twitter Cards
- JSON-LD `MovingCompany`
- Build production validé
- CI GitHub Actions

---

## Parcours utilisateur

Le tunnel actuel est pensé pour maximiser la conversion :

```txt
Accueil
→ Réassurance
→ Services
→ Étapes
→ Réalisations
→ Tarifs indicatifs
→ Paiement sécurisé en préparation
→ FAQ
→ Formulaire de devis
→ Confirmation
Architecture
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   │
│   ├── motion/
│   │   └── variants.js
│   │
│   └── sections/
│       ├── HeroSection.jsx
│       ├── TrustBar.jsx
│       ├── ServicesSection.jsx
│       ├── StepsSection.jsx
│       ├── RealisationsSection.jsx
│       ├── PricingSection.jsx
│       ├── PaymentSection.jsx
│       ├── FaqSection.jsx
│       ├── ContactSection.jsx
│       └── FinalCtaSection.jsx
│
├── data/
│   └── siteData.js
│
├── App.jsx
├── main.jsx
└── index.css

public/
├── merci.html
├── mentions-legales.html
├── politique-confidentialite.html
├── images/
└── videos/
Données centralisées

Le fichier principal de contenu est :

src/data/siteData.js

Il centralise :

informations entreprise
téléphone
email
WhatsApp
navigation
SEO
Hero
services
étapes
tarifs
paiement
FAQ
formulaire
CTA
footer
Formulaire de devis

Le formulaire utilise actuellement FormSubmit pour l’envoi email.

Il est déjà structuré pour une future API backend.

Champs disponibles
nom
téléphone
email
type de prestation
ville de départ
ville d’arrivée
date souhaitée
type de logement
étage départ
étage arrivée
ascenseur départ
ascenseur arrivée
volume approximatif
créneau de rappel préféré
contraintes particulières
message
Paiement

La section paiement est actuellement une section de préparation.

Le paiement en ligne sera intégré plus tard, après :

validation du parcours devis
mise en place du backend
création d’un modèle de demande/devis
définition des règles d’acompte
intégration d’un prestataire sécurisé
Parcours cible futur
Demande de devis
→ Étude de la demande
→ Validation commerciale
→ Paiement sécurisé
→ Confirmation
SEO

Le projet intègre :

Meta Title
Meta Description
Canonical
Open Graph
Twitter Cards
Theme Color
JSON-LD MovingCompany
SEO local Île-de-France / France / Europe
Installation
Clone du repo
git clone https://github.com/Matomina/as-transport.git
cd as-transport
Installation dépendances
npm install
Démarrage local
npm run dev

URL locale :

http://localhost:5173
Scripts disponibles
Développement
npm run dev

Lance le serveur local.

Build production
npm run build

Génère la version optimisée dans :

dist/
Prévisualisation build
npm run preview
Analyse ESLint
npm run lint
Validation complète
npm run check

Exécute :

lint + build
Standards qualité

Le projet applique :

architecture React modulaire
composants réutilisables
responsive mobile-first
SEO local structuré
validation build
séparation logique contenu / composants
données centralisées
Roadmap
Phase actuelle
stabilisation front commercial
cohérence contenu
tunnel de conversion
formulaire devis métier
pages légales
préparation backend
Phase suivante
backend devis
stockage leads
notifications email
gestion statut demande
mini back-office
Phase avancée
paiement sécurisé
gestion acompte
réservation
annulation
suivi transactionnel
Déploiement
Frontend
Vercel
Netlify
Backend futur
Render
Railway
VPS
Domaine cible
https://as-transports.fr
Statut

Projet en développement actif.

Base front stabilisée et prête pour la préparation du backend métier.

Auteur

Projet développé par Matomina pour AS Transports.

Licence

Projet privé.

Utilisation réservée au développement du site AS Transports.

Repository

GitHub : https://github.com/Matomina/as-transport
```
