/**
 * Pantalla de entrada en la portada: imagen centrada + desvanecido (clic/Escape/auto).
 */
(function () {
  var intro = document.getElementById("page-intro");
  if (!intro) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    intro.remove();
    return;
  }

  var done = false;
  var timer;

  function teardown() {
    if (done || !intro.parentNode) return;
    done = true;
    window.clearTimeout(timer);
    document.removeEventListener("keydown", onEscape);
    document.body.classList.remove("intro-active");

    intro.setAttribute("aria-hidden", "true");
    intro.classList.remove("is-visible");
    intro.classList.add("is-exiting");

    var safety = window.setTimeout(function () {
      if (intro.parentNode) intro.remove();
    }, 800);

    intro.addEventListener(
      "transitionend",
      function onEnd(ev) {
        if (ev.target !== intro || ev.propertyName !== "opacity") return;
        window.clearTimeout(safety);
        intro.removeEventListener("transitionend", onEnd);
        intro.remove();
      },
      false
    );
  }

  function onEscape(ev) {
    if (ev.key === "Escape") teardown();
  }

  document.body.classList.add("intro-active");
  intro.setAttribute("aria-hidden", "false");
  document.addEventListener("keydown", onEscape);

  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      intro.classList.add("is-visible");
    });
  });

  timer = window.setTimeout(teardown, 2000);

  intro.addEventListener("click", function () {
    teardown();
  });
})();
