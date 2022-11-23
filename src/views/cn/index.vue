<template>
  <div class="md-body">
    <cover class="index-cover" style="">
      <img
        src="https://raw.githubusercontent.com/rhyme-qing/picture-bed/main/outher/202211160214555.svg"
        width="322.79"
      />
    </cover>

    <div class="page-cover">
      <div v-html="markdownhtml"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import markdown from '/@/utils/markdown.js'
  import testMd from './cn.md?raw'

  const markdownhtml = markdown.render(testMd)
</script>

<style scoped>
  .md-body {
    column-rule-style: groove;
    columns: 2;
    column-rule-color: rgb(14 0 0 / 8%);
    height: 100%;
    column-rule-width: 1px;
    column-gap: 3%;
    padding-bottom: 0 !important;
    text-align: justify;
  }
  @media (max-width: 1250px) {
    img {
      display: none;
    }
    body {
      overflow: auto;
    }
    cover {
      height: 0;
    }
  }
  cover {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  img {
    height: 100%;
  }
  .page-cover {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    align-content: center;
  }
</style>
