<template>
    <span class="block">
        <a v-if="href" :href="href" target="_blank">
            <slot></slot>
        </a>
        <slot v-else></slot>
    </span>
</template>
<script setup lang="ts">
defineProps < {
    href?: string;
} > ();
</script>
<style scoped>
.block {
    background-color: rgb(240, 240, 240);
    border-radius: 5px;
    padding: 2px 5px;
    font-size: 15px;
    margin: 2px;
    display: inline-block;
    font-weight: normal;
}
</style>