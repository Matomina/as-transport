# AS Transports — Site Vitrine (V2)

Site vitrine développé pour une entreprise de déménagement, montage et débarras en Île-de-France.

Ce projet a pour objectif de proposer une interface moderne, claire et orientée conversion, permettant aux clients de comprendre rapidement les prestations et de demander un devis.

---

## 🎯 Objectifs du projet

- Présenter les services de manière claire et professionnelle
- Mettre en avant la réassurance (visuels, informations, parcours client)
- Faciliter la prise de contact (devis / téléphone)
- Préparer l’intégration d’un paiement CB sécurisé
- Offrir une expérience fluide sur mobile et desktop

---

## ⚙️ Stack technique

- **React**
- **Vite**
- **Tailwind CSS v4**
- **Framer Motion**

---

## 🧱 Architecture

src/
├── components/
│ ├── layout/ → Header, Footer, TopBar
│ ├── sections/ → Sections de la page (Hero, Services, etc.)
│ ├── motion/ → Animations (variants Framer Motion)
├── data/ → Données centralisées (siteData.js)
├── App.jsx → Composition globale
├── main.jsx → Entrée React

---

## 🧩 Sections du site

- Hero (conversion + CTA)
- Trust bar (réassurance)
- Services
- Parcours client (étapes)
- Réalisations
- Tarifs
- Paiement (préparation CB)
- FAQ
- Contact

---

## 💳 Paiement

Le site est conçu pour intégrer un système de paiement CB sécurisé.

👉 Intégration prévue :

- Stripe Checkout
- Paiement d’acompte en ligne
- Page succès / annulation

---

## 🚀 Lancer le projet

```bash
npm install
npm run dev
```

## 📌 Statut

Projet en cours d’optimisation :

amélioration UX
finalisation design
intégration paiement CB
