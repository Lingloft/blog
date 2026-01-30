import { defineConfig } from "vuepress/config";

export default defineConfig({
    themeConfig: {
        sidebar: "auto",
        sidebarDepth: 5
    },
    dest: "../dist",
    locales: {
        "/": {
            lang: "zh-CN",
            title: "Lingloft-Blog",
            description: "灵阁博客"
        }
    },
    markdown: {
        lineNumbers: true
    },
    head: [
        ["link", { rel: "shortcut icon", type: "image/png", href: "/favicon.png" }]
    ]
});