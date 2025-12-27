document.addEventListener("DOMContentLoaded", () => {
  /* ===============================
     IMAGE MODAL
  =============================== */
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

  /* ===============================
     LETTER SPLIT (RUN ONCE)
  =============================== */
  const splitTextElements = document.querySelectorAll(".reveal-text");

  splitTextElements.forEach((el) => {
    if (el.dataset.split) return; // prevent double split
    el.dataset.split = "true";

    const text = el.textContent;
    el.textContent = "";

    [...text].forEach((char, index) => {
      const span = document.createElement("span");
      span.classList.add("char");
      span.style.setProperty("--char-index", index);
      span.textContent = char === " " ? "\u00A0" : char;
      el.appendChild(span);
    });
  });

  /* ===============================
     SCROLL REVEAL (SECTIONS)
  =============================== */
  const revealSections = document.querySelectorAll(".reveal");

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          sectionObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealSections.forEach((el) => sectionObserver.observe(el));

  /* ===============================
     SCROLL REVEAL (TEXT LETTERS)
  =============================== */
  const textObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          textObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  splitTextElements.forEach((el) => textObserver.observe(el));
});



