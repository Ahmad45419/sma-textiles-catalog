const menuBtn = document.getElementById('mobileMenuBtn');
const menu = document.getElementById('menu');
menuBtn?.addEventListener('click', () => menu.classList.toggle('open'));

setTimeout(() => document.getElementById('loader')?.classList.add('hide'), 1100);

document.getElementById('year').textContent = new Date().getFullYear();

const categoryGrid = document.getElementById('categoryGrid');
window.categories.forEach((cat) => {
  const article = document.createElement('article');
  article.className = 'card';
  article.innerHTML = `<img src="${cat.image}" alt="${cat.name}"/><div class="card-content"><h3>${cat.name}</h3><p>${cat.desc}</p></div>`;
  categoryGrid.appendChild(article);
});

const filters = ['All', 'Towels', 'Bed Linen', 'Bathrobes', 'Hotel Linen', 'Kitchen Linen', 'Custom'];
const filterButtons = document.getElementById('filterButtons');
let activeFilter = 'All';
let search = '';

filters.forEach((filter) => {
  const btn = document.createElement('button');
  btn.textContent = filter;
  if (filter === activeFilter) btn.classList.add('active');
  btn.addEventListener('click', () => {
    activeFilter = filter;
    [...filterButtons.children].forEach((c) => c.classList.remove('active'));
    btn.classList.add('active');
    renderProducts();
  });
  filterButtons.appendChild(btn);
});

document.getElementById('searchInput').addEventListener('input', (e) => {
  search = e.target.value.toLowerCase();
  renderProducts();
});

function renderProducts() {
  const productGrid = document.getElementById('productGrid');
  productGrid.innerHTML = '';
  window.products
    .filter((p) => activeFilter === 'All' || p.category === activeFilter)
    .filter((p) => Object.values(p).join(' ').toLowerCase().includes(search))
    .forEach((p) => {
      const card = document.createElement('article');
      card.className = 'product';
      card.innerHTML = `
        <span class="badge">${p.category}</span>
        <h3>${p.name}</h3>
        <p><strong>Material:</strong> ${p.material}</p>
        <p><strong>Spec:</strong> ${p.spec}</p>
        <p><strong>Sizes:</strong> ${p.sizes}</p>
        <p><strong>Colors:</strong> ${p.colors}</p>
        <p><strong>Usage:</strong> ${p.usage}</p>
        <p><strong>MOQ:</strong> Available on request</p>
        <button class="btn btn-accent quote-btn" data-name="${p.name}">Request Quote</button>`;
      productGrid.appendChild(card);
    });

  productGrid.querySelectorAll('.quote-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.getElementById('messageField').value = `Hello SMA Textiles, I need a quote for ${btn.dataset.name}.`;
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

renderProducts();

document.getElementById('quoteForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you. Please send your final inquiry on WhatsApp: +92 320 6700026');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => entry.target.classList.toggle('show', entry.isIntersecting));
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

window.addEventListener('scroll', () => {
  const y = window.scrollY * 0.14;
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) heroBg.style.transform = `translateY(${y}px) scale(1.08)`;
});
