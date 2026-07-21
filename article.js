function formatDate(value) {
  return new Date(value).toLocaleDateString('pt-PT', { day: 'numeric', month: 'short', year: 'numeric' });
}

function truncate(text, length = 75) {
  return text.length > length ? text.substring(0, length - 1) + '…' : text;
}

function articleUrl(article) {
  return `article.html?id=${article.id}`;
}

function getArticleById(id) {
  return articles.find((article) => String(article.id) === String(id));
}

function copyCurrentUrl() {
  const pageUrl = window.location.href;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(pageUrl).catch(() => {});
  }
}

function renderArticle() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const article = getArticleById(id);

  if (!article) {
    document.getElementById('article-title').textContent = 'Artigo não encontrado';
    document.getElementById('article-content').innerHTML = '<p>Escolhe um artigo válido na página inicial.</p>';
    document.getElementById('breadcrumb-title').textContent = 'Artigo não encontrado';
    return;
  }

  document.title = `${article.title} | Futuro Global`;
  document.getElementById('breadcrumb-title').textContent = article.title;
  document.getElementById('breadcrumb-category').textContent = article.category;
  document.getElementById('article-title').textContent = article.title;
  document.getElementById('article-category-tag').textContent = article.category;

  const imageWrap = document.getElementById('article-image-wrap');
  const image = document.getElementById('article-image');
  if (article.image) {
    image.src = article.image;
    image.alt = article.title;
    imageWrap.hidden = false;
  } else {
    imageWrap.hidden = true;
  }

  const paragraphs = article.content.split(/\n+/).filter(Boolean);
  document.getElementById('article-content').innerHTML = paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('');

  document.getElementById('share-facebook').addEventListener('click', copyCurrentUrl);
  document.getElementById('share-x').addEventListener('click', copyCurrentUrl);
}

function renderFooterPopular() {
  const container = document.getElementById('footer-popular-posts');
  if (!container) return;

  const others = articles.slice(0, 3).map((article) => `
    <a href="${articleUrl(article)}" class="popular-post-item">
      <img src="${article.image}" alt="${article.title}" loading="lazy">
      <div>
        <p class="popular-post-title">${truncate(article.title, 70)}</p>
        <p class="popular-post-date">${formatDate(article.date)}</p>
      </div>
    </a>
  `).join('');

  container.innerHTML = others;
}

function initArticlePage() {
  renderArticle();
  renderFooterPopular();
}

document.addEventListener('DOMContentLoaded', initArticlePage);
