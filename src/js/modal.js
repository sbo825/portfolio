// modal.js
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("middle-center-modal");
    const abrir = document.getElementById("abrir-modal");
    const cerrar = document.getElementById("cerrar-modal");

    abrir.addEventListener("click", () => {
        modal.classList.remove("hidden");
    });

    cerrar.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    // Cerrar al hacer click fuera del modal
    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.add("hidden");
    });
});