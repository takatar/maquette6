import React from "react";

interface EditorialBlockProps {
  number?: string;
  title: string;
  text: string;
  accent?: "red" | "blue" | "yellow";
  className?: string;
}

/**
 * Bloc éditorial inspiré des compositions géométriques de Piet Mondrian.
 */
export const EditorialBlock: React.FC<EditorialBlockProps> = ({
  number,
  title,
  text,
  accent = "red",
  className = "",
}) => {
  const accentColors = {
    red: "bg-[#D92727] text-[#F7F6F2]",
    blue: "bg-[#1746A2] text-[#F7F6F2]",
    yellow: "bg-[#F2C230] text-[#151515]",
  };

  return (
    <div
      className={`flex flex-col justify-between border-2 border-[#151515] bg-[#F7F6F2] p-6 sm:p-8 shadow-[6px_6px_0px_0px_#151515] ${className}`}
    >
      <div>
        <div className="flex items-center justify-between border-b-2 border-[#151515] pb-4">
          <span
            aria-hidden="true"
            className={`inline-flex h-8 w-8 items-center justify-center border-2 border-[#151515] text-xs font-bold ${accentColors[accent]}`}
          >
            {number || "■"}
          </span>
          <span
            aria-hidden="true"
            className="h-2 w-12 bg-[#151515]"
          />
        </div>

        <h3 className="mt-6 font-serif-display text-2xl text-[#151515]">
          {title}
        </h3>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#151515]/80">
          {text}
        </p>
      </div>

      <div className="mt-6 flex items-center gap-1.5 pt-2" aria-hidden="true">
        <span className="h-2 w-6 border border-[#151515] bg-[#D92727]" />
        <span className="h-2 w-3 border border-[#151515] bg-[#1746A2]" />
        <span className="h-2 w-4 border border-[#151515] bg-[#F2C230]" />
      </div>
    </div>
  );
};
