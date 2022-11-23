<template>
  <aside>
    <div class="logo">
      <img src="../../assets/logo.svg" alt="logo" />
    </div>
    <div v-for="(item, index) in sidebar">
      <div class="level level-1">{{ item.text }}</div>
      <div class="level level-2" v-if="item.children" v-for="(child, childIndex) in item.children">
        <div @click="handlePush(child)">{{ child.text }}</div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
  import { sidebar } from '/@/utils/sidebar'
  import { useRouter } from 'vue-router'
  import { onMounted } from 'vue'

  const router = useRouter()

  onMounted(() => {
    console.log(sidebar)
  })

  function handlePush(child?: any) {
    if (child.link) {
      router.push(child.link)
    }
  }
</script>

<style scoped lang="scss">
  aside {
    padding: 40px 36px;

    .level {
      cursor: pointer;
    }
    .level-1 {
      font-weight: 700;
      font-size: 16px;
      color: #000000;
      margin-top: 10px;
    }
    .level-2 {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      margin-left: 18px;
      margin-top: 10px;
    }

    .logo {
      display: flex;
      justify-content: center;
      margin-bottom: 42px;
      img {
        width: 102px;
        height: 83px;
      }
    }
  }
</style>
