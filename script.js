/* ================================
   GitHub Repos Section (UNCHANGED)
================================ */

const username = "mohibamin";

const featuredRepos = {
  "ALU-GPU-Design": { tag: "Digital Logic • Hardware" },
  "LibraryProjwithJavaFX": { tag: "JavaFX • Desktop App" },
  "Maze-Navigating-Robot": { tag: "Robotics • Algorithms" },
  "Moflix": { tag: "Java • SQL • GUI" },
  "webdevproj": { tag: "HTML • CSS • JavaScript" },
  "campusconnect": { tag: "Web • Firebase • Auth" }
};

fetch(`https://api.github.com/users/${username}/repos`)
  .then(res => res.json())
  .then(repos => {
    const container = document.querySelector(".project-grid");
    if (!container) return;

    repos
      .filter(repo => featuredRepos[repo.name])
      .slice(0, 6)
      .forEach(repo => {
        const meta = featuredRepos[repo.name];

        const card = document.createElement("div");
        card.className = "project-card fade-in";

        card.innerHTML = `
          <h3>${repo.name}</h3>
          <span>${meta.tag}</span>
          <p>${repo.description || "No description provided."}</p>
          <a href="${repo.html_url}" target="_blank">View on GitHub →</a>
        `;

        container.appendChild(card);
        observer.observe(card);
      });
  });

/* ================================
   Scroll Fade-In Animation
================================ */

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

/* ================================
   Featured Image Modal (NEW)
================================ */

const featuredImg = document.getElementById("featuredImg");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");

if (featuredImg && modal && modalImg) {
  featuredImg.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = featuredImg.src;
    document.body.style.overflow = "hidden";
  });

  modal.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
}
