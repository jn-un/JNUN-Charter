import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Layout from '/@/layout/index.vue'

const router = createRouter({
  history: createWebHistory('/'),
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('/@/views/Home.vue')
    },
    {
      path: '/cn',
      name: 'Cn',
      component: Layout,
      redirect: '/cn/index',
      meta: {
        title: '中文'
      },
      children: [
        {
          path: 'index',
          name: 'Index',
          component: () => import('/@/views/cn/index.vue'),
          meta: {
            title: '中文'
          }
        }
      ]
    }
  ] as unknown as RouteRecordRaw[]
})

export default router
