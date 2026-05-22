"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Send } from "lucide-react";
import { addons, experiences } from "@/data/site";

const basePrice = 13000;

export function QuoteForm() {
  const [step, setStep] = useState(1);
  const [eventType, setEventType] = useState("Boda");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(50);
  const [duration, setDuration] = useState("Un día");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const total = useMemo(() => {
    return basePrice + addons.filter((addon) => selectedAddons.includes(addon.name)).reduce((sum, addon) => sum + addon.price, 0);
  }, [selectedAddons]);

  const money = new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 });

  if (submitted) {
    return (
      <section className="quote-main single">
        <div className="success-panel">
          <Check size={34} />
          <h2>Solicitud enviada</h2>
          <p>Recibimos tus datos. El siguiente paso será preparar tu propuesta personalizada y enviarla por WhatsApp.</p>
          <Link className="btn btn-primary" href="/">
            Volver al inicio
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="quote-main">
      <div className="quote-form">
        <div className="progress-line">
          {[1, 2, 3, 4].map((item) => (
            <button key={item} className={step >= item ? "done" : ""} type="button" onClick={() => setStep(item)}>
              {item}
            </button>
          ))}
        </div>

        {step === 1 ? (
          <Step title="¿Qué vas" italic="a celebrar?" label="Paso 1 de 4">
            <div className="quote-options">
              {experiences.map((item) => {
                const Icon = item.icon;
                return (
                  <button key={item.slug} className={eventType === item.title ? "selected" : ""} type="button" onClick={() => setEventType(item.title)}>
                    <Icon size={24} />
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </button>
                );
              })}
            </div>
          </Step>
        ) : null}

        {step === 2 ? (
          <Step title="Fecha" italic="invitados." label="Paso 2 de 4">
            <label className="field">
              <span>Fecha tentativa del evento</span>
              <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
            </label>
            <label className="field">
              <span>Número de invitados estimado</span>
            </label>
            <div className="field-row">
              <button type="button" onClick={() => setGuests(Math.max(15, guests - 10))}>-</button>
              <strong>{guests}</strong>
              <button type="button" onClick={() => setGuests(Math.min(220, guests + 10))}>+</button>
            </div>
            <label className="field">
              <span>Duración del evento</span>
              <select value={duration} onChange={(event) => setDuration(event.target.value)}>
                <option>Un día</option>
                <option>Fin de semana</option>
                <option>Solo medio día</option>
              </select>
            </label>
          </Step>
        ) : null}

        {step === 3 ? (
          <Step title="Extras" italic="para sumar." label="Paso 3 de 4">
            <div className="addon-grid">
              {addons.map((addon) => {
                const Icon = addon.icon;
                const selected = selectedAddons.includes(addon.name);
                return (
                  <button
                    key={addon.name}
                    className={selected ? "selected" : ""}
                    type="button"
                    onClick={() => setSelectedAddons(selected ? selectedAddons.filter((item) => item !== addon.name) : [...selectedAddons, addon.name])}
                  >
                    <Icon size={22} />
                    <span>{addon.name}</span>
                    <strong>+{money.format(addon.price)}</strong>
                  </button>
                );
              })}
            </div>
          </Step>
        ) : null}

        {step === 4 ? (
          <Step title="Casi listo" italic="¿a dónde enviamos tu propuesta?" label="Paso 4 de 4">
            <div className="contact-grid">
              <label className="field">
                <span>Nombre completo</span>
                <input placeholder="Tu nombre" />
              </label>
              <label className="field">
                <span>WhatsApp / teléfono</span>
                <input placeholder="55 1234 5678" />
              </label>
              <label className="field full">
                <span>Correo electrónico (opcional)</span>
                <input placeholder="tuemail@ejemplo.com" />
              </label>
              <label className="field full">
                <span>Cuéntanos más (opcional)</span>
                <textarea placeholder="Alguna petición especial, duda o contexto que quieras que sepamos..." />
              </label>
            </div>
          </Step>
        ) : null}

        <div className="quote-actions">
          <button className="btn btn-outline-dark" type="button" disabled={step === 1} onClick={() => setStep(step - 1)}>
            <ArrowLeft size={16} /> Atrás
          </button>
          {step < 4 ? (
            <button className="btn btn-primary" type="button" onClick={() => setStep(step + 1)}>
              Continuar <ArrowRight size={16} />
            </button>
          ) : (
            <button className="btn btn-accent" type="button" onClick={() => setSubmitted(true)}>
              Solicitar mi propuesta <Send size={16} />
            </button>
          )}
        </div>
      </div>

      <aside className="quote-summary">
        <h2>
          Tu <em>cotización.</em>
        </h2>
        <div className="summary-rows">
          <span>Tipo de evento</span><strong>{eventType}</strong>
          <span>Fecha tentativa</span><strong>{date || "-"}</strong>
          <span>Invitados</span><strong>{guests} personas</strong>
          <span>Duración</span><strong>{duration}</strong>
          <span>Finca (base)</span><strong>{money.format(basePrice)}</strong>
        </div>
        <div className="summary-total">
          <span>Estimado total</span>
          <strong>{money.format(total)}</strong>
        </div>
        <ul>
          <li>PDF personalizado en 24 horas</li>
          <li>Sin compromiso de compra</li>
          <li>Precio exacto, sin cargos ocultos</li>
        </ul>
      </aside>
    </section>
  );
}

function Step({ title, italic, label, children }: { title: string; italic: string; label: string; children: React.ReactNode }) {
  return (
    <div className="quote-step">
      <span>{label}</span>
      <h2>
        {title} <em>{italic}</em>
      </h2>
      {children}
    </div>
  );
}
