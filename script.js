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










