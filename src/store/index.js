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
          answer: false,
          category: 'syntax'
        },
        {
          type: 'MultipleChoice',
          question: "Which one of these will print to the browser console?",
          choices: ['print("hello")','console("hello")','console.log("hello")', 'log("hello")'],
          displayAsCode: true,
          difficulty: 1,
          answer: 2
        },
        {
          type: 'FillInBlanks',
          question: 'Complete the Code',
          template: [
            'const colors = ["red", "green", "blue"]',
            'colors.|_|(color => {',
            `&nbsp;&nbsp;console.log(color)`,
            '}'
          ],
          displayAsCode: true,
          difficulty: 2,
          answers: ['forEach']
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
