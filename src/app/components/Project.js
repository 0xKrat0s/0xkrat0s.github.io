import projects from "@/consts/projects";
import websites from "@/consts/websites";
import techs from "@/consts/techs";
import media from "@/consts/media";

function mapLinks(links) {
    function map(link) {
        let href;
        if (link === "live" && links[link].includes("0xkratos.medium.com")) {
            // Medium blog articles
            href = "https://" + links[link];
        } else {
            href = "https://" + (link === "live" ? "" : websites[link]) + links[link];
        }

        if (link === "figma") href = `https://figma.com/community/file/${links[link]}`
        if (link === "github" && links[link].startsWith("/")) href = media.github + links[link]

        const className = link === "cached" ? "button__secondary" : "";
        const name = link === "live" && links[link].includes("0xkratos.medium.com") ? "Read" : `${link[0].toUpperCase()}${link.slice(1)}`;

        return /*html*/ `<a href="${href}" class="button ${className}" target="_blank">${name} =></a>`;
    }

    return Object.keys(links).map(map).join("");
}

export default ({ id }, t) => {
    const { hasImage, techs: projectTech, links } = projects.find(
        (project) => project.id === id
    );

    return /*html*/ `
        <div class="project">
            ${
                hasImage
                    ? `<img src="/images/projects/${id}.webp" alt="${t[id].name}" class="project__image">`
                    : ""
            }
            
            <ul class="project__techs">
                ${projectTech
                    .map(
                        (tech) =>
                            /*html*/ `<li class="project__tech">${techs[tech] || tech}</li>`
                    )
                    .join("")}
            </ul> 

            <div class="project__content">
                <div class="project__name">${t[id].name}</div>
                <div class="project__description">${t[id].description}</div>
                <div class="project__links">${mapLinks(links)}</div>
            </div>
        </div> 
    `;
};
