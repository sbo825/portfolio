// script.js
    function irASubpaginaAleatoria() {
    const paginas = [
        "./src/pages/linux.html",
        "./src/pages/linux-subpages/apache2.html",
        ""
];

    const indice = Math.floor(Math.random() * paginas.length);
    window.location.href = paginas[indice];
}