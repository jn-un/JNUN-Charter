<template>
  <div class="home-logo" id="home">
    <div class="home-logo_main">
      <img
        src="https://raw.githubusercontent.com/rhyme-qing/picture-bed/main/outher/202211140505428.svg"
        alt="logo"
      />
      <div class="home-logo_title">
        <h1>Joint Now Charter</h1>
      </div>
      <ui class="home-language">
        <li><a href="">US</a></li>
        <li><a href="">JP</a></li>
        <li><a href="" @click="handlePush('/cn')">CN</a></li>
        <li><a href="">TW</a></li>
        <li><a href="">RU</a></li>
        <li><a href="">BR</a></li>
        <li><a href="">HU</a></li>
        <li><a href="">KR</a></li>
      </ui>
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()

  function handlePush(path) {
    router.push(path)
  }
</script>

<style scoped lang="scss">
  #home {
    text-align: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .home-logo img {
    width: 281.99px;
  }
  .home-logo .home-logo_main .home-logo_title {
    border-bottom: 5px solid #007fff;
  }
  .home-logo .home-logo_main .home-logo_title h1 {
    padding-bottom: 15px;
  }
  .home-language {
    list-style: none;
    margin-top: 20px;
    display: block;
    width: 100%;
    border: 2px solid #007fff;
  }
  .home-language li {
    font-size: 20px;
    display: contents;
  }
  a {
    color: #007fff !important;
    padding: 1px;
  }
</style>
