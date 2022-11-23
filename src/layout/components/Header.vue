<template>
  <header>
    <Logo />
    <LocaleItem />
  </header>
</template>

<script setup lang="ts">
  import Logo from '/@/components/Logo.vue'
  import LocaleItem from '/@/components/LocaleItem.vue'
</script>

<style scoped lang="scss">
  header {
    height: 60px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e3e3e3;
  }
</style>
