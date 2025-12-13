document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      name: "ALU-GPU-Design",
      tag: "Digital Logic • Hardware",
      desc: "ALU design using decoder, FSM, ALU core, latches, and seven-segment displays.",
      url: "https://github.com/mohibamin/ALU-GPU-Design"
    },
    {
      name: "LibraryProjwithJavaFX",
      tag: "JavaFX • Desktop App",
      desc: "No description provided.",
      url: "https://github.com/mohibamin/LibraryProjwithJavaFX"
    },
    {
      name: "Maze-Navigating-Robot",
      tag: "Robotics • Algorithms",
      desc: "No description provided.",
      url: "https://github.com/mohibamin/Maze-Navigating-Robot"
    },
    {
      name: "Moflix",
      tag: "Java • SQL • GUI",
      desc: "Java Swing & FX app with SQL-backed live-updating database.",
      url: "https://github.com/mohibamin/Moflix"
    },
    {
      name: "webdevproj",
      tag: "HTML • CSS • JavaScript",
      desc: "Website designed with HTML, CSS, and JavaScript.",
      url: "https://github.com/mohibamin/webdevproj"
    },
    {
      name: "CampusConnect",
      tag: "Web • Firebase • Auth",
      desc: "Campus event platform with role-based access, authentication, and analytics.",
      url: "https://github.com/mohibamin/campusconnect"
    }
  ];

  const container = document.getElementById("repo-container");
  if (!container) return;

  projects.forEach(p => {
    const card = document.createElement("div");
    card.className = "repo-card fade-in";

    card.innerHTML = `
      <h3>${p.name}</h3>
      <span class="tag">${p.tag}</span>
      <p>${p.desc}</p>
      <a href="${p.url}" target="_blank" class="github-link">
        View on GitHub →
      </a>
    `;

    container.appendChild(card);
  });

  /* Fade-in animation */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
});
