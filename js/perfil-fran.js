/**
 * Tarjeta Fran: expande u oculta el bloque de hobbies extra.
 */
(function () {
  var btn = document.getElementById("toggle-hobbies");
  var panel = document.getElementById("extra-hobbies");
  if (!btn || !panel) return;

  btn.addEventListener("click", function () {
    var hidden = panel.hasAttribute("hidden");
    if (hidden) {
      panel.removeAttribute("hidden");
      btn.textContent = "Ocultar hobbies extra";
    } else {
      panel.setAttribute("hidden", "");
      btn.textContent = "Mostrar hobbies extra";
    }
  });
})();
