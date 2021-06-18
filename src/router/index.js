import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FillBlank from '../components/question-types/FillBlank'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'FillBlank',
    component: FillBlank
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
