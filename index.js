import { projects } from "./projects.js"

const projectsContainer = document.getElementById("projects")

projects.forEach(project => {
    const projectElement = document.createElement("div")
    projectElement.className = "project"

    let formattedDate = "In Progress"
    if (project.completion_date) {
        formattedDate = new Date(project.completion_date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    }

    const skills = project.skills
        .map(skill => `<span class="skill">${skill}</span>`)
        .join(" ")

    projectElement.innerHTML = `
        <h2>${project.name}</h2>
        <p class="description">${project.description}</p>
        <p><strong>Date completed:</strong> ${formattedDate}</p>
        <img src="${project.imageUrl}" alt="Screenshot of ${project.name}" />
        <div class="skills">${skills}</div>
        <div class="links">
            <a href="${project.github_repo}" target="_blank">
                Github
            </a>
            <a href="${project.link}" target="_blank" class="primary">
                Live
            </a>
        </div>
    `

    projectsContainer.appendChild(projectElement)
})