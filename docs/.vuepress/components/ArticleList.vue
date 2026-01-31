<template>
    <div class="articles">
        <template v-for="article in articles">
            <div class="article" v-if="article.title.toLowerCase() !== 'readme'" :key="article.title"
                @click="openInNewTab(article.url)">
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
import { openInNewTab } from "../utils";
import LabelBlock from "./LabelBlock.vue";
</script>
<style scoped>
.articles {
    display: flex;
    flex-direction: column;
}

.article {
    display: flex;
    align-items: center;
    padding: 3px 5px;
    transition: all .2s ease-out;
}

.article:hover {
    background-color: rgba(0, 0, 0, 0.1);
    padding: 6px 10px;
    border-radius: 5px;
    cursor: pointer;
}

.author {
    margin-left: auto;
}
</style>