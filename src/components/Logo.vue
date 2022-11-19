<script setup lang="ts"></script>

<template>
  <div class="logo-body">
    <img class="logo" src="@/assets/logo.svg" alt="logo" />
    <div class="text">
      <span>JOINT NOWADAYS</span> <br />
      <span>EDITORIAL ORGANIZATION</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .logo-body {
    display: flex;
    align-items: center;
    height: 100%;
    .logo {
      width: 40px;
      height: 32px;
      margin-right: 8px;
    }
    .text {
      font-style: normal;
      font-weight: 400;
      font-size: 9px;
      line-height: 13px;
    }
  }
</style>
