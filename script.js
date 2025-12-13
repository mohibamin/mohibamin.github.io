document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imageModal");
  const modalImg = document.querySelector(".modal-img");
  const parkingImage = document.getElementById("parkingImage");
  const closeBtn = document.querySelector(".close");

  if (!modal || !modalImg || !parkingImage || !closeBtn) return;

  // Open modal
  parkingImage.addEventListener("click", () => {
    modal.classList.add("active");
    modalImg.src = parkingImage.src;
    document.body.style.overflow = "hidden";
  });

  // Close modal (X button)
  closeBtn.addEventListener("click", closeModal);

  // Close modal when clicking background
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
});


