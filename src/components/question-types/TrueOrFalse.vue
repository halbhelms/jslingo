<template>
  <section class='true-or-false'>
    <h2>True or False</h2>
    <h3 v-if="question.given">Given...</h3>
    <div class="given" v-if="question.given" :class="question.displayAsCode.includes('given') ? 'pre' : ''" v-html="question.given"></div>
    <div class="question" v-html="question.question"></div>
    <div class="answer-buttons">
      <button class="true" @click="evaluateAnswer(true)">True</button>
      <button class="false" @click="evaluateAnswer(false)">False</button>
    </div>
    <div class="result" v-if="answer=='yes'">YES! You are correct.</div>
    <div class="result" v-if="answer=='no'">Sorry, no</div>
    <div class="explanation" v-html="explanation"></div>

    <div class="more-info" v-if="question.moreInfo"><a :href="question.moreInfo" target="new-window">{{ question.moreInfo }}</a></div>
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
      question:     {
      "id": 1146,
      "type": "TrueOrFalse",
      "given": "let beginning = 42<br />let ending = \"24\"<br />console.log(beginning + ending)",
      "question": "Prints 66 to the console",
      "answer": false,
      "explanation": "Since \"ending\" is a string, the plus operator will be used in concatenation mode: the console will print out \"4224\"",
      displayAsCode: ["given"]
    },
    }
  },

  methods: {
    evaluateAnswer(answer) {
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
</style>