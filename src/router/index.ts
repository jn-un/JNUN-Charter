import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const router = createRouter({
  history: createWebHistory(),
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/cn',
      name: 'cn',
      component: Layout,
      redirect: '/cn/index',
      children: [
        {
          path: 'index',
          name: 'Index',
          component: () => import('@/views/cn/index.vue')
        },
        {
          path: 'member',
          name: 'Member',
          component: () => import('@/views/cn/member.vue'),
          children: []
        }
      ]
    }
  ]
})

export default router
