const username = "mohibamin";

const featuredRepos = {
  "MEC-2025-Sr-Design-Parking-Garage": {
    tag: "Senior Design • Embedded • Web"
  },
  "Moflix": { tag: "Java • SQL • GUI" },
  "Maze-Navigating-Robot": { tag: "Robotics • Algorithms" },
  "LibraryProjwithJavaFX": { tag: "JavaFX • Desktop App" },
  "ALU-GPU-Design": { tag: "Digital Logic • Hardware" },
  "webdevproj": { tag: "HTML • CSS • JavaScript" }
};

// Scroll animation
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

// Fetch GitHub repos
fetch(`https://api.github.com/users/${username}/repos`)
  .then(res => res.json())
  .then(repos => {
    const container = document.getElementById("repo-container");

    repos
      .filter(repo => featuredRepos[repo.name])
      .forEach(repo => {
        const meta = featuredRepos[repo.name];

        const card = document.createElement("div");
        card.className = "repo-card fade-in";

        card.innerHTML = `
          <h3>${repo.name}</h3>
          <span class="tag">${meta.tag}</span>
          <p>${repo.description || "No description provided."}</p>
          <a href="${repo.html_url}" target="_blank">View on GitHub →</a>
        `;

        container.appendChild(card);
        observer.observe(card);
      });
  })
  .catch(err => console.error(err));
