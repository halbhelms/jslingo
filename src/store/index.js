import { createStore } from 'vuex'
import { randomIntFromInterval, randomObjectProperty } from '../utils/index.js'

export default createStore({
  state: {
    score: 0,
    questions: {
      syntax: [
        {
          type: 'ValidOrNot',
          question: "alert: 'Hello'",
          difficulty: 1,
          answer: false
        }
      ],
      overview: [
        {
          type: 'TrueOrFalse',
          question: 'JavaScript is a strongly-typed language',
          difficulty: 1,
          answer: false
        },
        {
          type: 'TrueOrFalse',
          question: 'JavaScript is a case-sensitive language',
          difficulty: 1,
          answer: true
        },
      ],
    }
  },
  mutations: {
    ADD_TO_SCORE(state, points) {
      state.score += points
    }
  },
  getters: {
    randomQuestion: state => {
      // get a random category from questions
      const randomCategory = randomObjectProperty(state.questions)
      console.log('randomCategory', randomCategory)
      // get a random question from random category
      console.log('randomInt', randomIntFromInterval(0, Object.keys(state.questions).length-1))
      const randomQuestion =  randomCategory[randomIntFromInterval(0, randomCategory.length-1)]
      console.log('randomQuestion', randomQuestion)
      return randomQuestion
    }
  },
  actions: {
    add_to_score({ commit }, points) {
      this.commit('ADD_TO_SCORE', points)
    }
  },
  modules: {
  }
})
