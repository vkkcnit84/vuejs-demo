import { createRouter, createWebHashHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'

const routes = [
  { path: '/', component: DashboardView },
  { path: '/infinite-scroll', component: () => import('../views/InfiniteScrollView.vue') },
  { path: '/search', component: () => import('../views/SearchView.vue') },
]

const router = createRouter({
  history: createWebHashHistory(), // 🔥 Change this to hash mode
  routes,
})

export default router
