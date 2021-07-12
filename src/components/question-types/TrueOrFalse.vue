<template>
  <section class='true-or-false'>
    <h2 class="title">True or False</h2>
    <h3 v-if="question.given" class="if-given">Given...</h3>
    <div class="given" v-if="question.given" :class="question.displayAsCode.includes('given') ? 'pre' : ''" v-html="question.given"></div>
    <div class="question" v-html="question.question"></div>
    <div class="answer-buttons">
      <button class="true" @click="evaluateAnswer(true)">True</button>
      <button class="false" @click="evaluateAnswer(false)">False</button>
    </div>
    <div class="result" v-if="answer=='yes'">YES! You are correct. The answer is {{ question.answer }}</div>
    <div class="result" v-if="answer=='no'">Sorry, no. The correct answer is {{ question.answer }}</div>
    <div class="explanation" v-html="explanation"></div>

    <div class="more-info" v-if="showMoreInfo && moreInfo">More info: <a :href="question.moreInfo" target="new-window">{{ question.moreInfo }}</a></div>
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
      "id": 8218,
      "type": "TrueOrFalse",
      "given": "let ana = {<br>&nbsp;&nbsp;name: 'Ana Quay',<br>&nbsp;&nbsp;age: 29<br>}<br><br>let company = {<br>&nbsp;&nbsp;name: 'Davis Tools',<br>&nbsp;&nbsp;ceo: ana<br>}<br><br>console.log(company.ceo.address?.state)",
      "question": "The console will log an error, as <pre>ana</pre> has no <pre>address</pre>",
      "displayAsCode": ["given"],
      "q1": "",
      "q2": "",
      "choices": [],
      "answer": false,
      "answers": [],
      "explanation": "",
      "moreInfo": "",
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