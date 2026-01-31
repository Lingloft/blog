<template>
    <div class="wrapper">
        <div v-for="article in articles" :key="article.title">
            <a :href="article.url">{{ article.title }}</a>
            <span class="author">by {{ article.author }}</span>
        </div>
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