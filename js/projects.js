
  async function loadProjects() {
    try {
      const response = await fetch("https://api.github.com/users/AJOSH01personal/repos");
      const repos = await response.json();

      const container = document.querySelector(".projects-container");
      container.innerHTML = ""; // clear any placeholder content
      
      const excludedRepos = [
        "cse625pdf_automation-importcopy",
        "SEDULOUS-importcopy",
        "soft_body_sim-importcopy",
        "soft-body-physics-testing-importcopy",
        "test-webpage-importcopy"
        ];

      repos.filter(repo => !excludedRepos.includes(repo.name)).forEach(repo => {
        const card = document.createElement("div");
        card.className = "project-card";

        card.innerHTML = `
          <h2><a href="${repo.html_url}" target="_blank">${repo.name}</a></h2>
          <p>${repo.description ? repo.description : "No description provided."}</p>
          <div class="project-tags">
            <span class="tag">⭐ ${repo.stargazers_count}</span>
            <span class="tag">🍴 ${repo.forks_count}</span>
          </div>
        `;

        container.appendChild(card);
      });
    } catch (error) {
      console.error("Error fetching repos:", error);
    }
  }

  document.addEventListener("DOMContentLoaded", loadProjects);

