import skills from "@/consts/skills";
import techs from "@/consts/techs";

export default ({ id }, t) => {
    return /*html*/ `
        <div class="skill-block">
            <div class="skill-block__name">${t[id]}</div>
            <ul class="skill-block__list">
                ${skills[id]
                    .map(
                        (skill) =>
                            /*html*/ `<li class="skill-block__skill">${techs[skill] || skill}</li>`
                    )
                    .join("")}
            </ul>
        </div>
    `;
};
