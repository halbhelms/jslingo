import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import components for global registration
import FillBlanksMultiple from '@/components/question-types/FillBlanksMultiple'
import FillBlanksSingular from '@/components/question-types/FillBlanksSingular'
import MultipleChoice from '@/components/question-types/MultipleChoice'
import TrueOrFalse from '@/components/question-types/TrueOrFalse'
import ValidOrNot from '@/components/question-types/ValidOrNot'

const app = createApp(App)
app.component('FillBlanksMultiple', FillBlanksMultiple)
app.component('FillBlanksSingular', FillBlanksSingular)
app.component('MultipleChoice', MultipleChoice)
app.component('TrueOrFalse', TrueOrFalse)
app.component('ValidOrNot', ValidOrNot)

app
  .use(store)
  .use(router)
  .mount('#app')
