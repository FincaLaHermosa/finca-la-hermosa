"use client";

type AnalyticsValue = string | number | boolean | null | string[] | number[];

export type AnalyticsParams = Record<string, AnalyticsValue | undefined>;
type QueuedEvent = { event: string; params: AnalyticsParams };

const queuedEventsKey = "flh_queued_analytics_events";

declare global {
  interface Window {
    dataLayer?: Record<string, AnalyticsValue>[];
  }
}

export function trackEvent(event: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...Object.fromEntries(Object.entries(params).filter(([, value]) => value !== undefined)),
  });
}

export function queueEvent(event: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;

  try {
    const current = window.sessionStorage.getItem(queuedEventsKey);
    const queued = current ? (JSON.parse(current) as QueuedEvent[]) : [];
    queued.push({ event, params });
    window.sessionStorage.setItem(queuedEventsKey, JSON.stringify(queued));
  } catch {
    trackEvent(event, params);
  }
}

export function flushQueuedEvents() {
  if (typeof window === "undefined") return;

  try {
    const current = window.sessionStorage.getItem(queuedEventsKey);
    if (!current) return;

    window.sessionStorage.removeItem(queuedEventsKey);
    const queued = JSON.parse(current) as QueuedEvent[];
    queued.forEach((item) => trackEvent(item.event, item.params));
  } catch {
    window.sessionStorage.removeItem(queuedEventsKey);
  }
}
