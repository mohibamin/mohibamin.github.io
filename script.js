document.addEventListener("DOMContentLoaded", () => {

  // IMAGE MODAL
  const modal = document.getElementById("imageModal");
  const modalImg = document.querySelector(".modal-img");
  const parkingImage = document.getElementById("parkingImage");

  parkingImage.onclick = () => {
    modal.style.display = "flex";
    modalImg.src = parkingImage.src;
  };

  modal.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
  };

  // CONTACT MODAL
  const contactBtn = document.getElementById("contactBtn");
  const contactModal = document.getElementById("contactModal");
  const closeContact = document.querySelector(".close-contact");

  contactBtn.onclick = () => contactModal.style.display = "flex";
  closeContact.onclick = () => contactModal.style.display = "none";

  // SCROLL REVEAL
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => observer.observe(el));
});








