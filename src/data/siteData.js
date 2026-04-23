import {
  Phone,
  CreditCard,
  Zap,
  Truck,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

export const siteData = {
  company: {
    name: "AS TRANSPORTS",
    baseline: "Déménagement · Montage · Débarras",
    phone: "07 65 16 61 25",
    phoneHref: "tel:+33765166125",
    email: "alban.transports@gmail.com",
    emailHref: "mailto:alban.transports@gmail.com",
    whatsapp: "https://wa.me/33765166125",
    instagram: "https://instagram.com/",
    snapchat: "https://snapchat.com/add/",
    zone: "Intervention principalement en Île-de-France, avec possibilité de déplacement dans toute la France et en Europe selon la prestation.",
  },

  seo: {
    siteUrl: "https://as-transports.fr",
    title: "AS Transports | Déménagement, débarras et montage en Île-de-France",
    description:
      "AS Transports accompagne particuliers et professionnels pour les déménagements, débarras, montages de meubles et cuisines en Île-de-France, partout en France et en Europe selon la prestation.",
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

  topPopup: {
    badge: "Devis rapide",
    title: "Besoin d’un déménagement ou d’un débarras ?",
    text: "Contactez AS Transports pour obtenir une estimation rapide et une intervention adaptée à votre besoin en Île-de-France.",
    primaryCta: {
      label: "Demander un devis",
      href: "#contact",
    },
    secondaryCta: {
      label: "Appeler le",
      href: "tel:+33765166125",
    },
  },

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
        icon: CreditCard,
        label: "Paiement en 3x / 4x sans frais",
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
    badge: "Île-de-France · France · Europe",
    title: "Déménagement rapide et sans stress en Île-de-France, France et Europe",
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
      "Paiement en 3x / 4x sans frais",
      "Disponible 7j/7",
    ],
    stats: [
      {
        value: "Réponse rapide",
        text: "Une prise de contact simple pour obtenir une estimation claire.",
      },
      {
        value: "Paiement en 3x / 4x sans frais",
        text: "Une solution plus souple pour réserver plus sereinement selon la prestation.",
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
      text: "Possibilité d’intégrer un règlement sécurisé en ligne pour acompte, validation plus rapide de la réservation ou paiement en 3x / 4x sans frais selon la prestation.",
      tags: [
        "Acompte possible",
        "Réservation plus simple",
        "3x / 4x sans frais",
      ],
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
        text: "Possibilité d’intégrer un règlement CB sécurisé pour un acompte, une validation plus simple ou un paiement en plusieurs fois selon la prestation.",
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

    socialCtas: [
      {
        label: "WhatsApp",
        href: "https://wa.me/33765166125",
        type: "whatsapp",
      },
      {
        label: "Snapchat",
        href: "https://snapchat.com/add/",
        type: "snapchat",
      },
      {
        label: "Instagram",
        href: "https://instagram.com/",
        type: "instagram",
      },
    ],

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

  paymentSection: {
    eyebrow: "Paiement",
    title: "Un paiement CB sécurisé pour simplifier la réservation",
    text: "Cette section prépare l’intégration d’un système de paiement par carte bancaire sécurisé afin de permettre un acompte en ligne, un paiement en plusieurs fois, une validation plus fluide des prestations et une meilleure clarté sur les conditions de réservation.",

    badges: [
      "Paiement CB sécurisé",
      "Acompte possible",
      "Réservation plus simple",
      "3x / 4x sans frais",
    ],

    reassuranceCard: {
      title: "Une vraie réassurance client",
      text: "Afficher clairement le paiement sécurisé, le paiement en plusieurs fois et les conditions de réservation améliore la crédibilité du site et réduit les freins au moment de la prise de décision.",
    },

    primaryCta: {
      label: "Demander un devis",
      href: "#contact",
    },

    secondaryCta: {
      label: "Appeler maintenant",
      href: "tel:+33765166125",
    },

    items: [
      {
        icon: CreditCard,
        title: "Carte bancaire",
        text: "Un règlement CB sécurisé permet de fluidifier la réservation et de professionnaliser immédiatement le parcours client.",
      },
      {
        icon: Zap,
        title: "Paiement en plusieurs fois",
        text: "Possibilité de régler en 3x ou 4x sans frais selon la prestation et le montant validé.",
      },
      {
        icon: ShieldCheck,
        title: "Paiement à la validation",
        text: "Le règlement peut être demandé au moment de la validation de la prestation ou de la réservation selon la formule retenue.",
      },
      {
        icon: BadgeCheck,
        title: "Frais de réservation si annulation",
        text: "Des frais de réservation peuvent être appliqués en cas d’annulation après validation ou blocage du créneau.",
      },
    ],
  },

  finalCtaSection: {
    badge: "Devis rapide",
    title: "Besoin d’un déménagement,\nd’un débarras ou d’un montage ?",
    text: "Demandez votre devis gratuitement dès maintenant. AS Transports vous accompagne avec une prise de contact simple, une réponse rapide et une intervention organisée selon votre besoin.",

    highlights: [
      "Réponse rapide",
      "Paiement CB sécurisé",
      "Intervention soignée",
      "3x / 4x sans frais",
    ],

    primaryCta: {
      label: "Obtenir mon devis gratuit",
      href: "#contact",
    },

    secondaryCta: {
      label: "Appeler",
      href: "tel:+33765166125",
    },

    reassuranceCard: {
      title: "Un parcours plus simple pour le client",
      text: "Devis, contact direct, acompte possible, paiement en plusieurs fois et future intégration du paiement sécurisé pour fluidifier la réservation.",
    },
  },

  trustItems: [
    { icon: CreditCard, label: "Paiement en 3x / 4x sans frais" },
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
      title: "Formule étudiant",
      price: "À partir de 400 € TTC",
      note: "Formule étudiant en Île-de-France",
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
      title: "France / Europe",
      price: "Sur devis",
      note: "Étude personnalisée",
    },
  ],

  faqItems: [
    {
      question: "Dans quelle zone intervenez-vous ?",
      answer:
        "AS Transports intervient principalement en Île-de-France, avec possibilité de déplacement dans toute la France et en Europe selon la prestation demandée.",
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
    {
      question: "Proposez-vous un paiement en plusieurs fois ?",
      answer:
        "Selon la prestation et le montant, un paiement en 3x ou 4x sans frais peut être proposé afin de faciliter la réservation.",
    },
  ],
};