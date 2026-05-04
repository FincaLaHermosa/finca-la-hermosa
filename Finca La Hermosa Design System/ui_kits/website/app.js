// app.js — Router + Animation Engine

/* ── Scroll state ─────────────────────────────────────────── */
var _currentIdx = 0;
var _animating = false;

function resetScrollIdx() { _currentIdx = 0; _animating = false; }

function easeInOutQuart(t) {
  return t < 0.5 ? 8*t*t*t*t : 1-Math.pow(-2*t+2,4)/2;
}

function smoothScrollTo(container, targetY, duration) {
  var startY = container.scrollTop;
  var diff = targetY - startY;
  if (Math.abs(diff) < 2) { _animating = false; return; }
  var startTime = null;
  _animating = true;
  function step(now) {
    if (!startTime) startTime = now;
    var p = Math.min((now - startTime) / duration, 1);
    container.scrollTop = startY + diff * easeInOutQuart(p);
    if (p < 1) { requestAnimationFrame(step); }
    else { container.scrollTop = targetY; _animating = false; }
  }
  requestAnimationFrame(step);
}

function initSmoothScroll(container) {
  var lastWheel = 0;

  // Intercept wheel — prevent native scroll, trigger custom animation
  container.addEventListener('wheel', function(e) {
    e.preventDefault();
    var now = Date.now();
    if (_animating || now - lastWheel < 1200) return;
    lastWheel = now;

    var sections = container.querySelectorAll('.snap-section, #site-footer');
    var total = sections.length;
    var direction = e.deltaY > 0 ? 1 : -1;
    var targetIdx = Math.max(0, Math.min(_currentIdx + direction, total - 1));
    if (targetIdx === _currentIdx) return;
    _currentIdx = targetIdx;

    // Always animate from exact current section boundary
    var startY = _currentIdx === targetIdx ? container.scrollTop : (_currentIdx - direction) * container.clientHeight;
    container.scrollTop = (_currentIdx - direction) * container.clientHeight;
    smoothScrollTo(container, targetIdx * container.clientHeight, 1100);
  }, { passive: false });
}

/* ── Animation Engine ─────────────────────────────────────── */
function initAnimations(container) {
  var sections = container.querySelectorAll('.snap-section');
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
        entry.target.querySelectorAll('.txt-reveal').forEach(function(el) { el.classList.add('in'); });
        entry.target.querySelectorAll('.img-reveal').forEach(function(el) { el.classList.add('in'); });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(function(s) { observer.observe(s); });
}

/* ── Nav scroll effect ────────────────────────────────────── */
function initNav(container) {
  var navInner = document.querySelector('.nav-inner');
  if (!navInner) return;
  container.addEventListener('scroll', function() {
    navInner.classList.toggle('scrolled', container.scrollTop > 60);
  });
}

/* ── Router ───────────────────────────────────────────────── */
var currentPage = 'inicio';

function navigate(page, pushState) {
  if (pushState === undefined) pushState = true;
  currentPage = page;
  if (pushState) history.pushState({ page: page }, '', '#' + page);

  document.querySelectorAll('.nav-links button').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.page === page);
  });

  document.getElementById('app').innerHTML = getPage(page);

  var sc = document.getElementById('scroll-container');
  sc.scrollTop = 0;
  resetScrollIdx();

  setTimeout(function() { initAnimations(sc); }, 80);
}

/* ── FAQ ──────────────────────────────────────────────────── */
function toggleFaq(el) {
  var item = el.closest('.faq-item');
  item.classList.toggle('open');
  el.querySelector('.faq-icon').textContent = item.classList.contains('open') ? '−' : '+';
}

/* ── Tabs ─────────────────────────────────────────────────── */
function switchTab(idx) {
  document.querySelectorAll('.tab-btn').forEach(function(b,i) { b.classList.toggle('active', i===idx); });
  document.querySelectorAll('.tab-panel').forEach(function(p,i) { p.style.display = i===idx ? 'grid' : 'none'; });
}

/* ── Init ─────────────────────────────────────────────────── */
window.addEventListener('DOMContentLoaded', function() {
  var sc = document.getElementById('scroll-container');
  initSmoothScroll(sc);
  initNav(sc);
  navigate('inicio', false);
});

window.addEventListener('popstate', function(e) {
  if (e.state && e.state.page) navigate(e.state.page, false);
});
