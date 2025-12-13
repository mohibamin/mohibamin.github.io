const username = "mohibamin";

const featuredRepos = {
  "MEC-2025-Sr-Design-Parking-Garage": {
    tag: "Senior Design • Embedded • Web",
    highlight: true
  },
  "Moflix": { tag: "Java • SQL • GUI" },
  "Maze-Navigating-Robot": { tag: "Robotics • Algorithms" },
  "Reminder-Bot-Discord": { tag: "Automation • Discord API" },
  "LibraryProjwithJavaFX": { tag: "JavaFX • Desktop App" },
  "ALU-GPU-Design": { tag: "Digital Logic • Hardware" },
  "webdevproj": { tag: "HTML • CSS • JavaScript" }
};

// Scroll reveal animation
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);

fetch(`https://api.github.com/users/${username}/repos`)
  .then(res => res.json())
  .then(repos => {
    const container = document.getElementById("repo-container");

    repos
      .filter(repo => featuredRepos[repo.name])
      .forEach(repo => {
        const meta = featuredRepos[repo.name];

        const card = document.createElement("div");
        card.className = "card reveal";

        if (meta.highlight) {
          card.style.border = "1px solid rgba(0,183,255,.6)";
        }

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

