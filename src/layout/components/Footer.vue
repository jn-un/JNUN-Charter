<template>
  <footer>
    <LocaleItem />
    <Logo />
  </footer>
</template>

<script setup lang="ts">
  import Logo from '@/components/Logo.vue'
  import LocaleItem from '@/components/LocaleItem.vue'
</script>

<style scoped lang="scss">
  footer {
    height: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #e3e3e3;
  }
</style>
