<template>
    <div class="card">
        <RouterLink :to="post._path">
            <div class="overflow-hidden rounded-t h-[250px]">
                <img :src="post.thumb" alt="Thumb" class="w-full h-full object-cover">
            </div>
            <div class="p-4">
                <h2 class="text-xl mb-4 overflow-hidden line-clamp-2">{{ post.title }}</h2>
                <p class="overflow-hidden line-clamp-3">{{ post.subTitle }}</p>
            </div>
        </RouterLink>
    </div>
</template>

<script setup>
const props = defineProps(['post'])
</script>