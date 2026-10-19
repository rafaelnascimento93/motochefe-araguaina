/* Único local para atualizar o convite do WhatsApp. */
const GROUP_URL = 'https://chat.whatsapp.com/FxE5dtlyKcA3yN6Y9Hyt7Y?s=sh&p=a&mlu=4&ilr=4';

(() => {
  let validGroup = false;
  try {
    const url = new URL(GROUP_URL);
    validGroup = url.protocol === 'https:' && url.hostname === 'chat.whatsapp.com' && url.pathname.length > 1;
  } catch (_) { /* Marcador pendente: manter navegação interna segura. */ }
  const status = document.querySelector('#grupo-status');
  document.querySelectorAll('[data-group]').forEach(link => {
    if (validGroup) {
      link.href = GROUP_URL;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    } else {
      link.addEventListener('click', event => {
        event.preventDefault();
        status.classList.add('attention');
        status.focus({ preventScroll: true });
        status.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'center' });
      });
    }
  });
  if (validGroup) status.hidden = true;
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('waiting');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(section => {
      observer.observe(section);
      section.classList.add('waiting');
    });
    // Falha ou ausência de eventos nunca mantém o conteúdo oculto indefinidamente.
    setTimeout(() => document.querySelectorAll('.waiting').forEach(section => section.classList.remove('waiting')), 6000);
  }
})();
