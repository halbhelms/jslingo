import { createStore } from 'vuex'
import { randomIntFromIntervals } from '../utils/index.js'

export default createStore({
  state: {
    questions: {
      trueOrFalse: [
        {
          type: 'TrueOrFalse',
          question: 'JavaScript is a strongly-typed language',
          answer: false
        }
      ]
    }
  },
  mutations: {
  },
  getters: {
    randomQuestion: state => {
      const randomIndex = randomIntFromIntervals(0, Object.keys(state.questions).length)
      const randomCategory = state.questions
      const category = state.questions.keys(randomIndex)
    }
  },
  actions: {
  },
  modules: {
  }
})
