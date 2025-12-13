const username = "mohibamin";

const featuredRepos = {
  "ALU-GPU-Design": { tag: "Digital Logic • Hardware" },
  "LibraryProjwithJavaFX": { tag: "JavaFX • Desktop App" },
  "Maze-Navigating-Robot": { tag: "Robotics • Algorithms" },
  "Moflix": { tag: "Java • SQL • GUI" },
  "webdevproj": { tag: "HTML • CSS • JavaScript" },
  "campusconnect": {
    tag: "Web • Firebase • Auth",
    description:
      "Campus event platform with role-based access, authentication, and analytics."
  }
};

fetch(`https://api.github.com/users/${username}/repos`)
  .then(res => res.json())
  .then(repos => {
    const container = document.getElementById("repo-container");
    container.innerHTML = "";

    repos
      .filter(repo => featuredRepos[repo.name])
      .forEach(repo => {
        const meta = featuredRepos[repo.name];

        const card = document.createElement("div");
        card.className = "repo-card fade-in";

        card.innerHTML = `
          <h3>${repo.name}</h3>
          <span class="tag">${meta.tag}</span>
          <p>${meta.description || repo.description || "No description provided."}</p>
          <a href="${repo.html_url}" target="_blank">View on GitHub →</a>
        `;

        container.appendChild(card);
      });

    observeCards();
  });

/* Scroll fade-in animation */
function observeCards() {
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

  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
}

// IMAGE MODAL
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");

document.querySelectorAll(".clickable-image").forEach(img => {
  img.addEventListener("click", () => {
    modalImg.src = img.src;
    modal.classList.add("active");
  });
});

modal.addEventListener("click", e => {
  if (e.target.classList.contains("image-modal") || e.target.classList.contains("close-btn")) {
    modal.classList.remove("active");
  }
});
