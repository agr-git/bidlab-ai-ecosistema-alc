// ═══════════════════════════════════════════════════
// BID Lab Project Brief — Shared JS
// v2 · Multi-page edition
// ═══════════════════════════════════════════════════

// Highlight current page in subnav based on current URL
(function highlightCurrentPage() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.snb').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('on');
    } else {
      link.classList.remove('on');
    }
  });
})();

// Language toggle (EN coming soon overlay)
function toggleLang(lang) {
  const btnES = document.getElementById('btnES');
  const btnEN = document.getElementById('btnEN');
  const overlay = document.getElementById('enOverlay');
  if (btnES) btnES.classList.toggle('active', lang === 'es');
  if (btnEN) btnEN.classList.toggle('active', lang === 'en');
  if (overlay) overlay.classList.toggle('show', lang === 'en');
}

// Layer accordion (Section 2)
function toggleLayer(header) {
  const card = header.closest('.layer-card');
  const wasOpen = card.classList.contains('open');
  // Close all
  document.querySelectorAll('.layer-card').forEach(c => c.classList.remove('open'));
  // Open if it wasn't
  if (!wasOpen) card.classList.add('open');
}
