import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  italic: string;
  body?: string;
  image?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export function PageHero({ eyebrow, title, italic, body, image = "/assets/hero-wedding.jpg", ctaHref, ctaLabel }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="hero-media" style={{ backgroundImage: `url(${image})` }} />
      <div className="hero-shade" />
      <div className="hero-content">
        <div className="overline overline-light">{eyebrow}</div>
        <h1>
          <span>{title}</span>
          <em>{italic}</em>
        </h1>
        {body ? <p>{body}</p> : null}
        {ctaHref && ctaLabel ? (
          <Link className="btn btn-accent" href={ctaHref}>
            {ctaLabel}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
