document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imageModal");
  const modalImg = document.querySelector(".modal-img");
  const parkingImage = document.getElementById("parkingImage");
  const closeBtn = document.querySelector(".close");

  if (!modal || !modalImg || !parkingImage || !closeBtn) return;

  // Open modal
  parkingImage.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = parkingImage.src;
    document.body.style.overflow = "hidden";
  });

  // Close modal via X
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "";
  });

  // Close modal by clicking background
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }
  });
});
// ===== SCROLL REVEAL =====
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
    threshold: 0.15, // how much of element must be visible
  }
);

revealElements.forEach((el) => observer.observe(el));







