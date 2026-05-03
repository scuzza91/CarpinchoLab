/**
 * Menú equipo: muestra/oculta enlaces a perfiles desde el encabezado.
 * Usado en todas las páginas para cumplir navegación sin botón Atrás.
 */
(function () {
  var btn = document.getElementById("nav-team-toggle");
  var nav = document.querySelector(".site-header .nav-inner");
  if (!btn || !nav) return;

  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    var open = nav.classList.toggle("dropdown-open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });

  document.addEventListener("click", function (e) {
    if (
      nav.classList.contains("dropdown-open") &&
      !nav.contains(e.target)
    ) {
      nav.classList.remove("dropdown-open");
      btn.setAttribute("aria-expanded", "false");
    }
  });
})();
