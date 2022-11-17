<template>
    
</template>
<style>
    .sidebar {
        top: 0 !important;
        width: 10rem !important;
    }
    .sidebar:after {
        content: '';
        background: url(https://raw.githubusercontent.com/rhyme-qing/picture-bed/main/outher/202211140505428.svg);
        width: 6.95rem;
        /* border-bottom: 9px solid #0075FF; */
        margin-top: 20px;
        position: absolute;
        /* left: 0px; */
        top: 0;
        height: 93px;
        background-size: 110px;
        background-repeat: no-repeat;
        margin-left: 24px;
    }
    .container {
        word-wrap: break-word;
        height: 100%;
        max-width: 100% !important;
        margin: 0 !important;
        padding: 0 1.5rem 0 !important;
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
    .sidebar > .sidebar-links {
        padding: 8.5rem 0 !important;
    }
    .content {
        column-rule-style: groove;
        columns: 2;
        column-rule-color: rgb(14 0 0 / 8%);
        height: 100%;
        column-rule-width: 1px;
        column-gap: 3%;
        padding-bottom: 0 !important;
        padding: 1%;
    }
    @media (max-width: 1250px) {
        .content {
            columns: 1;
        }
    }
    .page-footer {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
    }
    .nav-bar {
        bottom: 0 !important;
        top: auto !important;
        height: 5vh !important;
        display: none !important;
    }
    a {
        color: #000000 !important;
        padding: 1px;
    }
    h1:after {
        content: '';
        width: 280px;
        /* height: 50px; */
        border-bottom: 9px solid #0075FF;
        /* border-width: 10px; */
        display: block;
        margin-top: 20px;
    }
    .page-cover {
        display: flex;
        height: 100vh;
        width: 100%;
        align-items: flex-start;
        flex-direction: column;
        justify-content: center;
    }
    @media (max-width: 1250px) {
        .page-cover {
            display: block !important;
        }
    }
</style>

