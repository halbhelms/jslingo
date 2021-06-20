import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FillBlank from '../components/question-types/FillBlank'
import AllMixedUp from '../components/question-types/AllMixedUp'
import ValidOrNot from '../components/question-types/ValidOrNot'
import TrueOrFalse from '../components/question-types/TrueOrFalse'
import MultipleChoice from '../components/question-types/MultipleChoice'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/fillblank',
    name: 'FillBlank',
    component: FillBlank
  },
  {
    path: '/allmixedup',
    name: 'AllMixedUp',
    component: AllMixedUp
  },
  {
    path: '/validornot',
    name: 'ValidOrNot',
    component: ValidOrNot
  },
  {
    path: '/trueorfalse',
    name: 'TrueOrFalse',
    component: TrueOrFalse
  },
  {
    path: '/multiplechoice',
    name: 'MultipleChoice',
    component: MultipleChoice
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
