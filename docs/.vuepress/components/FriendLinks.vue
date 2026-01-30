<template>
    <div>
        <FriendLink v-for="people in Object.keys(store)" :key="people" :people="people" />
    </div>
</template>
<script setup lang="ts">
import FriendLink from "./FriendLink.vue";
import store from "../assets/collaborators";
</script>