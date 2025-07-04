// Aquí puedes agregar lógica JS para el dashboard
console.log("Dashboard cargado correctamente.");

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.boxShadow = '0 12px 36px rgba(0,0,0,0.30)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.boxShadow = '';
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Splash screen logic
  const splash = document.getElementById('splash-screen');
  const dashboard = document.getElementById('main-dashboard');
  const startBtn = document.getElementById('start-btn');
  if (startBtn) {
    startBtn.addEventListener('click', function () {
      splash.classList.remove('splash-active');
      splash.classList.add('splash-inactive');
      setTimeout(() => {
        splash.classList.add('hidden');
        dashboard.classList.remove('hidden');
      }, 500);
    });
  }

  // Sidebar selection logic
  const sidebarItems = document.querySelectorAll('.sidebar-item');
  const sections = document.querySelectorAll('.section-main');
  sidebarItems.forEach((item) => {
    item.addEventListener('click', function () {
      sidebarItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      // Mostrar solo la sección correspondiente
      const sectionId = item.getAttribute('data-section');
      sections.forEach(sec => {
        if (sec.id === sectionId) {
          sec.classList.remove('hidden');
        } else {
          sec.classList.add('hidden');
        }
      });
    });
  });

  // Botones de navegación
  document.getElementById('home-btn')?.addEventListener('click', () => {
    // Vuelve a la primera sección
    sidebarItems.forEach(i => i.classList.remove('active'));
    sidebarItems[0].classList.add('active');
    sections.forEach((sec, idx) => {
      if (idx === 0) sec.classList.remove('hidden');
      else sec.classList.add('hidden');
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  document.getElementById('back-btn')?.addEventListener('click', () => {
    window.history.back();
  });
});

function animateCounter(id, target, duration) {
  const el = document.getElementById(id);
  let start = 0;
  const step = Math.ceil(target / (duration / 20));
  function update() {
    start += step;
    if (start >= target) {
      el.textContent = target;
    } else {
      el.textContent = start;
      requestAnimationFrame(update);
    }
  }
  update();
}

let metricsAnimated = false;
function handleMetricsAnimation() {
  const banner = document.getElementById('metrics-banner');
  if (!banner) return;
  const rect = banner.getBoundingClientRect();
  if (!metricsAnimated && rect.top < window.innerHeight && rect.bottom > 0) {
    metricsAnimated = true;
    animateCounter('counter-dash', 20, 1200);
    animateCounter('counter-sol', 5, 1000);
    animateCounter('counter-centers', 3, 800);
    animateCounter('counter-pract', 500, 1800);
  }
}
window.addEventListener('scroll', handleMetricsAnimation);
window.addEventListener('DOMContentLoaded', handleMetricsAnimation);