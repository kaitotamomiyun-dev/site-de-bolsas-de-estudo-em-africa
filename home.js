function formatDate(value) {
  return new Date(value).toLocaleDateString('pt-PT', { day: 'numeric', month: 'short', year: 'numeric' });
}

function truncate(text, length = 80) {
  return text.length > length ? text.substring(0, length - 1) + '…' : text;
}

function articleUrl(article) {
  return `article.html?id=${article.id}`;
}

function renderTrendingTicker() {
  const container = document.getElementById('trending-ticker');
  if (!container) return;

  const items = articles.slice(0, 4).map((article) => `<a href="${articleUrl(article)}">${article.title}</a>`).join('');
  container.innerHTML = items;
}

function renderHeroGrid() {
  const container = document.getElementById('hero-grid');
  if (!container) return;

  const featured = articles.filter((article) => article.featured).slice(0, 4);
  container.innerHTML = featured.map((article, index) => `
    <article class="mosaic-card${index === 0 ? ' hero-grid-feature' : ''}">
      <img src="${article.image}" alt="${article.title}" loading="lazy">
      <div class="mosaic-overlay"></div>
      <div class="mosaic-content">
        <span class="mosaic-tag">${article.category}</span>
        <h3 class="mosaic-title">${article.title}</h3>
      </div>
      <a href="${articleUrl(article)}" class="card-btn" aria-label="Ler ${article.title}"><span>Ver artigo</span></a>
    </article>
  `).join('');
}

function renderDontMissList(category = '') {
  const container = document.getElementById('dont-miss-list');
  if (!container) return;

  const filtered = articles.filter((article) => !category || article.category === category);

  container.innerHTML = filtered.map((article) => `
    <article class="dont-miss-item">
      <img src="${article.image}" alt="${article.title}" loading="lazy">
      <div class="dont-miss-item-body">
        <span class="dont-miss-item-tag">${article.category}</span>
        <h3 class="dont-miss-item-title">${article.title}</h3>
        <p class="dont-miss-item-date">${formatDate(article.date)}</p>
        <p class="card-desc">${truncate(article.description, 120)}</p>
        <a href="${articleUrl(article)}" class="card-btn"><span>Ler mais</span></a>
      </div>
    </article>
  `).join('');
}

function renderPopularSidebar() {
  const container = document.getElementById('sidebar-popular');
  if (!container) return;

  container.innerHTML = articles.slice(0, 3).map((article) => `
    <a href="${articleUrl(article)}" class="popular-grid-item">
      <img src="${article.image}" alt="${article.title}" loading="lazy">
      <h4 class="popular-grid-item-title">${truncate(article.title, 60)}</h4>
    </a>
  `).join('');
}

function setupTabs() {
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((btn) => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });

      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');
      renderDontMissList(button.dataset.category || '');
    });
  });
}

function initHomePage() {
  renderTrendingTicker();
  renderHeroGrid();
  renderDontMissList();
  renderPopularSidebar();
  setupTabs();
}

document.addEventListener('DOMContentLoaded', initHomePage);
