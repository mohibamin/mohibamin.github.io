document.addEventListener("DOMContentLoaded", () => {

  /* PROJECT DATA (SINGLE SOURCE OF TRUTH) */
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
      url: "https://github.com/mohibamin/CampusConnect"
    }
  ];

  const container = document.getElementById("repo-container");

  projects.forEach(p => {
    const card = document.createElement("div");
    card.className = "repo-card";
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p class="sub">${p.tag}</p>
      <p>${p.desc}</p>
      <a href="${p.url}" target="_blank">View on GitHub →</a>
    `;
    container.appendChild(card);
  });

  /* IMAGE MODAL */
  const img = document.querySelector(".featured-img");
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const close = document.getElementById("close-modal");

  img.onclick = () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  };

  close.onclick = () => modal.style.display = "none";
  modal.onclick = e => e.target === modal && (modal.style.display = "none");
});

