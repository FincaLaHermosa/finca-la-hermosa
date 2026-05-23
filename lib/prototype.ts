import fs from "node:fs";
import path from "node:path";

type PrototypeRoute = "index" | "experiencias" | "espacios" | "nosotros" | "faq" | "cotizar";

export type PrototypePayload = {
  html: string;
  scripts: string;
  styles: string;
  title: string;
};

const routeMap: Record<PrototypeRoute, string> = {
  index: "index.html",
  experiencias: "experiencias.html",
  espacios: "espacios.html",
  nosotros: "nosotros.html",
  faq: "faq.html",
  cotizar: "cotizar.html",
};

const htmlRouteMap: Record<string, string> = {
  "index.html": "/",
  "experiencias.html": "/experiencias",
  "espacios.html": "/espacios",
  "nosotros.html": "/nosotros",
  "faq.html": "/faq",
  "cotizar.html": "/cotizar",
};

export function loadPrototype(route: PrototypeRoute): PrototypePayload {
  const root = process.cwd();
  const source = fs.readFileSync(path.join(root, "sitio", routeMap[route]), "utf8");
  const footerCss = fs.readFileSync(path.join(root, "sitio", "partials", "footer.css"), "utf8");
  const responsiveCss = fs.readFileSync(path.join(root, "sitio", "responsive.css"), "utf8");

  const title = source.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() || "Finca La Hermosa";
  const inlineStyles = Array.from(source.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi))
    .map((match) => match[1])
    .join("\n\n");
  const inlineScripts = Array.from(source.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi))
    .map((match) => match[1])
    .join("\n\n");

  const body = source.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] || "";
  const bodyWithoutScripts = body.replace(/<script[\s\S]*?<\/script>/gi, "");
  const htmlWithoutChrome = stripGlobalChrome(bodyWithoutScripts);

  const scripts = normalizeMarkup(inlineScripts);
  const styles = normalizeCss(`${inlineStyles}\n\n${footerCss}\n\n${responsiveCss}`);

  return {
    html: normalizeMarkup(htmlWithoutChrome),
    scripts: wrapPrototypeScripts(scripts),
    styles,
    title,
  };
}

function stripGlobalChrome(input: string) {
  return input
    .replace(/<nav id="site-nav">[\s\S]*?<\/nav>/i, "")
    .replace(/<!-- ══ WA FLOAT[\s\S]*?<\/a>/i, "")
    .replace('<div id="footer-partial"></div>', "");
}

function normalizeMarkup(input: string) {
  let output = input
    .replaceAll("assets/", "/assets/")
    .replaceAll("fonts/", "/fonts/")
    .replaceAll("partials/", "/partials/");

  for (const [from, to] of Object.entries(htmlRouteMap)) {
    output = output.replaceAll(from, to);
  }

  return output;
}

function normalizeCss(input: string) {
  return input
    .replaceAll("url('fonts/", "url('/fonts/")
    .replaceAll('url("fonts/', 'url("/fonts/')
    .replaceAll("url(fonts/", "url(/fonts/")
    .replaceAll("url('assets/", "url('/assets/")
    .replaceAll('url("assets/', 'url("/assets/')
    .replaceAll("url(assets/", "url(/assets/");
}

function wrapPrototypeScripts(script: string) {
  return `
(() => {
  const prototypeReadyCallbacks = [];
  const originalDocumentAddEventListener = document.addEventListener.bind(document);
  const originalWindowAddEventListener = window.addEventListener.bind(window);
  const captureReadyListener = (target, listener) => {
    if (typeof listener === 'function') {
      prototypeReadyCallbacks.push(() => listener.call(target, new Event('DOMContentLoaded')));
      return true;
    }
    if (listener && typeof listener.handleEvent === 'function') {
      prototypeReadyCallbacks.push(() => listener.handleEvent(new Event('DOMContentLoaded')));
      return true;
    }
    return false;
  };

  document.addEventListener = (type, listener, options) => {
    if (type === 'DOMContentLoaded' && captureReadyListener(document, listener)) return;
    originalDocumentAddEventListener(type, listener, options);
  };
  window.addEventListener = (type, listener, options) => {
    if (type === 'DOMContentLoaded' && captureReadyListener(window, listener)) return;
    originalWindowAddEventListener(type, listener, options);
  };

  installPrototypeHandlers();

${script}

  document.addEventListener = originalDocumentAddEventListener;
  window.addEventListener = originalWindowAddEventListener;

  installPrototypeHandlers();

  const exportedHandlers = {
    switchTab: typeof switchTab !== 'undefined' ? switchTab : window.switchTab,
    scrollCarousel: typeof scrollCarousel !== 'undefined' ? scrollCarousel : window.scrollCarousel,
    selectQ: typeof selectQ !== 'undefined' ? selectQ : window.selectQ,
    advanceQ: typeof advanceQ !== 'undefined' ? advanceQ : window.advanceQ,
    filterPkgs: typeof filterPkgs !== 'undefined' ? filterPkgs : window.filterPkgs,
    askPackage: typeof askPackage !== 'undefined' ? askPackage : window.askPackage,
    changeGuests: typeof changeGuests !== 'undefined' ? changeGuests : window.changeGuests,
    nextStep: typeof nextStep !== 'undefined' ? nextStep : window.nextStep,
    prevStep: typeof prevStep !== 'undefined' ? prevStep : window.prevStep,
    submitForm: typeof submitForm !== 'undefined' ? submitForm : window.submitForm,
  };

  Object.entries(exportedHandlers).forEach(([key, value]) => {
    if (typeof value === 'function') window[key] = value;
  });

  prototypeReadyCallbacks.forEach((callback) => callback());

  function installPrototypeHandlers() {
    window.switchTab = (idx, btn) => {
      document.querySelectorAll('.tab2-panel').forEach((panel, i) => {
        panel.classList.toggle('active', i === idx);
      });
      document.querySelectorAll('.tab-btn').forEach((tab) => tab.classList.remove('active'));
      if (btn) btn.classList.add('active');
    };

    document.querySelectorAll('.tab-btn[onclick^="switchTab"]').forEach((btn, idx) => {
      if (btn.dataset.prototypeBound === 'true') return;
      btn.dataset.prototypeBound = 'true';
      btn.removeAttribute('onclick');
      btn.onclick = (event) => {
        event.preventDefault();
        window.switchTab(idx, btn);
      };
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        window.switchTab(idx, btn);
      });
    });

    window.scrollCarousel = (dir) => {
      document.getElementById('s3-carousel')?.scrollBy({ left: dir * 290, behavior: 'smooth' });
    };

    let qSelected = null;
    let qStep = 1;

    window.selectQ = (el) => {
      document.querySelectorAll('.s5-opt').forEach((item) => item.classList.remove('selected'));
      el?.classList.add('selected');
      qSelected = el?.querySelector('.s5-opt-label')?.textContent || null;
    };

    document.querySelectorAll('.s5-opt').forEach((item) => {
      if (item.dataset.prototypeBound === 'true') return;
      item.dataset.prototypeBound = 'true';
      item.removeAttribute('onclick');
      item.addEventListener('click', () => window.selectQ(item));
    });

    window.advanceQ = () => {
      if (!qSelected) {
        const grid = document.getElementById('q-grid');
        if (!grid) return;
        grid.style.transform = 'translateX(-6px)';
        setTimeout(() => { grid.style.transform = 'translateX(6px)'; }, 80);
        setTimeout(() => { grid.style.transform = ''; }, 160);
        return;
      }
      if (qStep < 3) {
        qStep += 1;
        qSelected = null;
        document.querySelectorAll('.s5-opt').forEach((item) => item.classList.remove('selected'));
        for (let i = 1; i <= 3; i += 1) {
          const dot = document.getElementById('q-dot-' + i);
          const line = document.getElementById('q-line-' + i);
          if (!dot) continue;
          if (i < qStep) {
            dot.style.cssText = 'width:30px;height:30px;border-radius:50%;background:rgba(192,122,90,0.3);border:1.5px solid var(--terracota);display:flex;align-items:center;justify-content:center;font-family:Jost,sans-serif;font-size:0.72rem;font-weight:500;color:var(--terracota);';
            if (line) line.style.background = 'rgba(192,122,90,0.5)';
          } else if (i === qStep) {
            dot.style.cssText = 'width:30px;height:30px;border-radius:50%;background:var(--terracota);border:1.5px solid var(--terracota);display:flex;align-items:center;justify-content:center;font-family:Jost,sans-serif;font-size:0.72rem;font-weight:500;color:#fff;';
          } else {
            dot.style.cssText = 'width:30px;height:30px;border-radius:50%;background:transparent;border:1.5px solid rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;font-family:Jost,sans-serif;font-size:0.72rem;font-weight:300;color:rgba(255,253,248,0.4);';
          }
        }
      }
    };

    document.querySelectorAll('[onclick^="advanceQ"]').forEach((btn) => {
      if (btn.dataset.prototypeBound === 'true') return;
      btn.dataset.prototypeBound = 'true';
      btn.removeAttribute('onclick');
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        window.advanceQ();
      });
    });

    window.askPackage = (packageName) => {
      const message = 'Hola, quiero más información sobre el paquete ' + packageName + ' de Finca La Hermosa.';
      window.open('https://wa.me/5215500000000?text=' + encodeURIComponent(message), '_blank', 'noopener');
    };

    window.filterPkgs = (type, btn) => {
      document.querySelectorAll('.tab-btn').forEach((tab) => tab.classList.remove('active'));
      if (btn) btn.classList.add('active');
      let visible = 0;
      document.querySelectorAll('#pkg-grid .pkg-card').forEach((card) => {
        const types = (card.dataset.type || '').split(' ');
        const show = types.includes(type);
        card.classList.toggle('hidden', !show);
        if (show) visible += 1;
      });
      const empty = document.getElementById('pkg-empty');
      if (empty) empty.style.display = visible === 0 ? 'block' : 'none';
      if (window.matchMedia('(max-width: 760px)').matches) {
        document.getElementById('pkg-grid')?.scrollTo({ left: 0, behavior: 'smooth' });
      }
    };

    document.querySelectorAll('.tab-btn[onclick^="filterPkgs"]').forEach((btn) => {
      if (btn.dataset.prototypeBound === 'true') return;
      btn.dataset.prototypeBound = 'true';
      const attr = btn.getAttribute('onclick') || '';
      const type = attr.match(/filterPkgs\\('([^']+)'/)?.[1];
      if (!type) return;
      btn.removeAttribute('onclick');
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        window.filterPkgs(type, btn);
      });
    });

    document.querySelectorAll('[onclick^="askPackage"]').forEach((btn) => {
      if (btn.dataset.prototypeBound === 'true') return;
      btn.dataset.prototypeBound = 'true';
      const attr = btn.getAttribute('onclick') || '';
      const packageName = attr.match(/askPackage\\('([^']+)'/)?.[1];
      if (!packageName) return;
      btn.removeAttribute('onclick');
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        window.askPackage(packageName);
      });
    });

    const busyDates = ['2025-07-05','2025-07-12','2025-07-19','2025-07-26','2025-08-09','2025-08-16','2025-09-06','2025-09-13','2025-12-20','2025-12-27'];
    const formatDate = (dateStr) => {
      if (!dateStr) return '';
      const [year, month, day] = dateStr.split('-');
      const months = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
      return parseInt(day, 10) + ' ' + months[parseInt(month, 10) - 1] + ' ' + year;
    };

    const refreshQuoteSummary = () => {
      const selected = document.querySelector('.tipo-card.selected input');
      const date = document.getElementById('fecha-input')?.value || '';
      const guests = document.getElementById('guests-val')?.value || '50';
      const duration = document.getElementById('duracion-select')?.value || 'dia';
      const addons = Array.from(document.querySelectorAll('.addon-item.selected input')).map((input) => ({
        name: input.value,
        price: parseInt(input.dataset.price || '0', 10) || 0,
      }));
      const setText = (id, text) => {
        const node = document.getElementById(id);
        if (node) node.textContent = text;
      };
      setText('s-tipo', selected?.value || '—');
      setText('s-fecha', date ? formatDate(date) : '—');
      setText('s-guests', guests + ' personas');
      setText('s-duracion', duration === 'finde' ? 'Fin de semana' : 'Un día');
      const addonsList = document.getElementById('addons-list');
      if (addonsList) {
        addonsList.innerHTML = '';
        addons.forEach((addon) => {
          const row = document.createElement('div');
          row.className = 'summary-row';
          row.style.cssText = 'margin-bottom:4px;';
          row.innerHTML = '<span class="summary-key" style="padding-left:8px;">+ ' + addon.name + '</span><span class="summary-val">' + (addon.price > 0 ? '+$' + addon.price.toLocaleString() : 'A cotizar') + '</span>';
          addonsList.appendChild(row);
        });
      }
      const total = 13000 + (duration === 'finde' ? 13000 : 0) + addons.reduce((sum, addon) => sum + addon.price, 0);
      setText('s-total', '$' + total.toLocaleString());
    };

    window.changeGuests = (delta) => {
      const input = document.getElementById('guests-val');
      if (!input) return;
      input.value = String(Math.max(15, Math.min(220, parseInt(input.value || '50', 10) + delta)));
      refreshQuoteSummary();
    };

    document.querySelectorAll('[onclick^="changeGuests"]').forEach((btn) => {
      if (btn.dataset.prototypeBound === 'true') return;
      btn.dataset.prototypeBound = 'true';
      const attr = btn.getAttribute('onclick') || '';
      const delta = Number(attr.match(/changeGuests\\((-?\\d+)\\)/)?.[1] || 0);
      btn.removeAttribute('onclick');
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        window.changeGuests(delta);
      });
    });

    const showErr = (id, msg) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.textContent = msg;
      el.classList.add('show');
      setTimeout(() => el.classList.remove('show'), 4000);
    };

    const goToStep = (step) => {
      document.querySelectorAll('.step-panel').forEach((panel) => panel.classList.remove('active'));
      document.getElementById('step-' + step)?.classList.add('active');
      for (let i = 1; i <= 4; i += 1) {
        const ps = document.getElementById('ps-' + i);
        const sl = document.getElementById('sl-' + i);
        ps?.classList.remove('active', 'done');
        sl?.classList.remove('active', 'done');
        if (i < step) {
          ps?.classList.add('done');
          sl?.classList.add('done');
        }
        if (i === step) {
          ps?.classList.add('active');
          sl?.classList.add('active');
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.nextStep = (from) => {
      refreshQuoteSummary();
      if (from === 1 && !document.querySelector('.tipo-card.selected')) {
        showErr('err-step-1', 'Selecciona el tipo de evento para continuar.');
        return;
      }
      const date = document.getElementById('fecha-input')?.value || '';
      if (from === 2 && !date) {
        showErr('err-step-2', 'Selecciona una fecha tentativa.');
        return;
      }
      if (from === 2 && busyDates.includes(date)) {
        showErr('err-step-2', 'Esa fecha no está disponible. Elige una fecha alternativa.');
        return;
      }
      if (from < 4) goToStep(from + 1);
    };

    document.querySelectorAll('[onclick^="nextStep"]').forEach((btn) => {
      if (btn.dataset.prototypeBound === 'true') return;
      btn.dataset.prototypeBound = 'true';
      const attr = btn.getAttribute('onclick') || '';
      const from = Number(attr.match(/nextStep\\((\\d+)\\)/)?.[1] || 1);
      btn.removeAttribute('onclick');
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        window.nextStep(from);
      });
    });

    window.prevStep = (from) => {
      if (from > 1) goToStep(from - 1);
    };

    document.querySelectorAll('[onclick^="prevStep"]').forEach((btn) => {
      if (btn.dataset.prototypeBound === 'true') return;
      btn.dataset.prototypeBound = 'true';
      const attr = btn.getAttribute('onclick') || '';
      const from = Number(attr.match(/prevStep\\((\\d+)\\)/)?.[1] || 1);
      btn.removeAttribute('onclick');
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        window.prevStep(from);
      });
    });

    window.submitForm = () => {
      const nombre = document.getElementById('inp-nombre')?.value?.trim() || '';
      const email = document.getElementById('inp-email')?.value?.trim() || '';
      const tel = document.getElementById('inp-tel')?.value?.trim() || '';
      if (!nombre) { showErr('err-step-4', 'Por favor ingresa tu nombre.'); return; }
      if (email && !email.includes('@')) { showErr('err-step-4', 'Por favor ingresa un correo válido.'); return; }
      if (!tel) { showErr('err-step-4', 'Por favor ingresa tu número de WhatsApp o teléfono.'); return; }
      document.getElementById('step-4')?.classList.remove('active');
      document.getElementById('success-panel')?.classList.add('show');
      for (let i = 1; i <= 4; i += 1) {
        document.getElementById('ps-' + i)?.classList.remove('active');
        document.getElementById('ps-' + i)?.classList.add('done');
        document.getElementById('sl-' + i)?.classList.add('done');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    document.querySelectorAll('[onclick^="submitForm"]').forEach((btn) => {
      if (btn.dataset.prototypeBound === 'true') return;
      btn.dataset.prototypeBound = 'true';
      btn.removeAttribute('onclick');
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        window.submitForm();
      });
    });

    if (document.documentElement.dataset.prototypeDelegated !== 'true') {
      document.documentElement.dataset.prototypeDelegated = 'true';
      document.addEventListener('click', (event) => {
        const target = event.target;
        if (!(target instanceof Element)) return;

        const tab = target.closest('.tab-btn');
        if (tab) {
          if (document.getElementById('pkg-grid')) {
            const label = tab.textContent?.trim() || '';
            const typeMap = {
              'Eventos Sociales': 'social',
              'Corporativos': 'corporativo',
              'Retiros': 'retiro',
              'Estancia Privada': 'privado',
              'Day Use': 'dia',
            };
            const type = typeMap[label];
            if (type) {
              event.preventDefault();
              window.filterPkgs(type, tab);
              return;
            }
          }

          const tabs = Array.from(document.querySelectorAll('.tab-btn'));
          const idx = tabs.indexOf(tab);
          if (idx >= 0 && document.querySelector('.tab2-panel')) {
            event.preventDefault();
            window.switchTab(idx, tab);
            return;
          }
        }

        const s5Opt = target.closest('.s5-opt');
        if (s5Opt) {
          event.preventDefault();
          window.selectQ(s5Opt);
          return;
        }

        const button = target.closest('button');
        if (!button) return;

        const buttonText = button.textContent?.trim() || '';
        if (document.getElementById('q-grid') && buttonText.startsWith('Siguiente')) {
          event.preventDefault();
          window.advanceQ();
          return;
        }

        if (button.classList.contains('counter-btn')) {
          event.preventDefault();
          window.changeGuests(buttonText.includes('−') || buttonText.includes('-') ? -10 : 10);
          return;
        }

        if (button.classList.contains('btn-next')) {
          event.preventDefault();
          const active = document.querySelector('.step-panel.active')?.id || 'step-1';
          window.nextStep(Number(active.replace('step-', '')) || 1);
          return;
        }

        if (button.classList.contains('btn-prev')) {
          event.preventDefault();
          const active = document.querySelector('.step-panel.active')?.id || 'step-1';
          window.prevStep(Number(active.replace('step-', '')) || 1);
          return;
        }

        if (button.classList.contains('btn-submit')) {
          event.preventDefault();
          window.submitForm();
        }
      }, true);
    }
  }
})();`;
}
