import proxy from "../proxies/media"

const media = {
    discord: {
        id: "1027230621602431016",
        tag: "amal pk",
    },
    github: "0xKrat0s",
    linkedin: "in/amalpk",
    email: "hello@amalpk.in"
}

export default new Proxy(media, proxy);

