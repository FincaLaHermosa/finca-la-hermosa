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

  .home-page-react .quote-main-cta {
    white-space: nowrap;
    text-decoration: none;
    width: fit-content;
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
      linear-gradient(90deg, rgba(16,27,26,0.76) 0%, rgba(30,50,50,0.38) 42%, rgba(30,50,50,0.08) 100%),
      linear-gradient(0deg, rgba(16,27,26,0.48) 0%, rgba(16,27,26,0.04) 58%, rgba(16,27,26,0.34) 100%);
  }

  .home-page-react .quote-video-section .overline::before {
    background: rgba(232,196,173,0.58);
  }

  .home-page-react .quote-glass-card {
    width: min(560px, 100%);
    min-height: 520px;
    padding: 56px 48px 46px;
    border: 1px solid rgba(255,253,248,0.2);
    border-radius: 18px;
    background: rgba(25,43,41,0.46);
    backdrop-filter: blur(24px) saturate(1.35);
    -webkit-backdrop-filter: blur(24px) saturate(1.35);
    box-shadow:
      0 34px 96px rgba(0,0,0,0.34),
      inset 0 1px 0 rgba(255,255,255,0.12);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 28px;
  }

  .home-page-react .quote-card-title {
    font-family: 'Against', serif;
    font-size: clamp(2.35rem, 3.3vw, 3.9rem);
    font-weight: 400;
    line-height: 0.9;
    letter-spacing: -0.025em;
    color: #fffdf8;
  }

  .home-page-react .quote-card-subtitle {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.85rem, 2.65vw, 3rem);
    font-style: italic;
    font-weight: 300;
    line-height: 1;
    color: var(--terracota);
    margin-top: 6px;
  }

  .home-page-react .quote-card-copy {
    font-family: 'Jost', sans-serif;
    max-width: 410px;
    font-size: 0.98rem;
    font-weight: 300;
    line-height: 1.9;
    color: rgba(255,253,248,0.72);
  }

  .home-page-react .proc-dot.active:nth-child(1) .proc-dot-inner { transition-delay: 100ms; }
  .home-page-react .proc-dot.active:nth-child(2) .proc-dot-inner { transition-delay: 1100ms; }
  .home-page-react .proc-dot.active:nth-child(3) .proc-dot-inner { transition-delay: 2100ms; }

  @media (min-width: 761px) {
    .home-page-react .home-experiences-heading,
    .home-page-react .home-experiences-tabs {
      transform: translateY(-44px);
    }

    .home-page-react .home-experiences-tabs {
      margin-bottom: 22px;
    }
  }

  @media (max-width: 760px) {
    .home-page-react .snap-section > div[style*="padding: 0 52px"],
    .home-page-react .snap-section > div[style*="padding:0 52px"] {
      padding-left: 22px !important;
      padding-right: 22px !important;
    }

    .home-page-react [data-sec="cotizador"] > div[style*="grid-template-columns"],
    .home-page-react [data-sec="cta"] .cta-outer {
      grid-template-columns: 1fr !important;
      gap: 36px !important;
    }

    .home-page-react .quote-gateway {
      min-height: auto !important;
      padding: 84px 0 64px;
    }

    .home-page-react .quote-video-inner {
      align-items: start !important;
    }

    .home-page-react .quote-video-wash {
      background:
        linear-gradient(180deg, rgba(16,27,26,0.66) 0%, rgba(30,50,50,0.94) 42%, rgba(30,50,50,0.98) 100%),
        linear-gradient(90deg, rgba(16,27,26,0.74), rgba(16,27,26,0.18));
    }

    .home-page-react .quote-glass-card {
      min-height: auto;
      padding: 34px 24px 30px;
      gap: 22px;
    }

    .home-page-react .quote-main-cta {
      width: 100%;
    }

    .home-page-react .process-compact-section {
      min-height: auto !important;
      padding: 72px 0 64px;
    }

    .home-page-react .process-compact-header {
      margin-bottom: 34px !important;
    }

    .home-page-react .process-compact-cta {
      margin-top: 30px !important;
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
