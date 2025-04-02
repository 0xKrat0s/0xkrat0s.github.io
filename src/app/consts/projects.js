/**
 * @type {import("../../types/Project").Project[]}
 */
const projects = [
    {
        id: "chertnodes",
        links: {
            live: "https://medium.com/bug-bounty-hunting/client-side-path-traversal-cspt-a-deep-dive-into-an-overlooked-vulnerability-cdf91baca715",
        },
        techs: ["appsec", "web", "security"],
        hasImage: false,
    },
    {
        id: "protectx",
        links: {
            live: "https://0xkratos.medium.com/php-type-juggling-vulnerabilities-how-attackers-exploit-loose-comparisons-e4e0c78ec9e6",
        },
        techs: ["appsec", "web", "security"],
        hasImage: false,
    },
    {
        id: "khanswers",
        links: {
            live: "https://0xkratos.medium.com/web-cache-deception-understanding-and-mitigating-security-risks-c35b79963a49",
        },
        techs: ["appsec", "web", "security"],
        hasImage: false,
    },
    {
        id: "kotikbot",
        links: {
            live: "https://medium.com/readers-club/cve-2025-21298-windows-ole-remote-code-execution-vulnerability-43c4a9dcf7d1",
        },
        techs: ["windows", "vulnerability", "cve"],
        hasImage: false,
    },
    {
        id: "portfolio",
        links: {
            live: "https://medium.com/bug-bounty-hunting/bypassing-web-application-firewalls-with-shell-globbing-8af82ff0cc8a",
        },
        techs: ["waf", "bypass", "security"],
        hasImage: false,
    },
    {
        id: "blog",
        links: {
            live: "https://medium.com/meetcyber/unrested-htb-writeup-3cc974f49f47",
        },
        techs: ["htb", "writeup", "hacking"],
        hasImage: false,
    }
];

export default projects;
