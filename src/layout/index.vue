<template>
  <div class="layout">
    <div class="layout__aside">
      <LayoutSidebar />
    </div>
    <div class="layout__main">
      <div class="layout__header">
        <LayoutHeader />
      </div>
      <div class="layout__content">
        <RouterView />
      </div>
      <div class="layout__footer">
        <LayoutFooter />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import LayoutHeader from './components/Header.vue'
  import LayoutFooter from './components/Footer.vue'
  import LayoutSidebar from './components/Sidebar.vue'
</script>

<style scoped lang="scss">
  @import './index.scss';
</style>
