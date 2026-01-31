<template>
    <div class="articles">
        <template v-for="article in articles">
            <div class="article" v-if="article.title.toLowerCase() !== 'readme'" :key="article.title">
                <a :href="article.url">{{ article.title }}</a>
                <LabelBlock class="author" :href="article.authorUrl">
                    {{ findCollaborator(article.author)?.name || `未知作者：${article.author}` }}
                </LabelBlock>
            </div>
        </template>
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