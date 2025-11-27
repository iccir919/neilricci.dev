import { projects } from "./projects-list.js";

console.log("projects", projects);

const recentProjectsList = document.getElementById("recent-projects-list");

const recentProjects = projects
    .sort( (a,b) =>  new Date(b.completion_date) - new Date(a.completion_date) )
    .slice(0, 3);

recentProjects.forEach( project => {
    const projectLink = document.createElement("a");
    projectLink.href = project.link;
    projectLink.target = "_blank";
    projectLink.className = "recent-project";
    projectLink.setAttribute("aria-label", `See ${project.name}`);

    const projectImage = document.createElement("img");
    projectImage.src = project.imageUrl;
    projectImage.alt = `${project.name} screenshot`;

    const projectName = document.createElement("h3");
    projectName.textContent = project.name;

    const projectDescription = document.createElement("p");
    projectDescription.textContent = project.description;

    projectLink.appendChild(projectImage);
    projectLink.appendChild(projectName);
    projectLink.appendChild(projectDescription);

    recentProjectsList.appendChild(projectLink);
});