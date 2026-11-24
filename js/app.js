(() => {
  const body = document.body;
  const sidebar = document.getElementById('sidebar');
  const menuBtn = document.getElementById('menuBtn');
  const themeBtn = document.getElementById('themeBtn');
  const searchBtn = document.getElementById('searchBtn');
  const overlay = document.getElementById('searchOverlay');
  const closeSearch = document.getElementById('closeSearch');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  // Tema
  const savedTheme = localStorage.getItem('ed-theme');
  if (savedTheme === 'light') body.classList.add('light');
  themeBtn?.addEventListener('click', () => {
    body.classList.toggle('light');
    localStorage.setItem('ed-theme', body.classList.contains('light') ? 'light' : 'dark');
  });

  // Menú mòbil
  menuBtn?.addEventListener('click', () => {
    const isOpen = sidebar?.classList.toggle('open') ?? false;
    menuBtn.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) {
      const activeLink = sidebar?.querySelector('.nav-link.active');
      activeLink?.scrollIntoView({ block: 'nearest' });
    }
  });
  document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
      sidebar?.classList.remove('open');
      menuBtn?.setAttribute('aria-expanded', 'false');
    });
  });

  // Cerca local de la pàgina
  const searchable = [...document.querySelectorAll('main h2, main h3, main p, main td, main li')]
    .filter(el => el.textContent.trim().length > 15);

  function openSearch() {
    if (!overlay) return;
    overlay.hidden = false;
    setTimeout(() => searchInput?.focus(), 50);
    renderResults('');
  }
  function closeSearchPanel() {
    if (overlay) overlay.hidden = true;
  }
  searchBtn?.addEventListener('click', openSearch);
  closeSearch?.addEventListener('click', closeSearchPanel);
  overlay?.addEventListener('click', e => { if (e.target === overlay) closeSearchPanel(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSearchPanel();
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault(); openSearch();
    }
  });

  function renderResults(query) {
    if (!searchResults) return;
    const q = query.trim().toLowerCase();
    const matches = q ? searchable.filter(el => el.textContent.toLowerCase().includes(q)).slice(0, 10) : [];
    if (!q) {
      searchResults.innerHTML = '<div class="search-results-empty">Escriu un concepte per cercar dins la teoria.</div>';
      return;
    }
    if (!matches.length) {
      searchResults.innerHTML = '<div class="search-results-empty">No s’han trobat coincidències en aquesta pàgina.</div>';
      return;
    }
    searchResults.innerHTML = matches.map((el, i) => {
      const title = el.tagName === 'P' ? (el.closest('.topic')?.querySelector('h2')?.textContent || 'Teoria') : el.textContent.trim();
      const snippet = el.textContent.trim().slice(0, 150);
      return `<a href="#${el.closest('.topic')?.id || ''}" data-result="${i}"><strong>${escapeHtml(title)}</strong><small>${escapeHtml(snippet)}</small></a>`;
    }).join('');
    searchResults.querySelectorAll('a').forEach(a => a.addEventListener('click', closeSearchPanel));
  }
  searchInput?.addEventListener('input', e => renderResults(e.target.value));

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  }

  // Mida del text
  const fontDown = document.getElementById('fontDown');
  const fontUp = document.getElementById('fontUp');
  let textScale = Number(localStorage.getItem('ed-text-scale') || '1');

  function applyTextScale() {
    textScale = Math.min(1.15, Math.max(0.9, textScale));
    document.documentElement.style.setProperty('--text-scale', textScale);
    localStorage.setItem('ed-text-scale', String(textScale));
  }
  fontDown?.addEventListener('click', () => { textScale -= 0.05; applyTextScale(); });
  fontUp?.addEventListener('click', () => { textScale += 0.05; applyTextScale(); });
  applyTextScale();

  // Simulació compilació
  const demoButton = document.getElementById('compileDemo');
  const demoBar = document.getElementById('demoBar');
  const demoLabel = document.getElementById('demoLabel');
  const demoSteps = ['Codi font', 'Compilador', 'Codi objecte', 'Enllaçador + biblioteques', 'Codi executable'];
  demoButton?.addEventListener('click', () => {
    demoButton.disabled = true;
    let step = 0;
    demoBar.style.width = '0%';
    const timer = setInterval(() => {
      step++;
      demoBar.style.width = `${(step / demoSteps.length) * 100}%`;
      demoLabel.textContent = step < demoSteps.length ? `Pas ${step}: ${demoSteps[step - 1]}` : '✓ Procés complet: executable preparat';
      if (step >= demoSteps.length) {
        clearInterval(timer);
        setTimeout(() => { demoButton.disabled = false; }, 500);
      }
    }, 650);
  });

  // Blocs desplegables
  document.querySelectorAll('.expand-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const box = btn.closest('.expand');
      const isOpen = box.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen);
    });
  });

  // Estat del repàs
  const checks = [...document.querySelectorAll('.checklist input')];
  checks.forEach((check, i) => {
    const key = `ed-ra1-check-${i}`;
    check.checked = localStorage.getItem(key) === '1';
    check.addEventListener('change', () => localStorage.setItem(key, check.checked ? '1' : '0'));
  });
})();
