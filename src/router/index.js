import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FillBlanksSingular from '../components/question-types/FillBlanksSingular'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'FillBlanksSingular',
    component: FillBlanksSingular
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
