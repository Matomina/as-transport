import { Phone, CreditCard, Zap, Truck } from "lucide-react";
export const siteData = {
  company: {
    name: "AS TRANSPORTS",
    baseline: "Déménagement · Montage · Débarras",
    phone: "07 65 16 61 25",
    phoneHref: "tel:+33765166125",
    email: "alban.transports@gmail.com",
    emailHref: "mailto:alban.transports@gmail.com",
    whatsapp: "https://wa.me/33765166125",
    zone: "Intervention principalement en Île-de-France, avec possibilité de déplacement dans toute la France et les pays frontaliers.",
  },

  navLinks: [
    { label: "Services", href: "#services" },
    { label: "Comment ça marche", href: "#etapes" },
    { label: "Réalisations", href: "#realisations" },
    { label: "Tarifs", href: "#tarifs" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    badge: "Île-de-France · France · Europe frontalière",
    title: "Déménagement rapide et sans stress en Île-de-France",
    text: "AS Transports accompagne particuliers et professionnels avec une intervention sérieuse, un devis rapide et une organisation efficace pour vos déménagements, débarras, montages et livraisons.",
    primaryCta: {
      label: "Obtenir mon devis gratuit",
      href: "#contact",
    },
    secondaryCta: {
      label: "Appeler maintenant",
      href: "tel:+33765166125",
    },
    highlights: [
      "Devis rapide",
      "Paiement CB sécurisé",
      "Intervention soignée",
      "Disponible 7j/7",
    ],
  },

  trustItems: [
    { icon: Phone, label: "Téléphone direct" },
    { icon: CreditCard, label: "Paiement CB sécurisé" },
    { icon: Zap, label: "Devis rapide" },
    { icon: Truck, label: "Intervention rapide" },
  ],

  services: [
    {
      title: "Déménagement",
      text: "Prise en charge complète avec manutention, chargement, transport et déchargement dans les meilleures conditions.",
    },
    {
      title: "Montage de meubles",
      text: "Assemblage et installation de meubles à domicile avec soin, méthode et efficacité.",
    },
    {
      title: "Montage cuisine",
      text: "Montage et mise en place de cuisines avec précision, organisation et respect de votre intérieur.",
    },
    {
      title: "Débarras",
      text: "Débarras de logement, cave, garage, local ou encombrants avec intervention rapide et structurée.",
    },
  ],

  steps: [
    {
      number: "01",
      title: "Demande de devis",
      text: "Vous nous contactez par téléphone ou via le formulaire avec les informations essentielles sur votre besoin.",
    },
    {
      number: "02",
      title: "Validation rapide",
      text: "Nous analysons votre demande, le volume, la distance et les accès pour vous proposer une estimation claire.",
    },
    {
      number: "03",
      title: "Intervention",
      text: "Après validation, l’intervention est planifiée rapidement avec une organisation simple et efficace.",
    },
  ],

  reassuranceItems: [
    {
      title: "Vrai terrain",
      text: "Des photos réelles permettent de montrer concrètement les interventions menées par l’entreprise.",
    },
    {
      title: "Preuve visuelle",
      text: "Les visuels avant / après permettent d’évaluer immédiatement la qualité et le soin des prestations.",
    },
    {
      title: "Communication claire",
      text: "Les informations clés sont présentées de façon simple, directe et rassurante pour faciliter la prise de décision.",
    },
  ],

  packages: [
    {
      title: "Studio / F2",
      price: "À partir de 550 € TTC",
      note: "Formule Île-de-France",
    },
    {
      title: "F3 / F4",
      price: "À partir de 700 € TTC",
      note: "Formule Île-de-France",
    },
    {
      title: "F5",
      price: "À partir de 850 € TTC",
      note: "Formule Île-de-France",
    },
    {
      title: "Maison",
      price: "Sur devis",
      note: "Étude selon volume",
    },
    {
      title: "France / Europe frontalière",
      price: "Sur devis",
      note: "Étude personnalisée",
    },
  ],

  faqItems: [
    {
      question: "Dans quelle zone intervenez-vous ?",
      answer:
        "AS Transports intervient principalement en Île-de-France, avec possibilité de déplacement dans toute la France et les pays frontaliers selon la prestation demandée.",
    },
    {
      question: "Comment obtenir un devis ?",
      answer:
        "Vous pouvez nous contacter par téléphone, par e-mail ou via le formulaire du site. Nous étudions rapidement votre besoin pour vous proposer une estimation adaptée.",
    },
    {
      question: "Proposez-vous le montage de meubles et de cuisines ?",
      answer:
        "Oui, nous réalisons le montage de meubles ainsi que le montage et la mise en place de cuisines selon votre projet.",
    },
    {
      question: "Peut-on payer en carte bancaire ?",
      answer:
        "Oui, le site est pensé pour intégrer un paiement CB sécurisé, notamment pour un acompte ou une validation plus simple de la réservation.",
    },
  ],
};