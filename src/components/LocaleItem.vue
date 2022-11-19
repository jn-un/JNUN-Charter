<template>
  <div class="locale-body">
    <div class="text" v-for="(item, index) in localeList">
      <div style="cursor: pointer">{{ item.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { localeList } from '@/utils/locale'
</script>

<style scoped lang="scss">
  .locale-body {
    display: flex;
    align-items: center;
    height: 100%;
    .text {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      margin-right: 20px;
    }
  }
</style>
