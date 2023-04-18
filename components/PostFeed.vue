<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card v-for="post in posts" :key="post.id" :post="post" />
    </div>
</template>

<script setup> 
const { data: posts } = await useAsyncData('posts', () => queryContent('/posts').find())
</script>