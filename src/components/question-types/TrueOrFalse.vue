<template>
  <section class='true-or-false'>
    <h2 class="title">True or False</h2>
    <h3 v-if="question.given" class="if-given">Given...</h3>
    <div class="given" v-if="question.given" :class="question.displayAsCode.includes('given') ? 'pre' : ''" v-html="question.given"></div>
    <div class="asserted">Asserted:</div>
    <div class="question" v-html="question.question"></div>
    <div class="answer-buttons">
      <button class="true" @click="evaluateAnswer(true)">True</button>
      <button class="false" @click="evaluateAnswer(false)">False</button>
    </div>
    <div class="result" v-if="answer=='yes'">&#x2705; YES! You are correct. The answer is {{ question.answer }}</div>
    <div class="result" v-if="answer=='no'">💣 Sorry, no. The correct answer is {{ question.answer }}</div>
    <div class="explanation" v-html="explanation"></div>

    <div class="more-info" v-if="showMoreInfo && question.moreInfo">More info: <a :href="question.moreInfo" target="new-window">{{ question.moreInfo }}</a></div>
  </section>
</template>

<script>
// imports here
 
export default {
  name: 'TrueOrFalse',
  description: 'A true or false question',

  components: {},

  props: {
    '_question': {
      type: Object,
      required: true,
    }
  },

  emits: ['next-question'],

  data() {
    return {
      answer: null,
      explanation: null,
      showMoreInfo: false,
      
      question: {
      "id": 641,
      "type": "TrueOrFalse",
      "given": "let auction = () => {<br>&nbsp;&nbsp;let acceptablePrice = 5000<br>&nbsp;&nbsp;let startingPrice = 2000<br>&nbsp;&nbsp;let currentPrice = startingPrice<br>&nbsp;&nbsp;return (amount) => {<br>&nbsp;&nbsp;&nbsp;&nbsp;if (currentPrice >= acceptablePrice) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 'Too late, loser'<br>&nbsp;&nbsp;&nbsp;&nbsp;} else {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;currentPrice = amount<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (currentPrice >= acceptablePrice) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 'You won'<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} else {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 'Bid too low. Try again.'<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;}<br>}",
      "question": "This code will fail as the nested inner function has no access to the outer function's variables",
      "displayAsCode": ["given"],
      "q1": "",
      "q2": "",
      "choices": [],
      "answer": false,
      "answers": [],
      "explanation": "",
      "moreInfo": "https://javascript.info/closure#nested-functions",
      "size": 0
    },
    }
  },

  methods: {
    evaluateAnswer(answer) {
      this.showMoreInfo = true
      if (answer == this.question.answer) {
        this.answer = 'yes'
        this.$store.dispatch('add_to_score', this.question.difficulty)
      } else {
        this.answer = 'no'
      }
      this.explanation = this.question.explanation
      // this.$emit('next-question')
    }
  },

 computed: {
   difficulty() {
    //  get the second digit, indicating the difficulty level
     return parseInt(this.question.id.toString().charAt(1))
   },
 },
}
</script>

<style scoped>
section.true-or-false {
  position: relative;
}

.asserted {
  text-align: left;
  margin-left: 20px;
  margin-top: 20px;
  font-size: 1.3rem;
  font-weight: 600;
}

.question {
  text-align: left;
  margin-left: 20px;
  line-height: 1rem;
}

.if-given {
  text-align: left;
  margin-left: 1rem;
}

.answer-buttons {
  margin-top: 20px;
}

button {
  width: 6rem;  
  height: 2.2rem;
  margin: 0 6px;
  font-size: 1.3rem;
  border-radius: 1rem;
}

button:hover {
  cursor: pointer;
}

button.true {
  background-color: green;
  color: white;
}

button.false {
  background-color: red;
  color: white;
}

.answer {
  margin-top: 20px;
}

.title {
  background-color: black;
  color: rgb(242, 133, 0);
  margin: 0;
  line-height: 4rem;
  font-size: 2rem;
}

</style>