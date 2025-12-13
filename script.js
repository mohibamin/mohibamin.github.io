// Fade-in animation on page load
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".featured-card, .project-card"
  );

  elements.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(25px)";

    setTimeout(() => {
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, index * 120);
  });
});

