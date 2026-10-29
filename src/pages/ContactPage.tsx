import React from "react";
import { MapPin, Phone, Mail, AlertTriangle } from "lucide-react";
import { DEMO_CONTACT_INFO } from "../config/siteConfig";
import { PROJECT_PHOTOS } from "../config/photosConfig";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { ContactForm } from "../components/ContactForm";
import { EditorialBadge, MondrianDivider } from "../components/MondrianAccents";

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-[#F7F6F2] text-[#151515]">
      {/* SECTION 1 — INTRODUCTION */}
      <section
        aria-labelledby="contact-intro-title"
        className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 border-2 border-[#151515] bg-[#151515] gap-[2px] shadow-[8px_8px_0px_0px_#151515]">
          <div className="lg:col-span-8 bg-[#F7F6F2] p-6 sm:p-10 lg:p-12">
            <EditorialBadge label="Contact & Réservation" accent="red" />
            <h1
              id="contact-intro-title"
              className="mt-5 font-serif-display text-3xl sm:text-5xl text-[#151515]"
            >
              Contactez Le Mondrian.
            </h1>
            <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-[#151515]/85">
              Une question, une demande d'information ou un projet de séjour à
              Saly Portudal ? Contactez notre équipe et préparez votre venue au
              Mondrian.
            </p>
          </div>
          <div className="lg:col-span-4 grid grid-cols-2 grid-rows-2 bg-[#151515] gap-[2px] min-h-[180px]">
            <div className="bg-[#D92727] p-4 flex items-end">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#F7F6F2]">
                WhatsApp Direct
              </span>
            </div>
            <div className="bg-[#F7F6F2] p-4 flex items-end">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#151515]">
                17 Chambres
              </span>
            </div>
            <div className="bg-[#F2C230] p-4 flex items-end">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#151515]">
                Saly Portudal
              </span>
            </div>
            <div className="bg-[#1746A2] p-4 flex items-end">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#F7F6F2]">
                Sénégal
              </span>
            </div>
          </div>
        </div>
      </section>

      <MondrianDivider variant="a" />

      {/* SECTION 3 — CONTACT DIRECT PAR WHATSAPP (Mis en avant immédiatement) */}
      <section aria-labelledby="whatsapp-direct-title" className="mx-auto max-w-7xl px-4 pt-12 pb-8 sm:px-6 lg:px-8">
        <div className="border-2 border-[#151515] bg-[#151515] p-[2px] shadow-[8px_8px_0px_0px_#D92727]">
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#151515] gap-[2px]">
            <div className="lg:col-span-8 bg-[#F7F6F2] p-6 sm:p-10">
              <EditorialBadge label="Canal prioritaire · Réservation" accent="red" />
              <h2 id="whatsapp-direct-title" className="mt-4 font-serif-display text-3xl sm:text-4xl text-[#151515]">
                Le plus simple ? Écrivez-nous.
              </h2>
              <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-[#151515]/85">
                Pour obtenir des renseignements sur les chambres, les disponibilités ou les modalités de séjour, contactez directement Le Mondrian sur WhatsApp.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <WhatsAppButton label="Réservation sur WhatsApp" variant="red" size="lg" />
                <WhatsAppButton label="Nous contacter sur WhatsApp" variant="outline" size="md" />
              </div>
            </div>
            <div className="lg:col-span-4 bg-[#1746A2] p-6 sm:p-8 text-[#F7F6F2] flex flex-col justify-between">
              <div>
                <span className="inline-block border border-[#F7F6F2] bg-[#F2C230] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[#151515]">
                  Réponse humaine
                </span>
                <p className="mt-4 font-serif-display text-2xl">
                  Échange direct avec notre équipe
                </p>
                <p className="mt-2 text-xs leading-relaxed text-[#E7E5DF]/90">
                  Indiquez vos dates souhaitées et le nombre de voyageurs dans la conversation WhatsApp : nous vous répondons personnellement pour préparer votre séjour.
                </p>
              </div>
              <p className="mt-6 border-t border-[#F7F6F2]/25 pt-3 text-[11px] text-[#E7E5DF]/80">
                Aucune réservation automatique : chaque demande fait l'objet d'une confirmation humaine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — COORDONNÉES & SECTION 4 — FORMULAIRE DE CONTACT */}
      <section aria-labelledby="contact-details-title" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Colonne Coordonnées de démonstration */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border-2 border-[#151515] bg-[#F7F6F2] p-6 sm:p-8 shadow-[6px_6px_0px_0px_#151515]">
              <div className="flex items-center justify-between border-b-2 border-[#151515] pb-4">
                <h2 id="contact-details-title" className="font-serif-display text-2xl">
                  Coordonnées
                </h2>
                <span className="border border-[#151515] bg-[#F2C230] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                  Démonstration
                </span>
              </div>

              <div className="mt-4 flex items-start gap-2.5 border-l-4 border-[#D92727] bg-[#E7E5DF] p-3 text-xs leading-relaxed">
                <AlertTriangle className="h-4 w-4 shrink-0 text-[#D92727] mt-0.5" />
                <span>
                  <strong>Important :</strong> Ces coordonnées sont fictives et servent à la maquette. Elles devront être remplacées dans <code>src/config/siteConfig.ts</code> avant la publication du site.
                </span>
              </div>

              <dl className="mt-6 space-y-4 text-sm">
                <div className="border-b border-[#151515]/15 pb-3">
                  <dt className="text-xs font-bold uppercase tracking-wider text-[#151515]/60">
                    Établissement
                  </dt>
                  <dd className="mt-1 font-semibold text-[#151515]">
                    {DEMO_CONTACT_INFO.name} — {DEMO_CONTACT_INFO.type} ({DEMO_CONTACT_INFO.capacity} chambres)
                  </dd>
                </div>

                <div className="border-b border-[#151515]/15 pb-3">
                  <dt className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#151515]/60">
                    <MapPin className="h-3.5 w-3.5 text-[#D92727]" />
                    <span>Adresse (maquette)</span>
                  </dt>
                  <dd className="mt-1 text-[#151515]">{DEMO_CONTACT_INFO.address}</dd>
                </div>

                <div className="border-b border-[#151515]/15 pb-3">
                  <dt className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#151515]/60">
                    <Phone className="h-3.5 w-3.5 text-[#1746A2]" />
                    <span>Téléphone / WhatsApp (maquette)</span>
                  </dt>
                  <dd className="mt-1 text-[#151515]">{DEMO_CONTACT_INFO.phoneDisplay}</dd>
                </div>

                <div>
                  <dt className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#151515]/60">
                    <Mail className="h-3.5 w-3.5 text-[#151515]" />
                    <span>E-mail d'exemple (non opérationnel)</span>
                  </dt>
                  <dd className="mt-1 break-all font-mono text-xs text-[#151515]">
                    {DEMO_CONTACT_INFO.email}
                  </dd>
                  <p className="mt-1 text-[11px] text-[#151515]/65">
                    {DEMO_CONTACT_INFO.emailNote}
                  </p>
                </div>
              </dl>
            </div>

            {/* Section 5 — Localisation générale */}
            <div className="border-2 border-[#151515] bg-[#E7E5DF] p-6 shadow-[6px_6px_0px_0px_#1746A2]">
              <EditorialBadge label="Localisation générale" accent="blue" />
              <h3 className="mt-4 font-serif-display text-2xl">
                Saly Portudal, Sénégal
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#151515]/80">
                La résidence Le Mondrian se situe à Saly Portudal, au Sénégal. Afin de ne pas afficher un marqueur approximatif en l'absence de coordonnées GPS certifiées, aucune carte trompeuse n'est représentée.
              </p>
              <div className="mt-4 aspect-[16/10] overflow-hidden border-2 border-[#151515] bg-[#F7F6F2]">
                <img
                  src={PROJECT_PHOTOS.exteriorFacadeStreet.src}
                  alt={PROJECT_PHOTOS.exteriorFacadeStreet.alt}
                  width={PROJECT_PHOTOS.exteriorFacadeStreet.width}
                  height={PROJECT_PHOTOS.exteriorFacadeStreet.height}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Colonne Formulaire de contact facultatif */}
          <div className="lg:col-span-7">
            <div className="mb-4">
              <EditorialBadge label="Demande générale" accent="yellow" />
              <h2 className="mt-3 font-serif-display text-2xl sm:text-3xl">
                Formulaire de renseignement
              </h2>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};
