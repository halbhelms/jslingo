import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import components for global registration
import FullCode from '@/components/question-types/FullCode'
import FillBlank from '@/components/question-types/FillBlank'
import MultipleChoice from '@/components/question-types/MultipleChoice'
import TrueOrFalse from '@/components/question-types/TrueOrFalse'
import ValidOrNot from '@/components/question-types/ValidOrNot'
import AllMixedUp from '@/components/question-types/AllMixedUp'

const app = createApp(App)
app.component('FullCode', FullCode)
app.component('FillBlank', FillBlank)
app.component('MultipleChoice', MultipleChoice)
app.component('TrueOrFalse', TrueOrFalse)
app.component('ValidOrNot', ValidOrNot)
app.component('AllMixedUp', AllMixedUp)

app
  .use(store)
  .use(router)
  .mount('#app')
