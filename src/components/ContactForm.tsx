import React, { useState } from "react";
import { AlertCircle } from "lucide-react";
import { buildWhatsAppUrl, WHATSAPP_RESERVATION_URL } from "../config/siteConfig";
import { WhatsAppIcon } from "./WhatsAppButton";

export const ContactForm: React.FC = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false,
  });
  const [error, setError] = useState<string | null>(null);
  const [preparedUrl, setPreparedUrl] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setPreparedUrl(null);

    if (!form.fullName.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setError("Veuillez renseigner tous les champs obligatoires (*).");
      return;
    }
    if (!form.consent) {
      setError("Veuillez accepter le traitement de vos données.");
      return;
    }

    const text = [
      "Bonjour Le Mondrian,",
      "Demande d'information générale depuis le site :",
      `• Nom : ${form.fullName.trim()}`,
      `• E-mail : ${form.email.trim()}`,
      form.phone.trim() ? `• Téléphone : ${form.phone.trim()}` : null,
      `• Objet : ${form.subject.trim()}`,
      `• Message : ${form.message.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");

    setPreparedUrl(buildWhatsAppUrl(text));
  };

  const inputCls =
    "mt-1.5 w-full border-2 border-[#151515] bg-[#F7F6F2] px-3.5 py-2.5 text-sm text-[#151515] placeholder:text-[#151515]/45";
  const labelCls = "block text-xs font-bold uppercase tracking-wider text-[#151515]";

  const fields = [
    { id: "cf-name", key: "fullName" as const, label: "Nom et prénom", type: "text", req: true, ph: "Votre nom et prénom" },
    { id: "cf-email", key: "email" as const, label: "E-mail", type: "email", req: true, ph: "votre.email@domaine.com" },
    { id: "cf-phone", key: "phone" as const, label: "Téléphone (facultatif)", type: "tel", req: false, ph: "+221 ..." },
    { id: "cf-subject", key: "subject" as const, label: "Objet du message", type: "text", req: true, ph: "Demande de renseignement" },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="border-2 border-[#151515] bg-[#F7F6F2] p-6 sm:p-8 shadow-[6px_6px_0px_0px_#151515]"
    >
      <div className="mb-6 border-l-4 border-[#1746A2] bg-[#E7E5DF] p-3.5 text-xs leading-relaxed">
        <strong>Note :</strong> Ce formulaire est destiné aux demandes générales et ne constitue pas un système de réservation. Pour réserver, utilisez{" "}
        <a href={WHATSAPP_RESERVATION_URL} target="_blank" rel="noopener noreferrer" className="font-bold underline">
          WhatsApp
        </a>.
      </div>

      {error && (
        <div role="alert" className="mb-5 flex items-start gap-2 border-2 border-[#D92727] bg-[#D92727]/10 p-3 text-xs font-semibold">
          <AlertCircle className="h-4 w-4 shrink-0 text-[#D92727] mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.id}>
            <label htmlFor={f.id} className={labelCls}>
              {f.label} {f.req && <span className="text-[#D92727]">*</span>}
            </label>
            <input
              id={f.id}
              type={f.type}
              required={f.req}
              value={form[f.key]}
              onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
              placeholder={f.ph}
              className={inputCls}
            />
          </div>
        ))}
      </div>

      <div className="mt-4">
        <label htmlFor="cf-msg" className={labelCls}>
          Message <span className="text-[#D92727]">*</span>
        </label>
        <textarea
          id="cf-msg"
          rows={4}
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Votre question concernant la résidence Le Mondrian..."
          className={inputCls}
        />
      </div>

      <div className="mt-4 flex items-start gap-2.5">
        <input
          id="cf-consent"
          type="checkbox"
          required
          checked={form.consent}
          onChange={(e) => setForm({ ...form, consent: e.target.checked })}
          className="mt-1 h-4 w-4 shrink-0 border-2 border-[#151515] accent-[#1746A2]"
        />
        <label htmlFor="cf-consent" className="text-xs leading-relaxed text-[#151515]/85">
          J'accepte le traitement de mes données afin de permettre à l'équipe du Mondrian de répondre à ma demande. <span className="text-[#D92727]">*</span>
        </label>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full sm:w-auto border-2 border-[#151515] bg-[#151515] px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F7F6F2] shadow-[4px_4px_0px_0px_#F2C230] hover:bg-[#1746A2] cursor-pointer"
        >
          Envoyer mon message
        </button>
      </div>

      {preparedUrl && (
        <div role="status" aria-live="polite" className="mt-6 border-2 border-[#151515] bg-[#E7E5DF] p-4 space-y-2.5">
          <p className="text-xs font-bold uppercase tracking-wider">
            Aucun serveur d'envoi d'e-mail connecté — Canal WhatsApp prêt
          </p>
          <p className="text-xs leading-relaxed text-[#151515]/85">
            Afin de ne simuler aucun envoi serveur fictif, votre message a été préparé pour être transmis directement via WhatsApp :
          </p>
          <a
            href={preparedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[#151515] bg-[#D92727] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#F7F6F2] shadow-[3px_3px_0px_0px_#151515] hover:bg-[#151515]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span>Transmettre sur WhatsApp</span>
          </a>
        </div>
      )}
    </form>
  );
};
