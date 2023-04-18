<template>
    <main class="container m-auto">
        <Header />
        <div class="h-[calc(100vh_-_(81px_+_48px))] flex flex-col justify-center items-center gap-8">
            <h1 class="text-3xl">404 - Página não encontrada... 🤔</h1>
            <iframe src="https://giphy.com/embed/l2JehQ2GitHGdVG9y" width="480" height="362" frameBorder="0"
                allowFullScreen></iframe>
            <NuxtLink class="p-2 bg-slate-800 rounded text-xl transition-opacity hover:opacity-80" to="/">
                Voltar à home.
            </NuxtLink>
        </div>
    </main>
</template>