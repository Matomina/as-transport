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
    stats: [
      {
        value: "Réponse rapide",
        text: "Une prise de contact simple pour obtenir une estimation claire.",
      },
      {
        value: "Intervention soignée",
        text: "Protection, organisation et sérieux sur chaque prestation.",
      },
      {
        value: "Particuliers & pros",
        text: "Des solutions adaptées selon le volume et le type de besoin.",
      },
    ],
    showcase: {
      topLeftBadge: "Intervention terrain",
      topRightBadge: "Devis rapide",
      imageSrc: "/images/camion-demenagement.jpg",
      imageAlt: "Chargement d'un camion de déménagement",
      title:
        "Une équipe réactive pour vos besoins de transport et de déménagement",
      text: "Une présentation plus concrète du terrain, du matériel et du sérieux de l’intervention pour rassurer immédiatement le client.",
    },
    paymentCard: {
      eyebrow: "Paiement",
      title: "Paiement CB sécurisé",
      text: "Possibilité d’intégrer un règlement sécurisé en ligne pour acompte ou validation plus rapide de la réservation.",
      tags: ["Acompte possible", "Réservation plus simple"],
    },
    quoteCard: {
      eyebrow: "Réactivité",
      title: "Devis rapide",
      text: "Une prise de contact claire, rapide et directe pour obtenir une estimation adaptée à votre projet.",
      cta: {
        label: "Demander un devis",
        href: "#contact",
      },
    },
  },

  footer: {
    description:
      "Déménagement, montage, débarras et livraison en Île-de-France",
    legalLinks: [
      {
        label: "Mentions légales",
        href: "/mentions-legales.html",
      },
      {
        label: "Politique de confidentialité",
        href: "/politique-confidentialite.html",
      },
    ],
    copyright: "© AS Transports · Tous droits réservés",
  },

  contactSection: {
    contactEyebrow: "Contact",
    contactTitle: "Parlons de votre besoin",
    contactText:
      "Vous avez un déménagement, un montage de meuble, un montage de cuisine ou un débarras à prévoir ? Contactez-nous pour obtenir un devis rapide, clair et adapté à votre situation.",
    responseBadge: "Réponse rapide sous 24h",

    infoCards: [
      {
        icon: "phone",
        title: "Téléphone",
        type: "link",
      },
      {
        icon: "email",
        title: "Email",
        type: "link",
      },
      {
        icon: "zone",
        title: "Zone d’intervention",
        type: "text",
      },
      {
        icon: "availability",
        title: "Disponibilité",
        text: "Selon planning et sur demande",
        type: "text",
      },
      {
        icon: "payment",
        title: "Paiement",
        text: "Possibilité d’intégrer un règlement CB sécurisé pour un acompte ou une validation plus simple.",
        type: "text",
      },
    ],

    primaryCta: {
      label: "Appeler maintenant",
      href: "tel:+33765166125",
    },

    secondaryCta: {
      label: "WhatsApp",
      href: "https://wa.me/33765166125",
    },

    formEyebrow: "Formulaire de devis",
    formTitle: "Demandez votre devis",
    formText:
      "Décrivez votre besoin en quelques informations essentielles. Nous revenons vers vous rapidement avec une estimation adaptée.",
    adviceText:
      "Conseil : indiquez la ville de départ, la ville d’arrivée, le volume, l’étage et la date souhaitée pour obtenir une réponse plus précise.",

    serviceOptions: [
      "Déménagement",
      "Montage de meubles",
      "Montage cuisine",
      "Débarras",
      "Livraison",
    ],

    submitLabel: "Envoyer ma demande de devis",

    legalNotice:
      "En envoyant ce formulaire, vous transmettez les informations nécessaires pour être recontacté au sujet de votre demande.",
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