// Incrementa visitas ao carregar a página
let visitas = localStorage.getItem("visitas") ? parseInt(localStorage.getItem("visitas")) : 0;
visitas++;
localStorage.setItem("visitas", visitas);

function abrirVisitas() {
  window.open("visitas.html", "_blank");
}

// Revela os cards com fade + translateY quando entram no viewport
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    // Sem suporte: mostra tudo de imediato
    reveals.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  reveals.forEach((el) => observer.observe(el));
});
