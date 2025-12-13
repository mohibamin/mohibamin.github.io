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
    const container = document.getElementById("repo-container");

    repos
      .filter(repo => featuredRepos[repo.name])
      .forEach(repo => {
        const meta = featuredRepos[repo.name];
        const card = document.createElement("div");
        card.className = "repo-card";

        card.innerHTML = `
          <h3>${repo.name}</h3>
          <span>${meta.tag}</span>
          <p>${repo.description || "No description provided."}</p>
          <a href="${repo.html_url}" target="_blank">View on GitHub →</a>
        `;

        container.appendChild(card);
      });
  });

/* IMAGE MODAL */
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const featuredImg = document.getElementById("featuredImage");
const closeBtn = document.querySelector(".image-modal .close");

featuredImg.onclick = () => {
  modal.style.display = "flex";
  modalImg.src = featuredImg.src;
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

modal.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};
