document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     IMAGE MODAL (MULTIPLE IMAGES)
     =============================== */

  const modal = document.getElementById("imageModal");
  const modalImg = document.querySelector(".modal-img");
  const closeBtn = document.querySelector(".close");

  // Select ALL images that should open modal
  const clickableImages = document.querySelectorAll(".featured-image img");

  if (modal && modalImg && closeBtn) {
    clickableImages.forEach((img) => {
      img.addEventListener("click", () => {
        modal.classList.add("active");
        modalImg.src = img.src;
        document.body.style.overflow = "hidden";
      });
    });

    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }

  /* ===============================
     SCROLL REVEAL
     =============================== */

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

  /* ===============================
     CONTACT MODAL
     =============================== */

  const contactBtn = document.getElementById("contactBtn");
  const contactModal = document.getElementById("contactModal");
  const contactClose = document.querySelector(".contact-close");

  if (contactBtn && contactModal && contactClose) {
    contactBtn.addEventListener("click", () => {
      contactModal.classList.add("active");
      document.body.style.overflow = "hidden";
    });

    contactClose.addEventListener("click", () => {
      contactModal.classList.remove("active");
      document.body.style.overflow = "";
    });

    contactModal.addEventListener("click", (e) => {
      if (e.target === contactModal) {
        contactModal.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }

});









