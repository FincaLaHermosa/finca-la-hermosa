"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/site";

export function FaqClient() {
  const categories = useMemo(() => Array.from(new Set(faqs.map((item) => item.category))), []);
  const [active, setActive] = useState(categories[0]);
  const [open, setOpen] = useState(0);
  const filtered = faqs.filter((item) => item.category === active);

  return (
    <div className="faq-layout">
      <div className="faq-tabs">
        {categories.map((category) => (
          <button key={category} className={category === active ? "active" : ""} type="button" onClick={() => { setActive(category); setOpen(0); }}>
            {category}
          </button>
        ))}
      </div>
      <div className="faq-list">
        {filtered.map((item, index) => (
          <article className={`faq-item ${open === index ? "open" : ""}`} key={item.q}>
            <button type="button" onClick={() => setOpen(open === index ? -1 : index)}>
              <span>{item.q}</span>
              <ChevronDown size={20} />
            </button>
            <p>{item.a}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
