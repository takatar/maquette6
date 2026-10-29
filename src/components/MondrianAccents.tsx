import React from "react";

/**
 * Bandeau diviseur géométrique inspiré de Piet Mondrian.
 * Utilise exclusivement le noir profond, le blanc cassé, le gris clair et les 3 couleurs primaires.
 */
export const MondrianDivider: React.FC<{ variant?: "a" | "b" | "c"; className?: string }> = ({
  variant = "a",
  className = "",
}) => {
  if (variant === "b") {
    return (
      <div
        aria-hidden="true"
        className={`grid h-3 w-full grid-cols-12 border-y-2 border-[#151515] bg-[#151515] gap-[2px] ${className}`}
      >
        <div className="col-span-5 bg-[#F7F6F2]" />
        <div className="col-span-2 bg-[#1746A2]" />
        <div className="col-span-3 bg-[#E7E5DF]" />
        <div className="col-span-1 bg-[#F2C230]" />
        <div className="col-span-1 bg-[#D92727]" />
      </div>
    );
  }

  if (variant === "c") {
    return (
      <div
        aria-hidden="true"
        className={`grid h-3 w-full grid-cols-12 border-y-2 border-[#151515] bg-[#151515] gap-[2px] ${className}`}
      >
        <div className="col-span-2 bg-[#F2C230]" />
        <div className="col-span-6 bg-[#F7F6F2]" />
        <div className="col-span-1 bg-[#D92727]" />
        <div className="col-span-3 bg-[#1746A2]" />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`grid h-3 w-full grid-cols-12 border-y-2 border-[#151515] bg-[#151515] gap-[2px] ${className}`}
    >
      <div className="col-span-2 bg-[#D92727]" />
      <div className="col-span-6 bg-[#F7F6F2]" />
      <div className="col-span-1 bg-[#F2C230]" />
      <div className="col-span-2 bg-[#E7E5DF]" />
      <div className="col-span-1 bg-[#1746A2]" />
    </div>
  );
};

/**
 * Petit cartouche de catégorie éditoriale avec carré primaire Mondrian.
 */
export const EditorialBadge: React.FC<{
  label: string;
  accent?: "red" | "blue" | "yellow";
  className?: string;
}> = ({ label, accent = "red", className = "" }) => {
  const colorMap = {
    red: "bg-[#D92727]",
    blue: "bg-[#1746A2]",
    yellow: "bg-[#F2C230]",
  };

  return (
    <div
      className={`inline-flex items-center gap-2.5 border-2 border-[#151515] bg-[#F7F6F2] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#151515] ${className}`}
    >
      <span
        aria-hidden="true"
        className={`h-2.5 w-2.5 border border-[#151515] ${colorMap[accent]}`}
      />
      <span>{label}</span>
    </div>
  );
};

/**
 * Composition géométrique originale en CSS/SVG pour la section "Quand l'art inspire l'hospitalité"
 * et les respirations visuelles du site.
 */
export const MondrianArtComposition: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <div
      role="img"
      aria-label="Composition géométrique abstraite inspirée de Piet Mondrian associant lignes noires, rectangles blancs et accents rouge, bleu et jaune"
      className={`grid grid-cols-6 grid-rows-6 border-2 border-[#151515] bg-[#151515] gap-[3px] shadow-[8px_8px_0px_0px_#151515] ${className}`}
    >
      {/* Ligne 1-2 */}
      <div className="col-span-2 row-span-2 bg-[#D92727] p-4 flex flex-col justify-between text-[#F7F6F2]">
        <span className="text-[10px] font-bold uppercase tracking-widest opacity-90">
          Couleur primaire
        </span>
        <span className="font-serif-display text-lg">I. Rouge</span>
      </div>
      <div className="col-span-3 row-span-1 bg-[#F7F6F2]" />
      <div className="col-span-1 row-span-2 bg-[#F2C230] p-3 flex items-end">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#151515]">
          II.
        </span>
      </div>

      {/* Ligne 2-4 milieu */}
      <div className="col-span-3 row-span-3 bg-[#F7F6F2] p-5 flex flex-col justify-between">
        <span className="text-[11px] uppercase tracking-[0.2em] text-[#151515]/60 font-semibold">
          Saly Portudal · 17 Chambres
        </span>
        <div>
          <p className="font-serif-display text-xl sm:text-2xl text-[#151515]">
            Lignes, plans & lumière côtière
          </p>
          <p className="mt-1 text-xs text-[#151515]/75">
            Équilibre entre rigueur graphique et hospitalité balnéaire.
          </p>
        </div>
      </div>

      {/* Colonne gauche milieu */}
      <div className="col-span-2 row-span-3 bg-[#E7E5DF] p-4 flex flex-col justify-end">
        <span className="text-[10px] uppercase tracking-widest text-[#151515]/70 font-semibold">
          Espace & Clarté
        </span>
      </div>

      {/* Colonne droite milieu */}
      <div className="col-span-1 row-span-2 bg-[#F7F6F2]" />

      {/* Bas */}
      <div className="col-span-1 row-span-2 bg-[#F7F6F2]" />
      <div className="col-span-2 row-span-1 bg-[#F2C230]" />
      <div className="col-span-3 row-span-2 bg-[#1746A2] p-4 flex flex-col justify-between text-[#F7F6F2]">
        <span className="text-[10px] font-bold uppercase tracking-widest opacity-90">
          Horizon côtier
        </span>
        <span className="font-serif-display text-lg">III. Bleu profond</span>
      </div>
      <div className="col-span-2 row-span-1 bg-[#F7F6F2]" />
    </div>
  );
};
