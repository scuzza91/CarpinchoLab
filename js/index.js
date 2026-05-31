/**
 * Portada: muestra u oculta un mensaje de bienvenida al pulsar el botón.
 */
(function () {
  var btn = document.getElementById("btn-welcome");
  var panel = document.getElementById("welcome-message");
  if (!btn || !panel) return;

  var visible = false;
  btn.addEventListener("click", function () {
    visible = !visible;
    if (visible) {
      panel.hidden = false;
      btn.textContent = "Ocultar mensaje del equipo";
    } else {
      panel.hidden = true;
      btn.textContent = "Ver mensaje de bienvenida";
    }
  });
})();
