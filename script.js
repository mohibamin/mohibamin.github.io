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

  // Close modal (X button)
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "";
  });

  // Close modal when clicking outside image
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }
  });
});

