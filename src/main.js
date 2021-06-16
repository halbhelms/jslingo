import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import components for global registration
import QuestionWrapper from '@/components/QuestionWrapper'

const app = createApp(App)
app.component('QuestionWrapper', QuestionWrapper)
app
  .use(store)
  .use(router)
  .mount('#app')
