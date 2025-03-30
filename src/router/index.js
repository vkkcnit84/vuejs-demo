import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
// import InfiniteScrollView from '@/views/InfiniteScrollView.vue'
// import SearchView from '@/views/SearchView.vue'

const routes = [
  { path: '/', component: DashboardView },
  { path: '/infinite-scroll', component: () => import('../views/InfiniteScrollView.vue') },
  { path: '/search', component: () => import('../views/SearchView.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
