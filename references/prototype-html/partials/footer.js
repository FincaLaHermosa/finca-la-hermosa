fetch('partials/footer.html')
  .then(r => r.text())
  .then(html => {
    const el = document.getElementById('footer-partial');
    if (el) el.outerHTML = html;
  });
