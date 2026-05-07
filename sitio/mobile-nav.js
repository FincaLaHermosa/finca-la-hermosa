(() => {
  const pill = document.getElementById('nav-pill');
  if (!pill || pill.querySelector('.nav-toggle')) return;

  const toggle = document.createElement('button');
  toggle.className = 'nav-toggle';
  toggle.type = 'button';
  toggle.setAttribute('aria-label', 'Abrir menu');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.innerHTML = '<span></span>';

  const logo = pill.querySelector('.nav-logo');
  if (logo) logo.insertAdjacentElement('afterend', toggle);

  toggle.addEventListener('click', () => {
    const isOpen = pill.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Cerrar menu' : 'Abrir menu');
  });

  pill.querySelectorAll('.nav-links a, .nav-cta').forEach((item) => {
    item.addEventListener('click', () => {
      pill.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menu');
    });
  });
})();
