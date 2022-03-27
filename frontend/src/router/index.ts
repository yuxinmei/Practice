import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
  }
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'notFound',
  //   component: () => import('@/views/not-found/not-found.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
