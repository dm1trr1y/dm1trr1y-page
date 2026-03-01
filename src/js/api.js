import axios from "axios";

const projectsContainer = document.querySelector(".projects-list");

export async function fetchProjects() {
  try {
    const response = await axios.get(
      "https://api.github.com/users/dm1trr1y/repos?sort=created&direction=desc",
    );
    const projects = response.data;
    // console.log("Fetched projects:", projects);
    displayProjects(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
}

function displayProjects(projects) {
  projectsContainer.innerHTML = "";
  projects.forEach((project) => {
    const projectItem = document.createElement("li");
    projectItem.classList.add("projects-list-item", "swiper-slide");
    projectItem.innerHTML = `
      <h3 class="projects-list-item-heading">${project.name}</h3>
      <p class="projects-list-item-description">${project.description || "No description"}</p> 
      <a class="projects-list-item-link" href="${project.html_url}" target="_blank">GitHub --></a>
    `;

    projectsContainer.appendChild(projectItem);
  });
}

fetchProjects();
