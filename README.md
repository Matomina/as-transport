# AS Transports — Site vitrine premium React + Vite

![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-8-purple)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38BDF8)
![Build](https://img.shields.io/badge/build-passing-brightgreen)
![Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-private-red)

Application web moderne développée pour **AS Transports**, entreprise spécialisée dans le déménagement, le montage, le débarras et le transport.

Le projet a été pensé pour proposer une expérience utilisateur claire, rassurante et orientée conversion, avec une architecture React maintenable, un SEO local optimisé et une base technique évolutive.

---

# Aperçu du projet

AS Transports est un site vitrine conçu pour répondre à plusieurs objectifs métier :

- valoriser les services proposés
- rassurer les visiteurs avec une structure claire
- simplifier la prise de contact
- favoriser les demandes de devis rapides
- améliorer la visibilité locale
- proposer une navigation fluide mobile / desktop
- préparer une montée en gamme vers une plateforme plus avancée

Le projet repose sur une architecture moderne basée sur React + Vite, avec une logique modulaire et une centralisation complète des données métier.

---

# Objectifs du projet

Le site a été pensé pour répondre à une logique de conversion et de professionnalisation.

## Objectifs business

- augmenter les demandes de devis
- améliorer la crédibilité de l’entreprise
- valoriser les prestations de transport et déménagement
- renforcer la réassurance client
- proposer une présence digitale moderne

## Objectifs techniques

- structure React scalable
- maintenance simplifiée
- données centralisées
- SEO local optimisé
- architecture réutilisable
- base prête pour industrialisation

---

# Fonctionnalités

## Interface utilisateur

- Header sticky premium
- Navigation responsive
- Menu mobile animé
- Hero section orientée conversion
- CTA téléphone et devis
- Bouton WhatsApp flottant
- Sections visuelles structurées
- Responsive mobile / tablette / desktop
- Effets de transition fluides
- Structure pensée pour la conversion

## Parcours utilisateur

- Présentation claire des services
- Réassurance visuelle
- Process client étape par étape
- Tarification indicative
- FAQ informative
- Formulaire de contact
- Contact rapide par téléphone
- Navigation simple et directe

## Fonctionnalités techniques

- SEO local optimisé
- JSON-LD entreprise locale
- Architecture modulaire
- Animations Framer Motion
- Source de données centralisée
- Build production optimisé
- Validation ESLint
- Structure scalable

---

# Stack technique

Le projet repose sur une stack moderne orientée performance et maintenabilité.

## Frontend

- React
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Qualité & tooling

- ESLint
- npm scripts de validation
- Build Vite production

---

# Démarrage rapide

```bash
git clone https://github.com/Matomina/as-transport.git
cd as-transport
npm install
npm run dev
```

Le projet sera disponible localement via :

```txt
http://localhost:5173
```

---

# Installation

## Prérequis

- Node.js 20+
- npm 10+

## Installation locale

```bash
npm install
npm run dev
```

---

# Scripts disponibles

## Développement local

```bash
npm run dev
```

Lance le serveur Vite local.

---

## Build production

```bash
npm run build
```

Génère une version optimisée dans le dossier :

```txt
dist/
```

---

## Prévisualisation build

```bash
npm run preview
```

Permet de tester localement la build production.

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

Permet de vérifier rapidement qu’aucune régression n’est présente avant commit ou push.

---

# Architecture du projet

```txt
src/
├── assets/
│
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
│       ├── FinalCtaSection.jsx
│       └── TopPopup.jsx
│
├── data/
│   └── siteData.js
│
├── App.jsx
├── main.jsx
├── index.css
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
- email
- WhatsApp
- navigation
- SEO
- contenu Hero
- services
- étapes
- FAQ
- CTA
- configuration formulaire

## Avantages

- maintenance simplifiée
- cohérence globale du contenu
- évolution rapide
- réduction des duplications
- meilleure lisibilité du projet

---

# SEO

Le projet intègre une base SEO complète pour une stratégie locale.

## SEO technique

- Meta title
- Meta description
- Canonical
- Open Graph
- Twitter Cards
- Favicon
- Theme Color
- JSON-LD MovingCompany
- Structure HTML sémantique

## SEO local

- ciblage Île-de-France
- hiérarchie H1 / H2 / H3
- contenu métier ciblé
- structure pensée pour indexation Google

Le fichier `index.html` prépare une indexation propre et une bonne compatibilité avec les réseaux sociaux.

---

# Formulaire de contact

Le formulaire actuel repose sur :

```txt
FormSubmit
```

## Fonctionnalités

- envoi direct par email
- redirection de confirmation
- honeypot anti-spam
- configuration centralisée
- possibilité de migration future vers API ou backend

---

# Standards qualité

Le projet applique plusieurs règles de qualité.

## Standards actuels

- ESLint configuré
- architecture modulaire
- composants réutilisables
- responsive mobile-first
- structure SEO optimisée
- build production validé
- validation `npm run check`

## Objectif qualité

Maintenir une base stable, lisible et facilement évolutive.

---

# Performance

Le projet a été pensé pour une expérience rapide et fluide.

## Optimisations

- Vite pour build rapide
- chargement frontend léger
- architecture modulaire
- animations contrôlées
- optimisation mobile-first
- séparation claire des composants

---

# Roadmap technique

## Phase actuelle

- stabilisation architecture
- cohérence responsive
- optimisation UX
- amélioration SEO local
- professionnalisation composants
- nettoyage structure repo

---

## Étapes futures

- intégration Stripe
- page merci / confirmation
- optimisation Core Web Vitals
- amélioration animations scroll
- CI GitHub Actions
- analytics & tracking
- optimisation conversion
- amélioration formulaire
- système de réservation avancé

---

# Qualité projet

Le projet possède désormais :

- architecture stabilisée
- build production validé
- ESLint actif
- données centralisées
- composants réutilisables
- base SEO prête
- logique responsive

---

# Aperçu visuel

Tu peux ajouter ici des captures d’écran du site pour enrichir la présentation du repository.

Exemple :

```txt
README/assets/homepage-preview.jpg
README/assets/mobile-preview.jpg
```

---

# Déploiement

Le projet peut être déployé sur plusieurs plateformes modernes.

## Solutions compatibles

- Vercel
- Netlify
- GitHub Pages
- Render
- hébergement VPS

---

# Statut

Projet en évolution active.

Architecture stabilisée et prête pour les prochaines phases d’industrialisation.

---

# Auteur

Projet développé pour **AS Transports**.

Architecture React + Vite orientée conversion, UX, SEO local et performance.

---

# Licence

Projet privé.

Utilisation réservée au cadre du développement du site AS Transports.

---

# Repository

GitHub : [https://github.com/Matomina/as-transport](https://github.com/Matomina/as-transport)
