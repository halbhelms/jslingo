<template>
  <section class='true-or-false'>
    <h2 class="title">True or False</h2>
    <!-- Given -->
    <h3 v-if="question.given" class="if-given">Given...</h3>
    <div class="given" v-if="question.given" :class="question.displayAsCode.includes('given') ? 'pre' : ''" v-html="question.given"></div>
    <!-- Question -->
    <section class="question"><img class="question-mark" src="./scales.png" alt="" height="64"><div v-html="question.question"></div></section>
    <!-- Answer buttons -->
    <div class="answer-buttons">
      <button class="true" @click="evaluateAnswer(true)">True</button>
      <button class="false" @click="evaluateAnswer(false)">False</button>
    </div>
    <!-- Scoring -->
    <div class="result" v-if="answer=='yes'">&#x2705; YES! You are correct. The answer is {{ question.answer }}</div>
    <div class="result" v-if="answer=='no'">💣 Sorry, no. The correct answer is {{ question.answer }}</div>
    <!-- Explanation -->
    <div class="explanation" v-html="explanation" v-if="question.explanation"></div>
    <!-- More Info -->
    <div class="more-info" v-if="showMoreInfo && question.moreInfo"><img src="./more-info.png" height="64" alt="" class="more-info"><a :href="question.moreInfo" target="new-window">{{ question.moreInfo }}</a></div>
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
      "id": 5244,
      "type": "TrueOrFalse",
      "given": "let MRassays = [<br>&nbsp;&nbsp;0.276,<br>&nbsp;&nbsp;0.149,<br>&nbsp;&nbsp;0.475,<br>&nbsp;&nbsp;0.294,<br>&nbsp;&nbsp;0.092,<br>&nbsp;&nbsp;0.410,<br>&nbsp;&nbsp;0.096,<br>&nbsp;&nbsp;0.413,<br>&nbsp;&nbsp;0.176<br>]<br><br>function compare(a, b) {<br>&nbsp;&nbsp;if (a > b) return 1<br>&nbsp;&nbsp;if (a < b) return -1<br>&nbsp;&nbsp;return 0<br>}<br><br>let sortedArray = MRassays.sort(compare)",
      "question": "<pre>sortedArray</pre> is a sorted array of the elements within <pre>MRassays</pre>",
      "displayAsCode": ["given"],
      "q1": "",
      "q2": "",
      "choices": [],
      "answer": true,
      "answers": [],
      "explanation": "",
      "moreInfo": "https://javascript.info/array-methods#sort-fn",
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
  display: grid;
  grid-template-columns: 60px auto;
  gap: 12px;
  text-align: left;
  margin-top: 24px;
}

.question-mark {
  position: relative;
  top: -6px;
}

.if-given {
  text-align: left;
  margin-left: 1rem;
}

img.more-info {
  position: relative;
  top: 26px;
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