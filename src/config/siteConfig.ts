/**
 * CONFIGURATION CENTRALISÉE — LE MONDRIAN (SALY PORTUDAL, SÉNÉGAL)
 *
 * IMPORTANT : Les coordonnées ci-dessous sont des données de démonstration
 * destinées à la maquette. Elles doivent être remplacées par les coordonnées
 * réelles de l'établissement avant la mise en ligne.
 */

export const HOTEL_NAME = "Le Mondrian";

/**
 * Numéro WhatsApp de démonstration (uniquement les chiffres avec l'indicatif pays 221,
 * sans signe + ni espaces). À remplacer par le numéro réel avant publication.
 */
export const WHATSAPP_NUMBER = "221771234567";

export const RESERVATION_MESSAGE =
  "Bonjour Le Mondrian, je souhaite obtenir des informations sur les disponibilités et les modalités de réservation de votre résidence à Saly Portudal. Pourriez-vous m'aider à préparer mon séjour ?";

export const WHATSAPP_RESERVATION_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(RESERVATION_MESSAGE)}`;

/**
 * Permet de générer un lien WhatsApp avec un message personnalisé
 * tout en conservant la même logique et le même numéro centralisé.
 */
export function buildWhatsAppUrl(customMessage?: string): string {
  const message =
    customMessage && customMessage.trim().length > 0
      ? customMessage
      : RESERVATION_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const DEMO_CONTACT_INFO = {
  isDemoData: true,
  demoNotice:
    "Coordonnées de démonstration (maquette) — à remplacer par les coordonnées officielles avant la publication du site.",
  name: HOTEL_NAME,
  type: "Résidence hôtelière",
  capacity: 17,
  address: "Route de Saly, quartier central, Saly Portudal, Mbour, Sénégal.",
  locality: "Saly Portudal, Sénégal",
  phoneDisplay: "+221 77 123 45 67",
  whatsappNumber: WHATSAPP_NUMBER,
  email: "contact@lemondrian-saly.example",
  emailNote:
    "Le domaine .example est réservé aux exemples : cette adresse e-mail de démonstration n'est pas opérationnelle.",
} as const;

export const NAVIGATION_ITEMS = [
  { label: "Accueil", path: "/" },
  { label: "Présentation", path: "/presentation" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
] as const;

export const PAGE_SEO: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Le Mondrian | Résidence hôtelière à Saly Portudal",
    description:
      "Au cœur de Saly Portudal, Le Mondrian vous accueille dans une résidence hôtelière de 17 chambres où l'élégance contemporaine rencontre l'esprit de la côte sénégalaise.",
  },
  "/presentation": {
    title: "Notre résidence | Le Mondrian à Saly",
    description:
      "Située au cœur de Saly Portudal, au Sénégal, la résidence hôtelière Le Mondrian propose 17 chambres dans un univers contemporain inspiré par Piet Mondrian.",
  },
  "/services": {
    title: "Services et informations pratiques | Le Mondrian",
    description:
      "Retrouvez les informations utiles, les équipements et les modalités d'accueil pour préparer votre séjour au Mondrian, résidence hôtelière à Saly Portudal.",
  },
  "/contact": {
    title: "Contact et réservation WhatsApp | Le Mondrian",
    description:
      "Une question ou un projet de séjour à Saly Portudal ? Contactez directement la résidence hôtelière Le Mondrian sur WhatsApp.",
  },
};
