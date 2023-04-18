// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
    app: {
        head: {
            title: 'NuxtBlog',
            meta: [
                { name: 'description', content: 'A simple blog for my portfolio.' }
            ]
        }
    },
    content: {
        // https://content.nuxtjs.org/api/configuration
    }
})
