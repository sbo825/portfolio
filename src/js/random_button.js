// script.js
    function random() {
    const paginas = [
        "./src/pages/linux.html",
        "./src/pages/linux-subpages/apache2.html",
        "./src/pages/ciberseguridad.html",
        "./src/pages/ciberseguridad-subpages/burpsuite.html",
        "./src/pages/ansible.html",
        "./src/pages/ansible-subpages/lamp.html"
];

    const indice = Math.floor(Math.random() * paginas.length);
    window.location.href = paginas[indice];
}