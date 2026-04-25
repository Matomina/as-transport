import {
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

    logo: "/images/branding/icons.svg",
    favicon: "/images/branding/favicon.svg",
    heroVideo: "/videos/logo-as-transports.mp4",

    instagram: "",
    snapchat: "",

    zone:
      "Intervention principalement en Île-de-France, avec possibilité de déplacement dans toute la France et en Europe selon la prestation.",
  },

  seo: {
    siteUrl: "https://as-transports.fr",
    title: "AS Transports | Déménagement, débarras et montage en Île-de-France",
    description:
      "AS Transports accompagne particuliers et professionnels pour les déménagements, débarras, montages de meubles, montages de cuisines et livraisons en Île-de-France, en France et en Europe selon la prestation.",
    ogImage: "/images/gallery/camion-demenagement.jpg",
    favicon: "/images/branding/favicon.svg",
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
    { label: "Avis", href: "#avis" },
    { label: "Tarifs", href: "#tarifs" },
    { label: "Paiement", href: "#paiement" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  header: {
    topBadges: [
      { icon: ShieldCheck, label: "Devis clair" },
      { icon: Zap, label: "Réponse rapide" },
      { icon: CreditCard, label: "Paiement sécurisé en préparation" },
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
    title: "Déménagement rapide et organisé en Île-de-France, France et Europe",
    text: "AS Transports accompagne particuliers et professionnels avec une intervention sérieuse, un devis clair et une organisation efficace pour vos déménagements, débarras, montages et livraisons.",
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
      "Réponse claire",
      "Intervention soignée",
      "Particuliers & professionnels",
    ],
    stats: [
      {
        value: "Réponse rapide",
        text: "Une prise de contact simple pour obtenir une première estimation claire.",
      },
      {
        value: "Devis personnalisé",
        text: "Chaque demande est étudiée selon le volume, la distance, les accès et la prestation souhaitée.",
      },
      {
        value: "Particuliers & pros",
        text: "Des solutions adaptées selon le type de besoin et les contraintes terrain.",
      },
    ],
    showcase: {
      topLeftBadge: "Intervention terrain",
      topRightBadge: "Devis rapide",
      imageSrc: "/images/gallery/camion-demenagement.jpg",
      videoSrc: "/videos/logo-as-transports.mp4",
      imageAlt: "Camion de déménagement AS Transports",
      title:
        "Une équipe réactive pour vos besoins de transport et de déménagement",
      text: "Une présentation concrète du terrain, du matériel et du sérieux de l’intervention pour rassurer immédiatement le client.",
    },
    paymentCard: {
      eyebrow: "Paiement",
      title: "Paiement sécurisé en préparation",
      text: "Le site prépare une future intégration de paiement sécurisé pour faciliter la réservation, l’acompte ou la validation de certaines prestations après devis.",
      tags: [
        "Acompte possible après devis",
        "Réservation plus simple",
        "Intégration à venir",
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
      { label: "Mentions légales", href: "/mentions-legales.html" },
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
      { icon: "phone", title: "Téléphone", type: "link" },
      { icon: "email", title: "Email", type: "link" },
      { icon: "zone", title: "Zone d’intervention", type: "text" },
      {
        icon: "availability",
        title: "Disponibilité",
        text: "Selon planning et sur demande",
        type: "text",
      },
      {
        icon: "payment",
        title: "Paiement",
        text: "Une solution de paiement sécurisé pourra être proposée après validation du devis selon la prestation.",
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
    ],

    formEyebrow: "Formulaire de devis",
    formTitle: "Demandez votre devis",
    formText:
      "Décrivez votre besoin en quelques informations essentielles. Nous revenons vers vous rapidement avec une estimation adaptée.",
    adviceText:
      "Conseil : indiquez la ville de départ, la ville d’arrivée, le volume, l’étage, les accès et la date souhaitée pour obtenir une réponse plus précise.",

    serviceOptions: [
      "Déménagement",
      "Montage de meubles",
      "Montage cuisine",
      "Débarras",
      "Livraison",
    ],

    submitLabel: "Envoyer ma demande de devis",

    legalNotice:
      "En envoyant ce formulaire, vous transmettez les informations nécessaires pour être recontacté au sujet de votre demande de devis.",
  },

  paymentSection: {
    eyebrow: "Paiement",
    title: "Une solution de paiement sécurisé en préparation",
    text: "AS Transports prépare l’intégration d’un paiement en ligne sécurisé afin de faciliter, à terme, la réservation, l’acompte ou la validation de certaines prestations après devis.",

    badges: [
      "Paiement sécurisé à venir",
      "Acompte possible après devis",
      "Réservation plus simple",
      "Conditions précisées avant validation",
    ],

    reassuranceCard: {
      title: "Un parcours plus clair pour le client",
      text: "L’objectif est de proposer un parcours simple : demande de devis, validation de la prestation, puis solution de paiement sécurisée si elle est adaptée au besoin.",
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
        title: "Paiement sécurisé",
        text: "Une solution de paiement en ligne pourra être intégrée pour professionnaliser la réservation après validation du devis.",
      },
      {
        icon: Zap,
        title: "Validation plus fluide",
        text: "Le paiement pourra servir à confirmer plus simplement certaines prestations ou certains créneaux.",
      },
      {
        icon: ShieldCheck,
        title: "Acompte après devis",
        text: "Un acompte pourra être proposé selon la prestation, le montant et les conditions convenues avec le client.",
      },
      {
        icon: BadgeCheck,
        title: "Conditions encadrées",
        text: "Les conditions de réservation, d’annulation et de paiement devront être précisées clairement avant toute validation.",
      },
    ],
  },

  finalCtaSection: {
    badge: "Devis rapide",
    title: "Besoin d’un déménagement,\nd’un débarras ou d’un montage ?",
    text: "Demandez votre devis gratuitement dès maintenant. AS Transports vous accompagne avec une prise de contact simple, une réponse rapide et une intervention organisée selon votre besoin.",

    highlights: [
      "Réponse rapide",
      "Devis clair",
      "Intervention soignée",
      "Paiement sécurisé en préparation",
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
      title: "Un parcours simple et professionnel",
      text: "Demande de devis, échange direct, validation claire de la prestation et future possibilité de paiement sécurisé selon le besoin.",
    },
  },

  trustItems: [
    { icon: Zap, label: "Devis rapide" },
    { icon: ShieldCheck, label: "Devis clair" },
    { icon: Truck, label: "Intervention soignée" },
    { icon: CreditCard, label: "Paiement sécurisé en préparation" },
  ],

  availabilityBanner: {
    eyebrow: "Disponibilité",
    title: "Un besoin rapide ? Contactez AS Transports",
    text: "Pour un déménagement, un débarras, une livraison ou un montage, contactez-nous directement afin de vérifier les disponibilités et obtenir une première estimation claire.",
    badges: [
      "Réponse rapide selon planning",
      "Créneaux étudiés sur demande",
      "Intervention Île-de-France, France et Europe",
    ],
    primaryCta: {
      label: "Appeler",
      href: "tel:+33765166125",
    },
    secondaryCta: {
      label: "WhatsApp",
      href: "https://wa.me/33765166125",
    },
  },

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
      title: "Étude de votre besoin",
      text: "Nous analysons la prestation, le volume, la distance, les accès et les contraintes afin de proposer une estimation adaptée.",
    },
    {
      number: "03",
      title: "Validation et intervention",
      text: "Après validation du devis, l’intervention est planifiée avec une organisation simple, claire et efficace.",
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

  testimonialsSection: {
    eyebrow: "Avis clients",
    title: "Des interventions sérieuses, soignées et recommandées",
    description:
      "Les retours clients permettent de rassurer les particuliers comme les professionnels avant une demande de devis ou une intervention.",
  },

  testimonials: [
    {
      name: "Client particulier",
      context: "Déménagement en Île-de-France",
      rating: 5,
      content:
        "Intervention sérieuse, équipe ponctuelle et efficace. Le déménagement s’est déroulé proprement, avec soin et sans mauvaise surprise.",
    },
    {
      name: "Client particulier",
      context: "Montage de meubles",
      rating: 5,
      content:
        "Travail rapide et propre. Les meubles ont été montés correctement, avec une vraie attention aux détails et à l’espace.",
    },
    {
      name: "Client professionnel",
      context: "Débarras et transport",
      rating: 5,
      content:
        "Prestation fiable, bonne communication et intervention organisée. Le devis était clair et le service conforme à ce qui avait été annoncé.",
    },
  ],

  packages: [
    {
      title: "Formule étudiant",
      price: "À partir de 400 € TTC",
      note: "Formule étudiant en Île-de-France",
    },
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
        "Vous pouvez nous contacter par téléphone, par e-mail, par WhatsApp ou via le formulaire du site. Nous étudions rapidement votre besoin pour vous proposer une estimation adaptée.",
    },
    {
      question: "Proposez-vous le montage de meubles et de cuisines ?",
      answer:
        "Oui, nous réalisons le montage de meubles ainsi que le montage et la mise en place de cuisines selon votre projet.",
    },
    {
      question: "Peut-on payer en carte bancaire ?",
      answer:
        "Une solution de paiement sécurisé est prévue afin de faciliter certaines validations de prestations après devis.",
    },
    {
      question: "Proposez-vous un paiement en plusieurs fois ?",
      answer:
        "Cette possibilité pourra être étudiée selon la prestation, le montant et les conditions validées avec le client.",
    },
  ],
};