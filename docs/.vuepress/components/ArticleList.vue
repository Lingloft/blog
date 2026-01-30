<template>
    <div class="wrapper">
        <a v-for="article in articles" :key="article.title" :href="article.url">
            {{ article.title }}
        </a>
    </div>
</template>
<script setup lang="ts">
import articles from "../assets/articles";
</script>
<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
}
</style>