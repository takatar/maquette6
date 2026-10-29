import React from "react";
import { LucideIcon } from "lucide-react";

export type ServiceVerificationStatus = "visual-observed" | "on-inquiry";

export interface ServiceItemConfig {
  id: string;
  title: string;
  description: string;
  status: ServiceVerificationStatus;
  statusLabel: string;
  icon: LucideIcon;
  accent: "red" | "blue" | "yellow" | "white";
}

interface ServiceCardProps {
  item: ServiceItemConfig;
}

/**
 * Carte de présentation d'un service ou équipement.
 * Permet de distinguer clairement ce qui est visible sur les photographies du dossier
 * et ce qui est à confirmer directement auprès de l'équipe sur WhatsApp, sans fausse promesse.
 */
export const ServiceCard: React.FC<ServiceCardProps> = ({ item }) => {
  const Icon = item.icon;

  const accentBg = {
    red: "bg-[#D92727] text-[#F7F6F2]",
    blue: "bg-[#1746A2] text-[#F7F6F2]",
    yellow: "bg-[#F2C230] text-[#151515]",
    white: "bg-[#F7F6F2] text-[#151515]",
  };

  return (
    <article className="flex flex-col justify-between border-2 border-[#151515] bg-[#F7F6F2] p-6 shadow-[5px_5px_0px_0px_#151515]">
      <div>
        <div className="flex items-start justify-between gap-4">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center border-2 border-[#151515] ${accentBg[item.accent]}`}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <span
            className={`border border-[#151515] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
              item.status === "visual-observed"
                ? "bg-[#E7E5DF] text-[#151515]"
                : "bg-[#F2C230]/40 text-[#151515]"
            }`}
          >
            {item.statusLabel}
          </span>
        </div>

        <h3 className="mt-5 font-serif-display text-xl text-[#151515]">
          {item.title}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-[#151515]/80">
          {item.description}
        </p>
      </div>

      <div className="mt-5 flex items-center gap-2 border-t border-[#151515]/15 pt-3 text-xs font-medium text-[#151515]/70">
        <span
          aria-hidden="true"
          className={`h-2 w-2 border border-[#151515] ${
            item.status === "visual-observed" ? "bg-[#1746A2]" : "bg-[#D92727]"
          }`}
        />
        <span>
          {item.status === "visual-observed"
            ? "Visible dans certains logements photographiés — détails par chambre sur WhatsApp"
            : "Renseignements et confirmation auprès de notre équipe"}
        </span>
      </div>
    </article>
  );
};
