const username = "mohibamin";

const featuredProjectLink =
  "https://github.com/KrishPAdmin/MEC-2025-Sr-Design-Parking-Garage";

const featuredRepos = {
  "ALU-GPU-Design": {
    tag: "Digital Logic • Hardware"
  },
  "LibraryProjwithJavaFX": {
    tag: "JavaFX • Desktop App"
  },
  "Maze-Navigating-Robot": {
    tag: "Robotics • Algorithms"
  },
  "Moflix": {
    tag: "Java • SQL • GUI"
  },
  "webdevproj": {
    tag: "HTML • CSS • JavaScript"
  },
  "CampusConnect": {
    tag: "Web • Firebase • Auth"
  }
};

fetch(`https://api.github.com/users/${username}/repos`)
  .then(res => res.json())
  .then(repos => {
    const container = document.getElementById("repo-container");

    // 🔴 IMPORTANT: prevent duplication
    container.innerHTML = "";

    repos
      .filter(repo => featuredRepos[repo.name])
      .forEach(repo => {
        const meta = featuredRepos[repo.name];

        const card = document.createElement("div");
        card.className = "repo-card fade-in";

        card.innerHTML = `
          <h3>${repo.name}</h3>
          <span class="repo-tag">${meta.tag}</span>
          <p>${repo.description || "No description provided."}</p>
          <a href="${repo.html_url}" target="_blank" class="repo-link">
            View on GitHub →
          </a>
        `;

        container.appendChild(card);
      });

    observeFadeIn();
  });

/* -------------------------------
   Featured Project Button
-------------------------------- */
const viewProjectBtn = document.querySelector(".view-project-btn");
if (viewProjectBtn) {
  viewProjectBtn.href = featuredProjectLink;
  viewProjectBtn.target = "_blank";
}

/* -------------------------------
   Fade-in Animation
-------------------------------- */
function observeFadeIn() {
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

  document.querySelectorAll(".fade-in").forEach(el => {
    observer.observe(el);
  });
}
