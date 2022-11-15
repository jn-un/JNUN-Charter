<!-- <script setup>
    import DefaultTheme from 'vitepress/theme'

    const { Layout } = DefaultTheme
</script> -->
<template>
    <!-- <Layout>
        <template #page-bottom>
            <div>Edit this page</div>
        </template>
    </Layout> -->
</template>
<style>
    .sidebar {
        top: 0 !important;
        width: 10rem !important;
    }
    .container {
        word-wrap: break-word;
        border: 1px solid #E3E3E3;
        height: 100vh;
        max-width: 868px !important;
        margin: 0 !important;
    }
    body {
        height: 100%;
        width: 100%;
        margin: 0 auto;
    }
    .page {
        padding-top: 0 !important;
        margin-left: 10rem !important;
    }
    @media (max-width: 719px) {
        .page {
            margin-left: 0 !important;
        }
    }
    .nav-bar {
        bottom: 0 !important;
        top: auto !important;
        height: 5vh !important;
        display: none !important;
    }
    .home-language {
        list-style: none;
        margin-top: 20px;
        display: block;
        width: 100%;
        border: 2px solid #007FFF;
    }
    .home-language li {
        font-size: 20px;
        display: contents;
    }
    a {
        color: #007FFF !important;
        padding: 1px;

    }
</style>

