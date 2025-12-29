document.addEventListener("DOMContentLoaded", () => {

  /* ================= IMAGE MODAL ================= */
  const modal = document.getElementById("imageModal");
  const modalImg = document.querySelector(".modal-img");
  const parkingImage = document.getElementById("parkingImage");
  const closeBtn = document.querySelector(".close");

  if (modal && modalImg && parkingImage && closeBtn) {
    parkingImage.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = parkingImage.src;
      document.body.style.overflow = "hidden";
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = "";
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
      }
    });
  }

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

  if (contactBtn && contactModal && closeContact) {
    contactBtn.addEventListener("click", () => {
      contactModal.classList.add("active");
      document.body.style.overflow = "hidden";
    });

    closeContact.addEventListener("click", () => {
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








