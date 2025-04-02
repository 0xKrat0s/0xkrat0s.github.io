import Path from "../components/Path.js";
import ProjectList from "../components/ProjectList.js";

import "styles/pages/projects.sass"

export default (t, t2) => {
    return /*html*/ `
        ${Path({ description: t.description })}
        <div class="blog-link">
            <a href="https://0xkratos.medium.com" target="_blank" class="button button__primary">Visit Medium Blog =></a>
        </div>
        ${ProjectList({ title: t.decent, filter: (p) => p.id.startsWith("chertnodes") || p.id.startsWith("protectx") || p.id.startsWith("khanswers") || p.id.startsWith("kotikbot") }, t2.projects)}
        ${ProjectList({ title: t.small, filter: (p) => !p.id.startsWith("chertnodes") && !p.id.startsWith("protectx") && !p.id.startsWith("khanswers") && !p.id.startsWith("kotikbot") }, t2.projects)}
    `;
};
