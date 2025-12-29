document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     IMAGE MODAL (ALL PROJECT IMAGES)
     =============================== */

  const modal = document.getElementById("imageModal");
  const modalImg = modal?.querySelector(".modal-img");
  const closeImgBtn = modal?.querySelector(".close");

  const clickableImages = document.querySelectorAll(".featured-image img");

  clickableImages.forEach((img) => {
    img.addEventListener("click", () => {
      if (!modal || !modalImg) return;

      modal.classList.add("active");
      modalImg.src = img.src;
      document.body.style.overflow = "hidden";
    });
  });

  closeImgBtn?.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  });

  modal?.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });


  /* ===============================
     CONTACT MODAL
     =============================== */

  const contactBtn = document.getElementById("contactBtn");
  const contactModal = document.getElementById("contactModal");
  const contactClose = document.querySelector(".contact-close");

  contactBtn?.addEventListener("click", () => {
    contactModal.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  contactClose?.addEventListener("click", () => {
    contactModal.classList.remove("active");
    document.body.style.overflow = "";
  });

  contactModal?.addEventListener("click", (e) => {
    if (e.target === contactModal) {
      contactModal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });


  /* ===============================
     SCROLL REVEAL
     =============================== */

  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((el) => observer.observe(el));

});









