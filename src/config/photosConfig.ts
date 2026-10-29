/**
 * CATALOGUE EXCLUSIF DES PHOTOGRAPHIES DU PROJET
 * Toutes les photographies proviennent strictement du dossier `/images` du projet.
 */

export interface ProjectPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  orientation: "landscape" | "portrait";
  width: number;
  height: number;
}

export const PROJECT_PHOTOS = {
  poolOverviewMondrianWall: {
    id: "20261028_175133",
    src: "images/20261028_175133.png",
    alt: "Vue plongeante sur la piscine extérieure du Mondrian et sa fresque murale géométrique rouge, bleue, jaune et blanche à Saly Portudal",
    caption: "La piscine extérieure et la fresque murale géométrique au cœur de la résidence.",
    orientation: "landscape" as const,
    width: 1448,
    height: 1086,
  },
  poolTerraceClose: {
    id: "20261028_174951",
    src: "images/20261028_174951.png",
    alt: "Bassin extérieur bordé par la fresque carrelée inspirée de Piet Mondrian sous le ciel de Saly Portudal",
    caption: "Perspective sur le bassin et les compositions murales aux couleurs primaires.",
    orientation: "landscape" as const,
    width: 2400,
    height: 1792,
  },
  poolPavilionSpiralStair: {
    id: "20261028_175009",
    src: "images/20261028_175009.png",
    alt: "Perspective de la piscine et d'un pavillon blanc contemporain avec escalier hélicoïdal extérieur",
    caption: "Architecture contemporaine aux lignes épurées autour de la piscine.",
    orientation: "portrait" as const,
    width: 1792,
    height: 2400,
  },
  mondrianCornerTower: {
    id: "20261028_175045",
    src: "images/20261028_175045.png",
    alt: "Contre-plongée sur l'angle architectural du Mondrian habillé de carreaux géométriques jaunes, rouges, bleus, blancs et noirs",
    caption: "Angle architectural de la résidence habillé d'une composition géométrique.",
    orientation: "portrait" as const,
    width: 1792,
    height: 2400,
  },
  courtyardWideView: {
    id: "20261028_175156",
    src: "images/20261028_175156.png",
    alt: "Vue d'ensemble de la cour intérieure, des bâtiments blancs à garde-corps ajourés et de la piscine du Mondrian",
    caption: "Vue d'ensemble de la cour intérieure, des balcons ouvragés et de la piscine.",
    orientation: "landscape" as const,
    width: 2400,
    height: 1792,
  },
  staircaseMetalRailing: {
    id: "20261028_175240",
    src: "images/20261028_175240.png",
    alt: "Escalier en pierre grise et garde-corps métalliques noirs finement ajourés menant aux étages",
    caption: "Détail des circulations et des garde-corps métalliques noirs.",
    orientation: "portrait" as const,
    width: 1792,
    height: 2400,
  },
  kitchenetteDeskTv: {
    id: "20261028_180613",
    src: "images/20261028_180613.png",
    alt: "Espace intérieur avec coin cuisine rouge et noir et bureau équipé d'un téléviseur mural",
    caption: "Aménagement intérieur associant coin cuisine rouge et noir et espace bureau.",
    orientation: "landscape" as const,
    width: 2400,
    height: 1792,
  },
  bathroomWalkInShower: {
    id: "20261028_180644",
    src: "images/20261028_180644.png",
    alt: "Salle d'eau privative contemporaine avec vasque rectangulaire, miroir rétroéclairé et douche à l'italienne noire et blanche",
    caption: "Salle d'eau aux contrastes graphiques noirs et blancs.",
    orientation: "portrait" as const,
    width: 1792,
    height: 2400,
  },
  bedroomTwinDeskWindow: {
    id: "20261028_180730",
    src: "images/20261028_180730.png",
    alt: "Chambre de la résidence avec literie, armoire en bois clair, bureau et téléviseur mural",
    caption: "Vue d'une chambre avec armoire de rangement, bureau et téléviseur mural.",
    orientation: "portrait" as const,
    width: 1792,
    height: 2400,
  },
  bedroomSuiteWide: {
    id: "20261028_180846",
    src: "images/20261028_180846.png",
    alt: "Chambre lumineuse avec lit, climatiseur mural, ventilateur de plafond, table et baie vitrée",
    caption: "Hébergement lumineux avec espace nuit, table et grande ouverture vitrée.",
    orientation: "landscape" as const,
    width: 2400,
    height: 1792,
  },
  diningKitchenettePortrait: {
    id: "20261028_180937",
    src: "images/20261028_180937.png",
    alt: "Espace repas avec table et coin cuisine rouge et noir donnant sur la cour",
    caption: "Espace intérieur avec table et coin cuisine aux accents rouges et noirs.",
    orientation: "portrait" as const,
    width: 1792,
    height: 2400,
  },
  deskWardrobeTv: {
    id: "20261028_181001",
    src: "images/20261028_181001.png",
    alt: "Coin bureau avec téléviseur mural et grande armoire quatre portes en bois clair",
    caption: "Détail des équipements intérieurs : bureau, écran mural et grands rangements.",
    orientation: "landscape" as const,
    width: 2400,
    height: 1792,
  },
  interiorMarbleStairsDesk: {
    id: "20261028_181051",
    src: "images/20261028_181051.png",
    alt: "Intérieur avec escalier en marbre blanc veiné, bureau, téléviseur mural et armoire avec porte-bagages",
    caption: "Aménagement intérieur avec escalier en marbre, bureau et penderie.",
    orientation: "landscape" as const,
    width: 2400,
    height: 1792,
  },
  verandaDiningMondrianPoolView: {
    id: "20261028_181126",
    src: "images/20261028_181126.png",
    alt: "Espace intérieur lumineux ouvrant par de larges baies vitrées sur la piscine et la fresque Mondrian",
    caption: "Continuité visuelle entre l'intérieur, la piscine et la fresque murale.",
    orientation: "portrait" as const,
    width: 1086,
    height: 1448,
  },
  exteriorFacadeStreet: {
    id: "20261028_182525",
    src: "images/20261028_182525.png",
    alt: "Façade extérieure blanche de la résidence Le Mondrian à Saly Portudal ornée d'un bandeau vertical bleu, blanc et rouge",
    caption: "Façade extérieure de la résidence Le Mondrian à Saly Portudal.",
    orientation: "portrait" as const,
    width: 1792,
    height: 2400,
  },
};
