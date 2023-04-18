<template>
    <main>
        <Head>
            <Title>NuxtBlog - {{ data.title }}</Title>
            <Meta name="description" :content="data.subTitle" />
        </Head>
        
        <section class="max-w-3xl m-auto">
            <header class="mb-8">
                <div class="overflow-hidden h-[520px] rounded mb-4">
                    <img :src="data.thumb" alt="Thumb" class="thumb">
                </div>

                <div>
                    <h1 class="text-[22px] sm:text-3xl mb-4">{{ data.title }}</h1>
                    <p class="text-lg mb-4">{{ data.subTitle }}</p>
                    <p>por <span class="text-amber-400">{{ data.author }}</span> &bull; <span class="text-amber-400">{{ data.publishedAt }}</span></p>
                </div>
            </header>

            <div class="w-full h-[1px] bg-slate-600 my-4"></div>
            
            <article>
                <ClientOnly>
                    <ContentRenderer :value="data" />
                </ClientOnly>
            </article>
        </section>

    </main>
</template>

<script setup>
const route = useRoute()

const { data } = await useAsyncData(`content.public['content']-${route.path}`, () =>
    queryContent().where({ _path: route.path }).findOne())
</script>

<style scoped>
    article :deep(h1) {
        @apply text-[24px] sm:text-3xl mb-4;
    }

    article :deep(h2) {
        @apply text-[22px] sm:text-2xl mb-2;
    }

    article :deep(h4) {
        @apply mb-2;
    }

    article :deep(p) {
        @apply sm:text-lg mb-8;
    }

    article :deep(pre) {
        @apply bg-slate-800 rounded p-4 mb-8;
    }

    article :deep(strong, b) {
        @apply text-amber-400;
    }

    article :deep(ul) {
        @apply list-disc ml-4 mb-8;
    }

    article :deep(ol) {
        @apply list-decimal ml-8 mb-8;
    }

    article :deep(li) {
        @apply mb-2 text-lg;
    }

    article :deep(blockquote) {
        @apply border-l-8 border-slate-800 pl-4;
    }

    article :deep(img) {
        @apply rounded max-w-full;
    }

    article :deep(p:last-child) {
        @apply mb-0;
    }
</style>