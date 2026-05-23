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

  .home-page-react .quote-choice {
    appearance: none;
    min-height: 104px;
    padding: 18px 16px;
    background: rgba(255,253,248,0.045);
    border: 1px solid rgba(255,253,248,0.12);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
    cursor: pointer;
    text-align: left;
    transition: transform 260ms cubic-bezier(0.22,1,0.36,1), border-color 260ms ease, background 260ms ease;
  }

  .home-page-react .quote-choice:hover {
    transform: translateY(-3px);
    border-color: rgba(232,196,173,0.38);
    background: rgba(192,122,90,0.1);
  }

  .home-page-react .quote-choice.selected {
    border-color: var(--terracota);
    background: rgba(192,122,90,0.16);
  }

  .home-page-react .quote-gateway-icon {
    width: 28px;
    height: 28px;
  }

  .home-page-react .quote-main-cta {
    white-space: nowrap;
    text-decoration: none;
  }

  .home-page-react .quote-video-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
    background: var(--verde-dark);
  }

  .home-page-react .quote-video-media,
  .home-page-react .quote-video-poster {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .home-page-react .quote-video-media {
    z-index: 1;
  }

  .home-page-react .quote-video-poster {
    z-index: 0;
    opacity: 0.9;
    transform: scale(1.04);
  }

  .home-page-react .quote-video-wash {
    position: absolute;
    inset: 0;
    z-index: 2;
    background:
      linear-gradient(90deg, rgba(16,27,26,0.88) 0%, rgba(30,50,50,0.5) 42%, rgba(30,50,50,0.12) 100%),
      linear-gradient(0deg, rgba(16,27,26,0.64) 0%, rgba(16,27,26,0.08) 58%, rgba(16,27,26,0.42) 100%);
  }

  .home-page-react .quote-video-section .overline::before {
    background: rgba(232,196,173,0.58);
  }

  .home-page-react .proc-dot.active:nth-child(1) .proc-dot-inner { transition-delay: 100ms; }
  .home-page-react .proc-dot.active:nth-child(2) .proc-dot-inner { transition-delay: 1100ms; }
  .home-page-react .proc-dot.active:nth-child(3) .proc-dot-inner { transition-delay: 2100ms; }

  @media (max-width: 760px) {
    .home-page-react [data-sec="cotizador"] > div[style*="grid-template-columns"],
    .home-page-react [data-sec="cta"] .cta-outer {
      grid-template-columns: 1fr !important;
      gap: 36px !important;
    }

    .home-page-react .quote-gateway {
      min-height: auto !important;
      padding: 96px 0 76px;
    }

    .home-page-react .quote-video-inner {
      align-items: start !important;
    }

    .home-page-react .quote-video-wash {
      background:
        linear-gradient(180deg, rgba(16,27,26,0.66) 0%, rgba(30,50,50,0.94) 42%, rgba(30,50,50,0.98) 100%),
        linear-gradient(90deg, rgba(16,27,26,0.74), rgba(16,27,26,0.18));
    }

    .home-page-react .quote-gateway-panel {
      padding: 28px 22px !important;
    }

    .home-page-react .quote-gateway #q-grid {
      grid-template-columns: 1fr 1fr !important;
    }

    .home-page-react .quote-gateway-panel > div:last-child {
      grid-template-columns: 1fr !important;
    }

    .home-page-react .quote-main-cta {
      width: 100%;
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
