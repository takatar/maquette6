import React from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  variant?: "dark" | "light";
  showSubtitle?: boolean;
  className?: string;
}

/**
 * Logo typographique LE MONDRIAN accompagné d'un signe géométrique original
 * composé de lignes noires et de rectangles rouge, bleu, jaune et blanc cassé.
 */
export const Logo: React.FC<LogoProps> = ({
  variant = "dark",
  showSubtitle = true,
  className = "",
}) => {
  const textColor = variant === "light" ? "text-[#F7F6F2]" : "text-[#151515]";
  const subColor =
    variant === "light" ? "text-[#E7E5DF]/80" : "text-[#151515]/70";

  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-3.5 focus-visible:outline-2 focus-visible:outline-[#1746A2] ${className}`}
      aria-label="Le Mondrian — Résidence hôtelière à Saly Portudal (Retour à l'accueil)"
    >
      {/* Signe géométrique original inspiré de Mondrian */}
      <span
        aria-hidden="true"
        className="grid h-10 w-10 shrink-0 grid-cols-3 grid-rows-3 border-2 border-[#151515] bg-[#151515] gap-[2px] shadow-[3px_3px_0px_0px_#151515] transition-transform duration-200 group-hover:-translate-y-0.5"
      >
        <span className="col-span-2 row-span-2 bg-[#D92727]" />
        <span className="col-span-1 row-span-1 bg-[#F7F6F2]" />
        <span className="col-span-1 row-span-2 bg-[#1746A2]" />
        <span className="col-span-1 row-span-1 bg-[#F2C230]" />
        <span className="col-span-1 row-span-1 bg-[#F7F6F2]" />
      </span>

      <span className="flex flex-col leading-none">
        <span
          className={`font-serif-display text-lg sm:text-xl tracking-[0.14em] uppercase font-normal ${textColor}`}
        >
          LE MONDRIAN
        </span>
        {showSubtitle && (
          <span
            className={`mt-1 text-[10px] sm:text-[11px] uppercase tracking-[0.24em] font-semibold ${subColor}`}
          >
            Saly Portudal · Sénégal
          </span>
        )}
      </span>
    </Link>
  );
};
