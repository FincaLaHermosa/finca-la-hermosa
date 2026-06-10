"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { addons, basePrice, busyDates, eventTypes, type Addon, type DurationId, type EventTypeId } from "@/lib/cotizar-data";

type FormState = {
  tipo: EventTypeId | "";
  fecha: string;
  guests: number;
  duracion: DurationId;
  addons: string[];
  nombre: string;
  tel: string;
  email: string;
  notas: string;
};

type FormError = {
  message: string;
  fieldId?: string;
};

const initialState: FormState = {
  tipo: "",
  fecha: "",
  guests: 50,
  duracion: "dia",
  addons: [],
  nombre: "",
  tel: "",
  email: "",
  notas: "",
};

const steps = ["Tipo", "Fecha", "Extras", "Contacto"];

const durationLabels: Record<DurationId, string> = {
  dia: "Un día",
  finde: "Fin de semana",
  personalizado: "Personalizado",
};

export function CotizarContent({ initialType = "" }: { initialType?: string }) {
  const [step, setStep] = useState(1);
  const shouldScrollToStep = useRef(false);
  const [state, setState] = useState<FormState>(() => {
    const normalizedType = eventTypes.find((type) => type.id === initialType || type.value.toLowerCase() === initialType.toLowerCase());
    return normalizedType ? { ...initialState, tipo: normalizedType.id } : initialState;
  });
  const [error, setError] = useState<FormError | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const lastTrackedStep = useRef(0);
  const selectedType = eventTypes.find((item) => item.id === state.tipo);
  const selectedAddons = addons.filter((addon) => state.addons.includes(addon.id));
  const total = useMemo(() => {
    return basePrice + (state.duracion === "finde" ? basePrice : 0) + selectedAddons.reduce((sum, addon) => sum + addon.price, 0);
  }, [selectedAddons, state.duracion]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      document.querySelectorAll(".hero-cotizar .txt-reveal").forEach((el) => el.classList.add("in"));
    }, 120);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!shouldScrollToStep.current) return;
    shouldScrollToStep.current = false;
    window.requestAnimationFrame(() => {
      const activeStepTitle = document.querySelector(`#step-${step} .step-heading`);
      activeStepTitle?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [step]);

  const setField = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setState((current) => ({ ...current, [field]: value }));
    setError(null);

    if (field === "tipo") {
      trackEvent("quote_event_type_select", { event_type: String(value) });
    }
    if (field === "fecha") {
      trackEvent("quote_date_set", { event_date: String(value), is_busy: busyDates.includes(String(value)) });
    }
    if (field === "guests") {
      trackEvent("quote_guests_change", { guest_count: Number(value) });
    }
    if (field === "duracion") {
      trackEvent("quote_duration_select", { duration: String(value) });
    }
  };

  const goToStep = (nextStep: number) => {
    shouldScrollToStep.current = true;
    setStep(nextStep);
  };

  const nextStep = () => {
    if (step === 1 && !state.tipo) {
      trackEvent("quote_validation_error", { step_number: step, field_id: "tipo-evento-group", error_message: "missing_event_type" });
      setError({ message: "Elige el tipo de evento para preparar una propuesta adecuada.", fieldId: "tipo-evento-group" });
      return;
    }
    if (step === 2) {
      if (!state.fecha) {
        trackEvent("quote_validation_error", { step_number: step, field_id: "fecha-input", error_message: "missing_date" });
        setError({ message: "Elige una fecha tentativa para revisar disponibilidad.", fieldId: "fecha-input" });
        return;
      }
      if (busyDates.includes(state.fecha)) {
        trackEvent("quote_validation_error", { step_number: step, field_id: "fecha-input", error_message: "busy_date" });
        setError({ message: "Esa fecha ya está reservada. Elige una de las fechas cercanas disponibles.", fieldId: "fecha-input" });
        return;
      }
    }
    setError(null);
    goToStep(step + 1);
  };

  const submitForm = (event: FormEvent) => {
    event.preventDefault();
    if (step !== 4) return;
    if (!state.nombre.trim()) {
      trackEvent("quote_validation_error", { step_number: step, field_id: "inp-nombre", error_message: "missing_name" });
      setError({ message: "Escribe tu nombre para saber a quién dirigir la propuesta.", fieldId: "inp-nombre" });
      return;
    }
    if (!state.tel.trim()) {
      trackEvent("quote_validation_error", { step_number: step, field_id: "inp-telefono", error_message: "missing_phone" });
      setError({ message: "Comparte un WhatsApp o teléfono para enviarte la propuesta.", fieldId: "inp-telefono" });
      return;
    }
    if (state.email.trim() && !state.email.includes("@")) {
      trackEvent("quote_validation_error", { step_number: step, field_id: "inp-email", error_message: "invalid_email" });
      setError({ message: "Revisa el correo. Debe incluir @, o puedes dejarlo vacío.", fieldId: "inp-email" });
      return;
    }
    trackEvent("quote_submit_success", {
      event_type: state.tipo,
      event_date: state.fecha,
      guest_count: state.guests,
      duration: state.duracion,
      addons: state.addons,
      estimated_total: total,
      has_email: Boolean(state.email.trim()),
      has_notes: Boolean(state.notas.trim()),
    });
    setError(null);
    setSubmitted(true);
    setStep(4);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleAddon = (addonId: string) => {
    const addon = addons.find((item) => item.id === addonId);
    const selected = !state.addons.includes(addonId);

    setState((current) => ({
      ...current,
      addons: current.addons.includes(addonId) ? current.addons.filter((id) => id !== addonId) : [...current.addons, addonId],
    }));
    trackEvent("quote_addon_toggle", {
      addon_id: addonId,
      addon_name: addon?.value,
      selected,
    });
  };

  useEffect(() => {
    if (submitted || lastTrackedStep.current === step) return;
    lastTrackedStep.current = step;
    trackEvent("quote_step_view", {
      step_number: step,
      step_name: steps[step - 1],
      event_type: state.tipo || undefined,
      guest_count: state.guests,
      duration: state.duracion,
      estimated_total: total,
    });
  }, [step, submitted, state.tipo, state.guests, state.duracion, total]);

  return (
    <main className="prototype-route cotizar-page-react">
      <HeroCotizar />
      <form onSubmit={submitForm}>
        <div className="cotizar-main">
          <div className="form-column">
            <Progress currentStep={submitted ? 5 : step} />
            {!submitted ? (
              <>
                <StepOne active={step === 1} selected={state.tipo} onSelect={(value) => setField("tipo", value)} error={error} />
                <StepTwo active={step === 2} state={state} setField={setField} error={error} />
                <StepThree active={step === 3} selectedAddons={state.addons} notes={state.notas} setField={setField} onToggle={toggleAddon} />
                <StepFour active={step === 4} state={state} setField={setField} error={error} />
                {error ? <div id="cotizar-form-error" className="field-error show" role="alert" aria-live="polite">{error.message}</div> : null}
                <StepNavigation step={step} onPrev={() => goToStep(step - 1)} onNext={nextStep} />
              </>
            ) : (
              <SuccessPanel />
            )}
          </div>
          <SummaryCard typeLabel={selectedType?.value ?? ""} state={state} selectedAddons={selectedAddons} total={total} />
        </div>
      </form>
    </main>
  );
}

function HeroCotizar() {
  return (
    <section className="hero-cotizar">
      <div className="hero-cotizar-bg"><img src="/assets/photo-cta-dark.jpg" alt="" /></div>
      <div className="hero-cotizar-glow" />
      <div className="arch-bg">COTIZAR</div>
      <div className="hero-cotizar-content">
        <div className="txt-reveal" style={{ marginBottom: 14 }}><div className="overline overline-light">Tu propuesta personalizada</div></div>
        <div className="txt-reveal" data-d="1">
          <div className="hero-title-display" style={{ color: "var(--crema)" }}>Cuéntanos sobre</div>
          <div className="hero-title-italic" style={{ color: "var(--terracota)", marginTop: 4 }}>tu celebración.</div>
        </div>
        <p className="txt-reveal" data-d="2" style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.85rem", fontWeight: 300, lineHeight: 1.85, color: "rgba(255,253,248,0.5)", maxWidth: 440, marginTop: 16 }}>
          Responde 4 preguntas y recibe una propuesta personalizada en menos de 24 horas.
        </p>
      </div>
    </section>
  );
}

function Progress({ currentStep }: { currentStep: number }) {
  return (
    <div className="progress-wrap">
      <div className="progress-steps">
        {steps.map((_, index) => {
          const number = index + 1;
          return (
            <div key={number} className={`progress-step${currentStep === number ? " active" : ""}${currentStep > number ? " done" : ""}`} aria-current={currentStep === number ? "step" : undefined}>
              <div className="step-dot">{number}</div>
              {number < 4 ? <div className="step-line" /> : null}
            </div>
          );
        })}
      </div>
      <div className="progress-labels">
        {steps.map((label, index) => {
          const number = index + 1;
          return <div key={label} className={`step-label${currentStep === number ? " active" : ""}${currentStep > number ? " done" : ""}`}>{label}</div>;
        })}
      </div>
    </div>
  );
}

function StepOne({ active, selected, onSelect, error }: { active: boolean; selected: EventTypeId | ""; onSelect: (value: EventTypeId) => void; error: FormError | null }) {
  const hasError = error?.fieldId === "tipo-evento-group";

  return (
    <div className={`step-panel${active ? " active" : ""}`} id="step-1" aria-hidden={!active}>
      <StepTitle step={1} title="¿Qué tipo de" sub="evento tienes?" />
      <fieldset className="tipo-grid" id="tipo-evento-group" aria-invalid={hasError || undefined} aria-describedby={hasError ? "cotizar-form-error" : undefined}>
        <legend className="sr-only">Tipo de evento</legend>
        {eventTypes.map((type) => (
          <label key={type.id} className={`tipo-card${selected === type.id ? " selected" : ""}`}>
            <input type="radio" name="tipo" value={type.value} checked={selected === type.id} onChange={() => onSelect(type.id)} />
            <div className="tipo-check"><CheckSmallIcon /></div>
            <div className="tipo-icon"><CotizarIcon name={type.icon} /></div>
            <div className="tipo-name">{type.name}</div>
            <div className="tipo-desc">{type.desc}</div>
          </label>
        ))}
      </fieldset>
    </div>
  );
}

function StepTwo({ active, state, setField, error }: { active: boolean; state: FormState; setField: <K extends keyof FormState>(field: K, value: FormState[K]) => void; error: FormError | null }) {
  const isBusy = Boolean(state.fecha && busyDates.includes(state.fecha));
  const suggestions = isBusy ? [-7, -14, 7, 14].map((offset) => addDays(state.fecha, offset)).filter((date) => !busyDates.includes(date) && date >= todayIso()) : [];
  const hasDateError = error?.fieldId === "fecha-input";

  return (
    <div className={`step-panel${active ? " active" : ""}`} id="step-2" aria-hidden={!active}>
      <StepTitle step={2} title="Fecha e" sub="invitados." />
      <div className="field-group">
        <label className="field-label" htmlFor="fecha-input">Fecha tentativa</label>
        <input className="field-input" type="date" id="fecha-input" min={todayIso()} value={state.fecha} onChange={(event) => setField("fecha", event.target.value)} aria-invalid={hasDateError || undefined} aria-describedby={hasDateError ? "cotizar-form-error" : undefined} />
        {state.fecha && !isBusy ? <div className="availability-badge ok"><CheckLineIcon />Disponible para revisar contigo.</div> : null}
        {isBusy ? <div className="availability-badge busy"><InfoLineIcon />Ya está reservada. Puedes elegir una fecha cercana:</div> : null}
        {suggestions.length ? (
          <div className="suggestions show">
            {suggestions.map((date) => <button key={date} className="suggestion-chip" type="button" onClick={() => setField("fecha", date)}>{formatDate(date)}</button>)}
          </div>
        ) : null}
      </div>
      <div className="field-group">
        <label className="field-label" htmlFor="guests-input">Invitados estimados</label>
        <div className="counter-row">
          <button className="counter-btn" type="button" aria-label="Reducir invitados" onClick={() => setField("guests", clampGuests(state.guests - 10))}>−</button>
          <input className="counter-val" id="guests-input" type="number" value={state.guests} min="15" max="220" readOnly aria-describedby="guests-help" />
          <button className="counter-btn" type="button" aria-label="Aumentar invitados" onClick={() => setField("guests", clampGuests(state.guests + 10))}>+</button>
        </div>
        <div id="guests-help" style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.72rem", fontWeight: 300, color: "var(--muted)", marginTop: 6 }}>Capacidad de referencia: 15 a 220 personas</div>
      </div>
      <div className="field-group">
        <label className="field-label" htmlFor="duracion-select">Tiempo de uso</label>
        <select className="field-input" id="duracion-select" value={state.duracion} onChange={(event) => setField("duracion", event.target.value as DurationId)}>
          <option value="dia">Un día (10:00 – 20:00 h)</option>
          <option value="finde">Fin de semana completo (vie–dom)</option>
          <option value="personalizado">Personalizado</option>
        </select>
      </div>
    </div>
  );
}

function StepThree({
  active,
  selectedAddons,
  notes,
  setField,
  onToggle,
}: {
  active: boolean;
  selectedAddons: string[];
  notes: string;
  setField: <K extends keyof FormState>(field: K, value: FormState[K]) => void;
  onToggle: (addonId: string) => void;
}) {
  return (
    <div className={`step-panel${active ? " active" : ""}`} id="step-3" aria-hidden={!active}>
      <StepTitle step={3} title="Personaliza" sub="tu experiencia." />
      <p style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.82rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.75, marginBottom: 24 }}>Estos extras son opcionales. Marca solo lo que te interesa y lo incluimos en el estimado.</p>
      <div className="addon-list">
        {addons.map((addon) => (
          <label key={addon.id} className={`addon-item${selectedAddons.includes(addon.id) ? " selected" : ""}`}>
            <input type="checkbox" name="addon" checked={selectedAddons.includes(addon.id)} onChange={() => onToggle(addon.id)} />
            <div className="addon-checkbox"><CheckSmallIcon /></div>
            <div className="addon-icon"><CotizarIcon name={addon.icon} /></div>
            <div className="addon-info">
              <div className="addon-name">{addon.name}</div>
              <div className="addon-sub">{addon.sub}</div>
            </div>
            <div className="addon-price" style={addon.quoteOnly ? { color: "var(--muted)" } : undefined}>{addon.quoteOnly ? "A cotizar" : `+$${addon.price.toLocaleString()}`}</div>
          </label>
        ))}
      </div>
      <div className="field-group addon-notes-field">
        <label className="field-label" htmlFor="inp-addon-notas">¿Necesitas algo más? <span className="optional-label">(opcional)</span></label>
        <textarea className="field-input" id="inp-addon-notas" value={notes} placeholder="Cuéntanos si necesitas algo que no aparece en los add-ons." onChange={(event) => setField("notas", event.target.value)} />
      </div>
    </div>
  );
}

function StepFour({ active, state, setField, error }: { active: boolean; state: FormState; setField: <K extends keyof FormState>(field: K, value: FormState[K]) => void; error: FormError | null }) {
  return (
    <div className={`step-panel${active ? " active" : ""}`} id="step-4" aria-hidden={!active}>
      <StepTitle step={4} title="Casi listo:" sub="¿a dónde te contactamos?" />
      <div className="form-row">
        <Field id="inp-nombre" label="Nombre completo" value={state.nombre} placeholder="Tu nombre" onChange={(value) => setField("nombre", value)} invalid={error?.fieldId === "inp-nombre"} />
        <Field id="inp-telefono" label="WhatsApp o teléfono" type="tel" value={state.tel} placeholder="55 1234 5678" onChange={(value) => setField("tel", value)} invalid={error?.fieldId === "inp-telefono"} />
      </div>
      <div className="form-row full" style={{ marginTop: 16 }}>
        <div className="field-group" style={{ marginBottom: 0 }}>
          <label className="field-label" htmlFor="inp-email">Correo para copia <span className="optional-label">(opcional)</span></label>
          <input className="field-input" id="inp-email" type="email" value={state.email} placeholder="tuemail@ejemplo.com" onChange={(event) => setField("email", event.target.value)} aria-invalid={error?.fieldId === "inp-email" || undefined} aria-describedby={error?.fieldId === "inp-email" ? "cotizar-form-error" : undefined} />
        </div>
      </div>
      <div className="privacy-note">Usaremos tus datos solo para preparar y enviarte esta propuesta.</div>
    </div>
  );
}

function Field({ id, label, value, placeholder, type = "text", onChange, invalid = false }: { id: string; label: string; value: string; placeholder: string; type?: string; onChange: (value: string) => void; invalid?: boolean }) {
  return (
    <div className="field-group" style={{ marginBottom: 0 }}>
      <label className="field-label" htmlFor={id}>{label}</label>
      <input className="field-input" id={id} type={type} value={value} placeholder={placeholder} onChange={(event) => onChange(event.target.value)} aria-invalid={invalid || undefined} aria-describedby={invalid ? "cotizar-form-error" : undefined} />
    </div>
  );
}

function StepTitle({ step, title, sub }: { step: number; title: string; sub: string }) {
  return (
    <>
      <div className="step-heading">Paso {step} de 4</div>
      <div className="step-title">{title}</div>
      <div className="step-sub">{sub}</div>
    </>
  );
}

function StepNavigation({ step, onPrev, onNext }: { step: number; onPrev: () => void; onNext: () => void }) {
  return (
    <div className="step-nav">
      {step > 1 ? <button className="btn-prev" type="button" onClick={onPrev}><ArrowLeftIcon />Atrás</button> : <div />}
      {step < 4 ? <button className="btn-next" type="button" onClick={onNext}>Siguiente<ArrowRightIcon /></button> : <button className="btn-submit" type="submit">Enviar solicitud<SendIcon /></button>}
    </div>
  );
}

function SummaryCard({ typeLabel, state, selectedAddons, total }: { typeLabel: string; state: FormState; selectedAddons: Addon[]; total: number }) {
  return (
    <div className="summary-wrap">
      <div className="summary-card">
        <div className="summary-title">Tu</div>
        <div className="summary-sub">cotización.</div>
        <div className="summary-sep" />
        <SummaryRow label="Tipo de evento" value={typeLabel} />
        <SummaryRow label="Fecha" value={state.fecha ? formatDate(state.fecha) : ""} />
        <SummaryRow label="Invitados" value={`${state.guests} personas`} />
        <SummaryRow label="Duración" value={durationLabels[state.duracion]} />
        <div className="summary-sep" />
        <div style={{ marginBottom: 4 }}>
          <SummaryRow label="Finca (base)" value="$13,000" alwaysFilled />
          {selectedAddons.map((addon) => (
            <div key={addon.id} className="summary-row" style={{ marginBottom: 4 }}>
              <span className="summary-key" style={{ paddingLeft: 8 }}>+ {addon.value}</span>
              <span className="summary-val" style={addon.quoteOnly ? { color: "rgba(255,253,248,0.35)" } : undefined}>{addon.quoteOnly ? "A cotizar" : `+$${addon.price.toLocaleString()}`}</span>
            </div>
          ))}
        </div>
        <div className="summary-total-row">
          <div>
            <div className="summary-total-key">Total estimado</div>
            <div className="summary-total-sub">MXN, por confirmar contigo</div>
          </div>
          <div style={{ textAlign: "right" }}><div className="summary-total-val">${total.toLocaleString()}</div></div>
        </div>
        <div className="trust-badges">
          {["Propuesta hoy mismo", "Promociones especiales", "Confianza y claridad total"].map((item) => (
            <div key={item} className="trust-item"><CheckTinyIcon />{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SummaryRow({ label, value, alwaysFilled = false }: { label: string; value: string; alwaysFilled?: boolean }) {
  const filled = alwaysFilled || Boolean(value);
  return (
    <div className="summary-row">
      <span className="summary-key">{label}</span>
      <span className={`summary-val${filled ? "" : " empty"}`}>{filled ? value : "Pendiente"}</span>
    </div>
  );
}

function SuccessPanel() {
  return (
    <div className="success-panel show">
      <div className="success-icon"><CheckLineIcon /></div>
      <div style={{ fontFamily: "'Against',serif", fontSize: "2.2rem", lineHeight: 0.95, letterSpacing: "-0.02em", color: "var(--verde-dark)", marginBottom: 8 }}>¡Recibimos tu solicitud!</div>
      <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.3rem", fontStyle: "italic", fontWeight: 300, color: "var(--terracota)", marginBottom: 20 }}>Te contactaremos en menos de 24 horas.</div>
      <p style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.86rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8, maxWidth: 420, margin: "0 auto 32px" }}>Revisaremos tu fecha, invitados y extras para enviarte una propuesta clara por WhatsApp y, si lo compartiste, también por correo.</p>
      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        <a href="https://wa.me/5215500000000" target="_blank" rel="noopener" style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--crema)", background: "var(--verde)", border: "none", padding: "13px 24px", borderRadius: 999, cursor: "pointer", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>Escribir por WhatsApp</a>
        <a href="/" style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--terracota)", background: "transparent", border: "1px solid var(--terra-light)", padding: "13px 24px", borderRadius: 999, textDecoration: "none" }}>Volver al inicio</a>
      </div>
    </div>
  );
}

function todayIso() {
  return new Date().toISOString().split("T")[0];
}

function addDays(dateStr: string, n: number) {
  const date = new Date(dateStr);
  date.setDate(date.getDate() + n);
  return date.toISOString().split("T")[0];
}

function formatDate(dateStr: string) {
  const [year, month, day] = dateStr.split("-");
  const months = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  return `${parseInt(day, 10)} ${months[parseInt(month, 10) - 1]} ${year}`;
}

function clampGuests(value: number) {
  return Math.max(15, Math.min(220, value));
}

function CotizarIcon({ name }: { name: string }) {
  if (name === "star") return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>;
  if (name === "briefcase") return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>;
  if (name === "users") return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
  if (name === "home") return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>;
  if (name === "info") return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>;
  if (name === "fire") return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 3z" /></svg>;
  if (name === "film") return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="2.18" /><line x1="7" y1="2" x2="7" y2="22" /><line x1="17" y1="2" x2="17" y2="22" /><line x1="2" y1="12" x2="22" y2="12" /></svg>;
  if (name === "coffee") return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></svg>;
  if (name === "audio") return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14" /></svg>;
  if (name === "bed") return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" /><path d="M2 17h20" /><path d="M6 8v9" /></svg>;
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>;
}

function CheckSmallIcon() { return <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>; }
function CheckLineIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>; }
function InfoLineIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>; }
function CheckTinyIcon() { return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="20 6 9 17 4 12" /></svg>; }
function ArrowRightIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>; }
function ArrowLeftIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>; }
function SendIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>; }
