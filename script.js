document.addEventListener("DOMContentLoaded", () => {
  /* ===============================
     IMAGE MODAL (ALL FEATURED IMAGES)
     =============================== */

  const modal = document.getElementById("imageModal");
  const modalImg = document.querySelector(".modal-img");
  const closeBtn = document.querySelector(".close");

  // Select ALL images inside featured-image containers
  const featuredImages = document.querySelectorAll(".featured-image img");

  if (!modal || !modalImg || !closeBtn || featuredImages.length === 0) return;

  // Open modal for ANY featured image
  featuredImages.forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
      document.body.style.overflow = "hidden";
    });
  });

  // Close modal via X
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modalImg.src = "";
    document.body.style.overflow = "";
  });

  // Close modal by clicking backdrop
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      modalImg.src = "";
      document.body.style.overflow = "";
    }
  });

  /* ===============================
     SCROLL REVEAL
     =============================== */

  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealElements.forEach((el) => observer.observe(el));
});








