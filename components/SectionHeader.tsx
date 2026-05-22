type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  italic?: string;
  body?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeader({ eyebrow, title, italic, body, align = "left", light = false }: SectionHeaderProps) {
  return (
    <div className={`section-header ${align === "center" ? "center" : ""} ${light ? "light" : ""}`}>
      <div className={`overline ${light ? "overline-light" : "overline-dark"}`}>{eyebrow}</div>
      <h2>
        {title}
        {italic ? <em>{italic}</em> : null}
      </h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}
