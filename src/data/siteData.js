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

  seo: {
    siteUrl: "https://as-transports.fr",
    title: "AS Transports | Déménagement, débarras et montage en Île-de-France",
    description:
      "AS Transports accompagne particuliers et professionnels pour les déménagements, débarras, montages de meubles et cuisines en Île-de-France, en France et vers les pays frontaliers.",
    ogImage: "/images/camion-demenagement.jpg",
    favicon: "/images/favicon.svg",
  },

  contactForm: {
    action: "https://formsubmit.co/alban.transports@gmail.com",
    subject: "Nouvelle demande de devis - AS Transports",
    successRedirect: "/merci.html",
  },

  navLinks: [
    { label: "Services", href: "#services" },
    { label: "Comment ça marche", href: "#etapes" },
    { label: "Réalisations", href: "#realisations" },
    { label: "Tarifs", href: "#tarifs" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  header: {
    topBadges: [
      {
        icon: CreditCard,
        label: "Paiement CB sécurisé",
      },
      {
        icon: Zap,
        label: "Devis rapide",
      },
      {
        icon: Truck,
        label: "Intervention rapide",
      },
    ],

    primaryCta: {
      label: "Devis gratuit",
      href: "#contact",
    },

    mobilePhoneLabel: "Appeler maintenant",

    mobileQuoteLabel: "Demander un devis",
  },

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
      title: "Interventions réelles",
      text: "Des photos de terrain permettent de visualiser concrètement la qualité des déménagements, débarras et montages réalisés.",
    },
    {
      title: "Travail soigné",
      text: "Chaque prestation est réalisée avec méthode, protection adaptée et attention portée aux biens transportés.",
    },
    {
      title: "Organisation efficace",
      text: "Les échanges sont simples, le devis est rapide et l’intervention est planifiée avec clarté.",
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
        "Oui, un paiement CB sécurisé peut être proposé pour faciliter la réservation ou le règlement selon la prestation.",
    },
  ],
};