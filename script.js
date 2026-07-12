// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }

  // Team filter (only present on team.html)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.person-card');
  if (filterBtns.length && cards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const dept = btn.dataset.filter;
        cards.forEach(card => {
          const match = dept === 'all' || card.dataset.dept === dept;
          card.style.display = match ? '' : 'none';
        });
      });
    });
  }

  // Simple contact form UX (no backend — placeholder)
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Message sent';
      btn.disabled = true;
      setTimeout(() => { btn.textContent = original; btn.disabled = false; form.reset(); }, 2400);
    });
  }
});
