"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["src_app_views_Projects_js"],{

/***/ "./src/app/components/Path.js":
/*!************************************!*\
  !*** ./src/app/components/Path.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ description }) => {\n    return /*html*/`\n        <div class=\"path\">\n            <h1 class=\"h1 path__name\">${window.location.pathname.slice(1)}</h1>\n            <p class=\"path__description\">${description}</p>\n        </div>\n    `\n});\n\n//# sourceURL=webpack://portfolio/./src/app/components/Path.js?");

/***/ }),

/***/ "./src/app/components/Project.js":
/*!***************************************!*\
  !*** ./src/app/components/Project.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _consts_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/consts/projects */ \"./src/app/consts/projects.js\");\n/* harmony import */ var _consts_websites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts/websites */ \"./src/app/consts/websites.js\");\n/* harmony import */ var _consts_techs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/consts/techs */ \"./src/app/consts/techs.js\");\n/* harmony import */ var _consts_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/consts/media */ \"./src/app/consts/media.js\");\n\n\n\n\n\nfunction mapLinks(links) {\n    function map(link) {\n        let href;\n        if (link === \"live\" && links[link].includes(\"0xkratos.medium.com\")) {\n            // Medium blog articles\n            href = \"https://\" + links[link];\n        } else {\n            href = \"https://\" + (link === \"live\" ? \"\" : _consts_websites__WEBPACK_IMPORTED_MODULE_1__[\"default\"][link]) + links[link];\n        }\n\n        if (link === \"figma\") href = `https://figma.com/community/file/${links[link]}`\n        if (link === \"github\" && links[link].startsWith(\"/\")) href = _consts_media__WEBPACK_IMPORTED_MODULE_3__[\"default\"].github + links[link]\n\n        const className = link === \"cached\" ? \"button__secondary\" : \"\";\n        const name = link === \"live\" && links[link].includes(\"0xkratos.medium.com\") ? \"Read\" : `${link[0].toUpperCase()}${link.slice(1)}`;\n\n        return /*html*/ `<a href=\"${href}\" class=\"button ${className}\" target=\"_blank\">${name} =></a>`;\n    }\n\n    return Object.keys(links).map(map).join(\"\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ id }, t) => {\n    const { hasImage, techs: projectTech, links } = _consts_projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(\n        (project) => project.id === id\n    );\n\n    return /*html*/ `\n        <div class=\"project\">\n            ${\n                hasImage\n                    ? `<img src=\"/images/projects/${id}.webp\" alt=\"${t[id].name}\" class=\"project__image\">`\n                    : \"\"\n            }\n            \n            <ul class=\"project__techs\">\n                ${projectTech\n                    .map(\n                        (tech) =>\n                            /*html*/ `<li class=\"project__tech\">${_consts_techs__WEBPACK_IMPORTED_MODULE_2__[\"default\"][tech] || tech}</li>`\n                    )\n                    .join(\"\")}\n            </ul> \n\n            <div class=\"project__content\">\n                <div class=\"project__name\">${t[id].name}</div>\n                <div class=\"project__description\">${t[id].description}</div>\n                <div class=\"project__links\">${mapLinks(links)}</div>\n            </div>\n        </div> \n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/components/Project.js?");

/***/ }),

/***/ "./src/app/components/ProjectList.js":
/*!*******************************************!*\
  !*** ./src/app/components/ProjectList.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Project */ \"./src/app/components/Project.js\");\n/* harmony import */ var _consts_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts/projects */ \"./src/app/consts/projects.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ title, filter = () => true, limit = _consts_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].length }, t) => {\n    return /*html*/ `\n            ${title ? `<div> <h2 class=\"h2\">${title}</h2>` : \"\"}\n            <div class=\"project-list\">\n                ${_consts_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n                    .filter(filter)\n                    .slice(0, limit)\n                    .sort((a, b) => a.hasImage - b.hasImage)\n                    .map(({ id }) => (0,_components_Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ id }, t))\n                    .join(\"\")}\n            </div>\n        ${title ? \"</div>\" : \"\"}\n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/components/ProjectList.js?");

/***/ }),

/***/ "./src/app/consts/projects.js":
/*!************************************!*\
  !*** ./src/app/consts/projects.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * @type {import(\"../../types/Project\").Project[]}\n */\nconst projects = [\n    {\n        id: \"chertnodes\",\n        links: {\n            live: \"0xkratos.medium.com/web-application-security-strategies-301b58d39fbf\",\n        },\n        techs: [\"appsec\", \"web\", \"security\"],\n        hasImage: false,\n    },\n    {\n        id: \"protectx\",\n        links: {\n            live: \"0xkratos.medium.com/penetration-testing-basics-a-guide-for-beginners-4673a1a34003\",\n        },\n        techs: [\"pentesting\", \"security\", \"hacking\"],\n        hasImage: false,\n    },\n    {\n        id: \"khanswers\",\n        links: {\n            live: \"0xkratos.medium.com/understanding-owasp-top-10-vulnerabilities-c5d8f4005634\",\n        },\n        techs: [\"owasp\", \"websec\", \"vulnerabilities\"],\n        hasImage: false,\n    },\n    {\n        id: \"kotikbot\",\n        links: {\n            live: \"0xkratos.medium.com/ctf-writeup-breaking-the-code-6f2b34c7e89a\",\n        },\n        techs: [\"ctf\", \"writeup\", \"challenge\"],\n        hasImage: false,\n    },\n    {\n        id: \"portfolio\",\n        links: {\n            live: \"0xkratos.medium.com/api-security-best-practices-guide-4b7d8ff2e9a5\",\n        },\n        techs: [\"api\", \"security\", \"rest\"],\n        hasImage: false,\n    },\n    {\n        id: \"blog\",\n        links: {\n            live: \"0xkratos.medium.com/understanding-modern-threat-intelligence-6f9d3c521b8e\",\n        },\n        techs: [\"threat\", \"intelligence\", \"security\"],\n        hasImage: false,\n    },\n    {\n        id: \"discordbot\",\n        links: {\n            live: \"0xkratos.medium.com/securing-cloud-environments-best-practices-7d8b4f2e5c9a\",\n        },\n        techs: [\"cloud\", \"security\", \"aws\"],\n        hasImage: false,\n    },\n    {\n        id: \"chesspro\",\n        links: {\n            live: \"0xkratos.medium.com/container-security-securing-docker-and-kubernetes-9b7d4f2a5e1c\",\n        },\n        techs: [\"docker\", \"kubernetes\", \"devsecops\"],\n        hasImage: false,\n    },\n    {\n        id: \"ooku\",\n        links: {\n            live: \"0xkratos.medium.com/security-automation-tools-and-techniques-8c7d4f3e9b1a\",\n        },\n        techs: [\"automation\", \"security\", \"devops\"],\n        hasImage: false,\n    },\n    {\n        id: \"madhost\",\n        links: {\n            live: \"0xkratos.medium.com/secure-coding-practices-for-developers-5b8c6f2a7d9e\",\n        },\n        techs: [\"coding\", \"security\", \"development\"],\n        hasImage: false,\n    },\n    {\n        id: \"feedrum\",\n        links: {\n            live: \"0xkratos.medium.com/devsecops-integrating-security-into-development-3a5b7c8d2e6f\",\n        },\n        techs: [\"devsecops\", \"cicd\", \"security\"],\n        hasImage: false,\n    },\n    {\n        id: \"deplos\",\n        links: {\n            live: \"0xkratos.medium.com/mobile-app-security-considerations-7b9c4f2d8e3a\",\n        },\n        techs: [\"mobile\", \"security\", \"android\"],\n        hasImage: false,\n    },\n    {\n        id: \"pixel-battle\",\n        links: {\n            live: \"0xkratos.medium.com/introduction-to-malware-analysis-techniques-6a9b7c4d5e2f\",\n        },\n        techs: [\"malware\", \"analysis\", \"security\"],\n        hasImage: false,\n    },\n];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);\n\n\n//# sourceURL=webpack://portfolio/./src/app/consts/projects.js?");

/***/ }),

/***/ "./src/app/consts/techs.js":
/*!*********************************!*\
  !*** ./src/app/consts/techs.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    ts: \"TypeScript\",\n    js: \"JavaScript\",\n    python: \"Python\",\n    sqlite: \"SQLite\",\n    mongo: \"MongoDB\",\n    postgreSql: \"PostgreSQL\",\n    html: \"HTML\",\n    css: \"CSS\",\n    sass: \"SASS\",\n    scss: \"SCSS\",\n    less: \"Less\",\n    stylus: \"Stylus\",\n    ejs: \"EJS\",\n    jinja: \"Jinja2\",\n    node: \"Node.js\",\n    vscode: \"VSCode\",\n    nvim: \"NeoVim\",\n    figma: \"Figma\",\n    git: \"Git & GitHub\",\n    xfce: \"XFCE\",\n    react: \"React\",\n    discordJs: \"Discord.js\",\n    flask: \"Flask\",\n    quart: \"Quart\",\n    express: \"Express\",\n    rtk: \"RTK\",\n    zod: \"Zod\",\n    webpack: \"WebPack\",\n    pug: \"Pug\",\n    gulp: \"Gulp\",\n    next: \"Next\",\n    deno: \"Deno\",\n    pixijs: \"PixiJS\",\n    preact: \"Preact\",\n    \n    // Cybersecurity related terms\n    appsec: \"Application Security\",\n    web: \"Web Security\",\n    security: \"Security\",\n    pentesting: \"Penetration Testing\",\n    hacking: \"Ethical Hacking\",\n    owasp: \"OWASP\",\n    websec: \"Web Security\",\n    vulnerabilities: \"Vulnerabilities\",\n    ctf: \"CTF\",\n    writeup: \"Writeups\",\n    challenge: \"Security Challenges\",\n    api: \"API Security\",\n    rest: \"REST Security\",\n    threat: \"Threat Modeling\",\n    intelligence: \"Intelligence\",\n    cloud: \"Cloud Security\",\n    aws: \"AWS Security\",\n    docker: \"Docker Security\",\n    kubernetes: \"Kubernetes\",\n    devsecops: \"DevSecOps\",\n    automation: \"Security Automation\",\n    devops: \"DevOps\",\n    coding: \"Secure Coding\",\n    development: \"Secure Development\",\n    cicd: \"CI/CD Security\",\n    mobile: \"Mobile Security\",\n    android: \"Android Security\",\n    malware: \"Malware Analysis\",\n    analysis: \"Security Analysis\"\n});\n\n//# sourceURL=webpack://portfolio/./src/app/consts/techs.js?");

/***/ }),

/***/ "./src/app/views/Projects.js":
/*!***********************************!*\
  !*** ./src/app/views/Projects.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Path.js */ \"./src/app/components/Path.js\");\n/* harmony import */ var _components_ProjectList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ProjectList.js */ \"./src/app/components/ProjectList.js\");\n/* harmony import */ var styles_pages_projects_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/pages/projects.sass */ \"./src/assets/styles/pages/projects.sass\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, t2) => {\n    return /*html*/ `\n        ${(0,_components_Path_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ description: t.description })}\n        <div class=\"blog-link\">\n            <a href=\"https://0xkratos.medium.com\" target=\"_blank\" class=\"button button__primary\">Visit Medium Blog =></a>\n        </div>\n        ${(0,_components_ProjectList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ title: t.decent, filter: (p) => p.id.startsWith(\"chertnodes\") || p.id.startsWith(\"protectx\") || p.id.startsWith(\"khanswers\") || p.id.startsWith(\"kotikbot\") }, t2.projects)}\n        ${(0,_components_ProjectList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ title: t.small, filter: (p) => !p.id.startsWith(\"chertnodes\") && !p.id.startsWith(\"protectx\") && !p.id.startsWith(\"khanswers\") && !p.id.startsWith(\"kotikbot\") }, t2.projects)}\n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/views/Projects.js?");

/***/ }),

/***/ "./src/assets/styles/pages/projects.sass":
/*!***********************************************!*\
  !*** ./src/assets/styles/pages/projects.sass ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/assets/styles/pages/projects.sass?");

/***/ })

}]);