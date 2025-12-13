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

fetch(`https://api.github.com/users/${username}/repos`)
  .then(res => res.json())
  .then(repos => {
    const container = document.getElementById("repo-container");

    repos
      .filter(repo => featuredRepos[repo.name])
      .forEach(repo => {
        const meta = featuredRepos[repo.name];

        const card = document.createElement("div");
        card.className = "repo-card";

        if (meta.highlight) {
          card.style.border = "2px solid #00eaff";
        }

        card.innerHTML = `
          <h2>${repo.name}</h2>
          <em>${meta.tag}</em>
          <p>${repo.description || "No description provided."}</p>
          <a href="${repo.html_url}" target="_blank">View on GitHub →</a>
        `;

        container.appendChild(card);
      });
  });
// Scroll fade-in animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".repo-card, .featured-card").forEach(el => {
  el.classList.add("fade-in");
  observer.observe(el);
});
