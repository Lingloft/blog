<script setup lang="ts">
import { computed } from "vue";
import store, { Peoples } from "../assets/collaborators";
import LabelBlock from "./LabelBlock.vue";
import { openInNewTab } from "../utils/index";

const props = defineProps<{
    people: Peoples;
}>();
const peopleData = computed(() => store[props.people]);
const avatarLink = computed(() => peopleData.value.avatar || peopleData.value.name);

function openWebsite() {
    if (peopleData.value.website) openInNewTab(peopleData.value.website);
}
</script>
<template>
    <div class="friend-link" @click="openWebsite">
        <img v-if="avatarLink" :src="avatarLink" class="avatar">
        <div class="info">
            <span class="name">
                {{ peopleData.name }}
                <LabelBlock v-for="label in peopleData.labels" :key="label">{{ label }}</LabelBlock>
            </span>
            <span class="description">{{ peopleData.description }}</span>
        </div>
    </div>
</template>
<style scoped>
.friend-link {
    --s: 75px;
    display: inline-flex;
    border: rgb(200, 200, 200) 2px solid;
    border-radius: var(--s);
    padding: 5px;
    background-color: rgba(255, 255, 255, 0.1);
    margin: 10px;
    transition: all .2s ease-out;
}

.friend-link:hover {
    border-color: black;
    transform: scale(110%) translateY(-5px);
    cursor: pointer;
}

.avatar {
    width: var(--s);
    height: var(--s);
    border-radius: 50%;
    object-fit: cover;
}

.info {
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    overflow: hidden;
}

.name {
    font-weight: bold;
    font-size: 18px;
    text-wrap-mode: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.description {
    color: rgb(25, 25, 25);
    font-size: 14px;
    text-wrap-mode: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>