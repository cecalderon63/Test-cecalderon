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