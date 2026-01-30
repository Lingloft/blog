import { PeopleDescriptor } from "../components/structs";

export const peoples = ["fallingshrimp"] as const;
export const store: PeopleStore = {
    fallingshrimp: {
        avatar: "https://fshrimp.top/avatars/lycaon.jpg",
        name: "陨落基围虾",
        website: "https://fshrimp.top",
        labels: ["开发", "文档"],
        description: "好看的皮囊千篇一律，有趣的灵魂万里挑一。"
    }
};

export type Peoples = typeof peoples[number];
export type PeopleStore = Record<Peoples, PeopleDescriptor>;
export default store;