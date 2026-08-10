async function loadProjects() {
    const data = await fetch('../assets/data/projectData.json').then(response => response.json());

    const projectContainer = document.getElementById('project-container');

    let html = '';
    for (let i = 0; i < data.length; i++) {
        let project = data[i];

        html += `
            <div class="project">
                <a href="${project.url}" target="_blank" rel="noreferrer">
                    <img src="${project.imageUrl}" alt="${project.name}" />
                </a>
                <div class="project-name">
                    <a href="${project.url}" target="_blank" rel="noreferrer">${project.name}</a>
                </div>
                <div class="project-description">
                    <p>${project.description}</p>
                </div>
            </div>
            `;
    }

    projectContainer.innerHTML = html;
}

loadProjects();

