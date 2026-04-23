# AS Transports — Site Vitrine React + Vite

Application web développée pour une entreprise spécialisée dans le déménagement, le montage, le débarras et le transport.

Le projet a été conçu pour proposer une expérience moderne, claire et orientée conversion, avec une structure responsive, un SEO local optimisé et une architecture React évolutive.

---

# Aperçu du projet

AS Transports est un site vitrine pensé pour :

- présenter les services de manière professionnelle
- rassurer les visiteurs avec une structure claire
- favoriser les prises de contact rapides
- simplifier la demande de devis
- préparer l’intégration d’un paiement sécurisé
- proposer une navigation fluide mobile / desktop
- offrir une base technique propre et scalable

Le projet repose sur une architecture React moderne avec séparation claire des composants, animations progressives et données centralisées.

---

# Fonctionnalités

## Interface

- Header sticky premium
- Navigation responsive
- Menu mobile animé
- Hero section orientée conversion
- CTA téléphone et devis
- Bouton WhatsApp flottant
- Sections visuelles structurées
- Responsive mobile / tablette / desktop

## Parcours utilisateur

- Présentation claire des prestations
- Réassurance visuelle
- Process client étape par étape
- Tarification indicative
- FAQ informative
- Formulaire de devis
- Contact rapide

## Technique

- SEO local optimisé
- JSON-LD entreprise locale
- Animations Framer Motion
- Source de données centralisée
- Structure modulaire
- Architecture scalable

---

# Stack technique

- React
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React
- ESLint

---

# Architecture du projet

```txt
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   │
│   ├── sections/
│   │   ├── HeroSection.jsx
│   │   ├── TrustBar.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── StepsSection.jsx
│   │   ├── RealisationsSection.jsx
│   │   ├── PricingSection.jsx
│   │   ├── PaymentSection.jsx
│   │   ├── FaqSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── FinalCtaSection.jsx
│   │   └── TopPopup.jsx
│   │
│   └── motion/
│       └── variants.js
│
├── data/
│   └── siteData.js
│
├── App.jsx
├── main.jsx
```

---

# Données centralisées

Le projet repose sur une logique de **source unique de vérité** via :

```txt
src/data/siteData.js
```

Ce fichier centralise :

- informations entreprise
- téléphone
- e-mail
- WhatsApp
- zone d’intervention
- navigation
- contenu Hero
- services
- étapes
- FAQ
- SEO
- configuration formulaire
- CTA

Cette approche permet :

- une maintenance simplifiée
- une cohérence globale du contenu
- une évolution rapide du projet
- une réduction des duplications de données

---

# SEO

Le projet intègre une base SEO complète :

- meta title
- meta description
- canonical
- Open Graph
- favicon
- JSON-LD LocalBusiness
- optimisation mobile-first
- structure sémantique claire
- hiérarchie H1 / H2 / H3

Le fichier `index.html` a été structuré pour préparer une indexation propre.

---

# Formulaire de contact

Le formulaire actuel repose sur :

```txt
FormSubmit
```

Fonctionnalités :

- envoi direct par email
- honeypot anti-spam
- redirection succès
- structure compatible migration API future
- configuration centralisée dans `siteData.js`

---

# Scripts disponibles

## Lancer le projet

```bash
npm run dev
```

Démarre le serveur local Vite.

---

## Build production

```bash
npm run build
```

Génère une version production dans le dossier `dist/`.

---

## Analyse ESLint

```bash
npm run lint
```

Vérifie la qualité du code.

---

## Validation complète

```bash
npm run check
```

Exécute automatiquement :

- lint
- build

Permet de valider rapidement que le projet est propre avant commit ou push.

---

# Installation

```bash
npm install
npm run dev
```

---

# Roadmap technique

## Phase actuelle

- stabilisation architecture
- optimisation UX
- cohérence responsive
- SEO local
- nettoyage structure repo
- professionnalisation composants
- amélioration accessibilité

---

## Étapes futures

- intégration Stripe
- page merci / confirmation
- optimisation Core Web Vitals
- amélioration animation scroll
- CI GitHub Actions
- analytics & tracking
- optimisation conversion
- amélioration formulaire
- système de réservation plus avancé

---

# Qualité projet

Le projet possède désormais :

- ESLint configuré
- validation `npm run check`
- build production validé
- architecture structurée
- composants réutilisables
- données centralisées
- logique SEO prête

---

# Statut

Projet en évolution active.

Architecture désormais stabilisée et orientée production.

Le projet est prêt pour les prochaines phases d’industrialisation.

---

# Auteur

Projet développé pour AS Transports.

Architecture React + Vite orientée conversion, UX et performance.

## Qualité

Le projet est vérifié automatiquement via GitHub Actions.
