import { registerSW } from 'virtual:pwa-register';
import './style.css';
registerSW({ immediate: true });

  // Boot overlay removal
  setTimeout(() => {
    const boot = document.getElementById('boot');
    if (boot) boot.remove();
  }, 2400);

  // Code tabs
  document.querySelectorAll('.code-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.pane;
      document.querySelectorAll('.code-tab').forEach(t => t.classList.toggle('active', t === tab));
      document.querySelectorAll('.code-body .pane').forEach(p => {
        p.classList.toggle('active', p.id === 'pane-' + target);
      });
    });
  });

  // Install OS tabs
  document.querySelectorAll('.os-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.pane;
      document.querySelectorAll('.os-tab').forEach(t => t.classList.toggle('active', t === tab));
      document.querySelectorAll('.os-pane').forEach(p => {
        p.classList.toggle('active', p.id === 'os-' + target);
      });
    });
  });

  // Live UTC clock in hero
  function tick() {
    const t = new Date().toISOString().slice(11, 19);
    const el = document.querySelector('.hero-meta-top .right span:first-child');
    if (el) el.textContent = t + ' UTC';
  }
  setInterval(tick, 1000);
  tick();

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));


