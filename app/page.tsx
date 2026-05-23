import { HomeContent } from "@/components/HomeContent";
import { loadPrototype } from "@/lib/prototype";

const homeOverrides = `
  .home-page-react .btn-glass,
  .home-page-react .btn-outline,
  .home-page-react .btn-outline-dark,
  .home-page-react .btn-primary,
  .home-page-react .btn-accent,
  .home-page-react .pkg-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  .home-page-react .s5-opt {
    appearance: none;
    width: 100%;
  }

  .home-page-react .proc-dot.active:nth-child(1) .proc-dot-inner { transition-delay: 100ms; }
  .home-page-react .proc-dot.active:nth-child(2) .proc-dot-inner { transition-delay: 1100ms; }
  .home-page-react .proc-dot.active:nth-child(3) .proc-dot-inner { transition-delay: 2100ms; }

  @media (max-width: 760px) {
    .home-page-react [data-sec="cotizador"] > div[style*="grid-template-columns: 1fr 1fr"],
    .home-page-react [data-sec="cta"] .cta-outer {
      grid-template-columns: 1fr !important;
      gap: 36px !important;
    }
  }
`;

export default function HomePage() {
  const payload = loadPrototype("index");

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `${payload.styles}\n\n${homeOverrides}` }} />
      <HomeContent />
    </>
  );
}
