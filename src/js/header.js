document.addEventListener("DOMContentLoaded", () => {
  // --- Elementos del DOM ---
  const featuresBtn = document.querySelector('nav a.inline-flex.items-center.gap-1');
  const dropdownMenu = document.querySelector('.mx-auto.-mt-4.w-full.max-w-screen-sm');

  if (!featuresBtn || !dropdownMenu) return;

  // Ocultamos el menú al inicio si no está oculto
  if (!dropdownMenu.classList.contains("hidden")) {
    dropdownMenu.classList.add("hidden");
  }

  // --- Abrir/cerrar el dropdown ---
  featuresBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropdownMenu.classList.toggle("hidden");
  });

  // --- Cerrar al hacer click fuera ---
  document.addEventListener("click", (e) => {
    if (!dropdownMenu.contains(e.target) && !featuresBtn.contains(e.target)) {
      dropdownMenu.classList.add("hidden");
    }
  });
});
