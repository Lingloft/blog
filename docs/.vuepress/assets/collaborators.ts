import { PeopleDescriptor } from "../components/structs";

export const peoples = ["Kernyr", "fallingshrimp"] as const;
export const store: PeopleStore = {
    Kernyr: {
        avatar: "https://hujiarong.site/assets/avatar.jpg",
        name: "主核Kernyr",
        website: "https://hujiarong.site",
        labels: ["管理", "设计", "开发"],
        description: "永远相信自己可以不自量力地改变这个世界",
    },
    fallingshrimp: {
        avatar: "https://fshrimp.top/avatars/lycaon.jpg",
        name: "陨落基围虾",
        website: "https://fshrimp.top",
        labels: ["全栈", "游戏"],
        description: "好看的皮囊千篇一律，有趣的灵魂万里挑一",
    },
};
export function findCollaborator(name: string): PeopleDescriptor | null {
    if (peoples.includes(name as Peoples)) {
        return store[name as Peoples];
    }
    return null;
}

export type Peoples = (typeof peoples)[number];
export type PeopleStore = Record<Peoples, PeopleDescriptor>;
export default store;
