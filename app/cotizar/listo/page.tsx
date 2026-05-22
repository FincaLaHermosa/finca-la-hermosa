import Link from "next/link";

export default function CotizarListoPage() {
  return (
    <main className="standalone">
      <section className="success-panel">
        <h1>Solicitud recibida</h1>
        <p>Prepararemos tu propuesta personalizada y la enviaremos por WhatsApp.</p>
        <Link className="btn btn-primary" href="/">Volver al inicio</Link>
      </section>
    </main>
  );
}
