import React from "react";
import { ProjectPhoto } from "../config/photosConfig";

interface RoomCardProps {
  photo: ProjectPhoto;
  title: string;
  description: string;
  accentColor?: "red" | "blue" | "yellow";
  indexLabel?: string;
}

/**
 * Carte visuelle de chambre / espace intérieur.
 * Respecte strictement la consigne : aucune invention de catégorie, tarif,
 * superficie, capacité d'accueil, équipement non visible ou disponibilité.
 */
export const RoomCard: React.FC<RoomCardProps> = ({
  photo,
  title,
  description,
  accentColor = "red",
  indexLabel = "01",
}) => {
  const accentMap = {
    red: "bg-[#D92727] text-[#F7F6F2]",
    blue: "bg-[#1746A2] text-[#F7F6F2]",
    yellow: "bg-[#F2C230] text-[#151515]",
  };

  return (
    <article className="group flex flex-col border-2 border-[#151515] bg-[#F7F6F2] shadow-[6px_6px_0px_0px_#151515] transition-transform duration-200 hover:-translate-y-1">
      {/* En-tête géométrique de la carte */}
      <div className="flex items-center justify-between border-b-2 border-[#151515] bg-[#E7E5DF] px-4 py-2">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#151515]">
          Le Mondrian · Saly
        </span>
        <span
          className={`border border-[#151515] px-2 py-0.5 text-[11px] font-bold tracking-widest ${accentMap[accentColor]}`}
        >
          {indexLabel}
        </span>
      </div>

      {/* Photographie réelle issue du dossier images */}
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b-2 border-[#151515] bg-[#E7E5DF]">
        <img
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
        />
      </div>

      {/* Contenu sobre et exact */}
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          <h3 className="font-serif-display text-xl text-[#151515]">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[#151515]/80">
            {description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-[#151515]/15 flex items-center justify-between text-xs text-[#151515]/70">
          <span>Caractéristiques & disponibilités sur demande</span>
          <span
            aria-hidden="true"
            className="h-2.5 w-2.5 border border-[#151515] bg-[#F2C230]"
          />
        </div>
      </div>
    </article>
  );
};
