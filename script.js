document.addEventListener("DOMContentLoaded", () => {

  /* ================= IMAGE MODAL ================= */
  const modal = document.getElementById("imageModal");
  const modalImg = document.querySelector(".modal-img");
  const closeBtn = document.querySelector(".close");
  const images = document.querySelectorAll(".featured-image img");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
      document.body.style.overflow = "hidden";
    });
  });

  closeBtn?.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "";
  });

  modal?.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }
  });

  /* ================= SCROLL REVEAL ================= */
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((el) => observer.observe(el));

  /* ================= CONTACT MODAL ================= */
  const contactBtn = document.getElementById("openContact");
  const contactModal = document.getElementById("contactModal");
  const closeContact = document.querySelector(".close-contact");

  contactBtn?.addEventListener("click", () => {
    contactModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  });

  closeContact?.addEventListener("click", () => {
    contactModal.style.display = "none";
    document.body.style.overflow = "";
  });

  contactModal?.addEventListener("click", (e) => {
    if (e.target === contactModal) {
      contactModal.style.display = "none";
      document.body.style.overflow = "";
    }
  });

});

/* ================= CURSOR PARTICLES ================= */
const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

if (!isTouchDevice) {
  const canvas = document.createElement("canvas");
  canvas.style.position = "fixed";
  canvas.style.top = 0;
  canvas.style.left = 0;
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = 999;
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  document.addEventListener("mousemove", (e) => {
    particles.push({
      x: e.clientX,
      y: e.clientY,
      alpha: 1,
      size: Math.random() * 2 + 1,
    });
  });

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
      p.alpha -= 0.02;
      p.y -= 0.2;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 234, 255, ${p.alpha})`;
      ctx.fill();
    });

    particles = particles.filter((p) => p.alpha > 0);
    requestAnimationFrame(animate);
  }

  animate();
}









