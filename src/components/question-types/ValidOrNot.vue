<template>
<section class='valid-or-not'>
  <h2>Is this valid JavaScript?</h2>
  <div :class="question.displayAsCode.includes('question') ? 'pre' : ''" v-html="question.question">
  </div>
  <div class="answer-buttons">
    <button class="true" @click="evaluateAnswer(true)">Yes</button>
    <button class="false" @click="evaluateAnswer(false)">No</button>
  </div>
  <div class="result" v-if="result=='correct'">You're right!</div>
  <div class="result" v-if="result=='incorrect'">Sorry, no</div>
  <div class="explanation" v-html="explanation"></div>

  <div class="more-info"> <a :href="question.moreInfo">{{ question.moreInfo }}</a></div>
</section>
</template>

<script>
// imports here
 
export default {
  name: '',
  description: '',

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
      result: null,
      explanation: null,
      question: {
      "id": 3110,
      "type": "ValidOrNot",
      "given": "",
      "question": "if (6 > 5) return true",
      "q1": "",
      "q2": "",
      "choices": [],
      "answer": true,
      "answers": [""],
      "explanation": "If you can fit the results of the if condition on the same line, you don't need to use <pre>{}</pre> to wrap the <pre>return true</pre>. That said, this is a bad idea likely to cause trouble down the line. Use curly braces with your if conditions.",
      "displayAsCode": ["question", "answer"],
      "moreInfo": "https://javascript.info/ifelse",
      "size": 0
    },
    }
  },

  methods: {
    evaluateAnswer(answer) {
      if (answer == this.question.answer) {
        this.result = 'correct'
        this.$store.dispatch('add_to_score', this.difficulty)
      } else {
        this.result = "incorrect"
      }
      this.explanation = this.question.explanation
      // this.$emit('next-question')
    },
  },

 computed: {
   difficulty() {
    //  get the second digit, indicating the difficulty level
     return parseInt(this.question.id.toString().charAt(1))
   },
 }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400&display=swap');

section.valid-or-not {
  position: relative;
}


button {
  width: 6rem;  
  height: 2.2rem;
  margin: 0 6px;
  font-size: 1.3rem;
  border-radius: 1rem;
}

button.true {
  background-color: green;
  color: white;
}

button.false {
  background-color: red;
  color: white;
}

.result {
  margin-top: 20px;
}
</style>