<template>
    <div class="home-logo" id="home">
        <div class="home-logo_main">
                <img src ="https://raw.githubusercontent.com/rhyme-qing/picture-bed/main/outher/202211140505428.svg" alt="logo"/>
            <div class="home-logo_title">
                <h1>Joint Now Charter</h1>
            </div>
            <ui class="home-language">
                <li><a href="">US</a></li>
                <li><a href="">JP</a></li>
                <li><a href="/cn/">CN</a></li>
                <li><a href="">TW</a></li>
                <li><a href="">RU</a></li>
                <li><a href="">BR</a></li>
                <li><a href="">HU</a></li>
                <li><a href="">KR</a></li>
            </ui>
        </div>
    </div>
</template>

<style scoped>
    /* .theme.no-sidebar main {
        margin-left: -80px
    }
    .nav-bar {
        display: none !important;
    }
    .page {
        padding-top: 0 !important;
    }
    .container {
        padding: 0 !important;
    } */
    .container {
        word-wrap: break-word;
        border: 1px solid #E3E3E3;
        height: 100vh;
        max-width: 868px !important;
    }
    body {
        height: 100%;
        width: 100%;
        margin: 0 auto;
    }
    .home-logo {
        text-align: center;
        margin-top: 25vh;
    }
    .home-logo img {
        width: 281.99px;
    }
    .home-logo .home-logo_main {
        width: 36%;
        min-width: 193px;
        margin: 0 auto;
    }
    .home-logo .home-logo_main .home-logo_title {
        border-bottom: 5px solid #007FFF;
        
    }
    .home-logo .home-logo_main .home-logo_title h1 {
        padding-bottom: 15px;
    }
    .page {
        padding-top: 0 !important;
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

