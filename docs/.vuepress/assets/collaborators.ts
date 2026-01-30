import { PeopleDescriptor } from "../components/structs";

const store: Record<string, PeopleDescriptor> = {
    fr: {
        avatar: "https://avatars.githubusercontent.com/u/55276797",
        name: "FurryR",
        website: "https://github.com/FurryR",
        labels: ["代码优化"]
    },
    fs: {
        avatar: "https://avatars.githubusercontent.com/u/108387605",
        name: "FallingShrimp",
        website: "https://rundll86.github.io",
        labels: ["开发", "文档"]
    },
    ce: {
        avatar: "https://avatars.githubusercontent.com/u/177754635",
        name: "Cyberexplorer",
        website: "https://lanwywritexu.github.io",
        labels: ["示例拓展", "测试"]
    },
    mbd: {
        avatar: "https://avatars.githubusercontent.com/u/121487216",
        name: "MoreBugOfDog",
        website: "https://github.com/MoreBugOfDog",
        labels: ["代码优化", "功能建议"]
    }
};
export default store;