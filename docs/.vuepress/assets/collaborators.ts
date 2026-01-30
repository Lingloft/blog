import { PeopleDescriptor } from "../components/structs";

const peoples = ["fallingshrimp"] as const;
const store: Record<typeof peoples[number], PeopleDescriptor> = {
    fallingshrimp: {
        avatar: "https://fshrimp.top/avatars/lycaon.jpg",
        name: "陨落基围虾",
        website: "https://fshrimp.top",
        labels: ["开发", "文档"],
        description: "好看的皮囊千篇一律，有趣的灵魂万里挑一。"
    }
};
export default store;