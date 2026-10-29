import React from "react";
import { WHATSAPP_RESERVATION_URL, buildWhatsAppUrl } from "../config/siteConfig";

interface WhatsAppIconProps {
  className?: string;
}

export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M12.031 2c-5.516 0-9.999 4.486-9.999 10.001 0 1.766.462 3.489 1.339 5.012L2 22l5.125-1.344c1.474.805 3.133 1.23 4.904 1.23h.004c5.515 0 10.001-4.486 10.001-10.001 0-2.672-1.04-5.185-2.929-7.074C17.216 3.041 14.703 2 12.031 2zm5.828 14.127c-.244.688-1.421 1.314-1.976 1.399-.506.077-1.148.109-1.855-.115-.429-.136-.979-.318-1.685-.623-2.966-1.281-4.902-4.269-5.051-4.467-.148-.199-1.206-1.605-1.206-3.061 0-1.456.763-2.172 1.035-2.469.272-.297.594-.371.792-.371.198 0 .396.002.569.01.183.009.428-.069.669.512.248.594.842 2.054.916 2.203.074.149.124.322.025.52-.099.198-.149.322-.297.495-.148.173-.312.387-.446.52-.148.148-.303.309-.13.606.173.297.769 1.269 1.651 2.055 1.135 1.012 2.091 1.326 2.388 1.475.297.148.47.124.644-.074.173-.198.743-.866.941-1.163.198-.297.396-.248.668-.149.272.099 1.733.817 2.03.965.297.149.495.223.569.347.074.124.074.718-.17 1.406z" />
  </svg>
);

interface WhatsAppButtonProps {
  label?: string;
  customMessage?: string;
  variant?: "primary" | "red" | "blue" | "outline" | "dark";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
}

/**
 * Bouton de réservation WhatsApp centralisé.
 * Utilise systématiquement WHATSAPP_RESERVATION_URL (ou buildWhatsAppUrl avec le même numéro).
 */
export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  label = "Réservation",
  customMessage,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
}) => {
  const href = customMessage ? buildWhatsAppUrl(customMessage) : WHATSAPP_RESERVATION_URL;

  const variantClasses: Record<NonNullable<WhatsAppButtonProps["variant"]>, string> = {
    primary:
      "bg-[#151515] text-[#F7F6F2] border-2 border-[#151515] hover:bg-[#D92727] hover:border-[#151515] shadow-[4px_4px_0px_0px_#D92727] hover:shadow-[4px_4px_0px_0px_#151515]",
    red:
      "bg-[#D92727] text-[#F7F6F2] border-2 border-[#151515] hover:bg-[#151515] shadow-[4px_4px_0px_0px_#151515]",
    blue:
      "bg-[#1746A2] text-[#F7F6F2] border-2 border-[#151515] hover:bg-[#151515] shadow-[4px_4px_0px_0px_#151515]",
    outline:
      "bg-[#F7F6F2] text-[#151515] border-2 border-[#151515] hover:bg-[#F2C230] shadow-[4px_4px_0px_0px_#151515]",
    dark:
      "bg-[#F7F6F2] text-[#151515] border-2 border-[#151515] hover:bg-[#F2C230] shadow-[4px_4px_0px_0px_#D92727]",
  };

  const sizeClasses: Record<NonNullable<WhatsAppButtonProps["size"]>, string> = {
    sm: "px-3.5 py-2 text-xs tracking-wider",
    md: "px-5 py-3 text-xs sm:text-sm tracking-wider",
    lg: "px-7 py-4 text-sm sm:text-base tracking-wider",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} — Ouvrir une conversation WhatsApp avec Le Mondrian`}
      className={`inline-flex items-center justify-center gap-2.5 font-semibold uppercase transition-all duration-200 active:translate-x-[1px] active:translate-y-[1px] ${
        variantClasses[variant]
      } ${sizeClasses[size]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      <WhatsAppIcon className={size === "lg" ? "w-5 h-5 shrink-0" : "w-4 h-4 shrink-0"} />
      <span>{label}</span>
    </a>
  );
};
