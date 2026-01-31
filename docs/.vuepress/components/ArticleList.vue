<template>
    <div class="articles">
        <div v-for="article in articles" :key="article.title" class="article">
            <a :href="article.url">{{ article.title }}</a>
            <LabelBlock class="author">
                {{ findCollaborator(article.author)?.name || `未知作者：${article.author}` }}
            </LabelBlock>
        </div>
    </div>
</template>
<script setup lang="ts">
import articles from "../assets/articles";
import { findCollaborator } from "../assets/collaborators";
import LabelBlock from "./LabelBlock.vue";
</script>
<style scoped>
.articles {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.article {
    display: flex;
    align-items: center;
}

.author {
    margin-left: auto;
}
</style>