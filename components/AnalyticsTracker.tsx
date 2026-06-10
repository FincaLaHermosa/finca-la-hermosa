"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { flushQueuedEvents, queueEvent, trackEvent } from "@/lib/analytics";

function getSectionName(element: Element | null) {
  const section = element?.closest("section");
  if (!section) return undefined;
  return section.getAttribute("data-sec") || section.id || section.className.toString().split(" ")[0] || undefined;
}

function getContactType(url: URL, label: string) {
  if (url.protocol === "mailto:") return "email";
  if (url.protocol === "tel:") return "phone";
  if (url.hostname.includes("wa.me")) return "whatsapp";
  if (url.hostname.includes("instagram")) return "instagram";
  if (url.hostname.includes("facebook")) return "facebook";
  if (url.hostname.includes("google.com")) return "maps";
  return label || "external";
}

export function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    flushQueuedEvents();
    trackEvent("virtual_page_view", {
      page_path: window.location.pathname,
      page_title: document.title,
    });
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const link = target?.closest("a");
      const button = target?.closest("button");

      if (link) {
        const href = link.getAttribute("href");
        if (!href) return;

        const url = new URL(href, window.location.origin);
        const label = link.textContent?.trim().replace(/\s+/g, " ") || link.getAttribute("aria-label") || "";
        const section = getSectionName(link);

        if (url.hostname.includes("wa.me")) {
          trackEvent("whatsapp_click", {
            source_page: pathname,
            section,
            cta_text: label || "WhatsApp",
            link_url: url.href,
          });
          return;
        }

        if (url.pathname === "/cotizar") {
          const params = {
            source_page: pathname,
            section,
            cta_text: label,
            package_name: link.closest("[data-package-name]")?.getAttribute("data-package-name") || undefined,
            link_url: url.pathname,
          };

          queueEvent("quote_cta_click", params);
          trackEvent("quote_cta_click", {
            ...params,
            queued_for_next_page: true,
          });
          return;
        }

        if (url.origin !== window.location.origin || ["mailto:", "tel:"].includes(url.protocol)) {
          trackEvent("contact_link_click", {
            source_page: pathname,
            section,
            link_type: getContactType(url, label),
            cta_text: label,
            link_url: url.href,
          });
        }

        return;
      }

      if (button?.classList.contains("nav-cta")) {
        const params = {
          source_page: pathname,
          section: "navigation",
          cta_text: button.textContent?.trim() || "Cotizar ahora",
          link_url: "/cotizar",
        };

        queueEvent("quote_cta_click", params);
        trackEvent("quote_cta_click", {
          ...params,
          queued_for_next_page: true,
        });
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);

  return null;
}
