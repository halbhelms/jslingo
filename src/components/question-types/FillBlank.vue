<template>
<h2>Fill in the blank</h2>
<section class='fill-in-blanks'>
  <h3 v-if="question.given">Given...</h3>
  <div class="given" :class="question.displayAsCode.includes('given') ? 'pre' : ''" v-html="question.given"></div>
  <div class="body">
     <span v-html="question.q1" :class="question.displayAsCode.includes('q1') ? 'pre' : ''"/>
     <input type="text" class="answer" :class="question.displayAsCode.includes('answer') ? 'pre' : ''" :size="question.size" v-on:keyup.enter="evaluateAnswer" v-model="answer" />
     <span v-html="question.q2" :class="question.displayAsCode.includes('q2') ? 'pre' : ''" />
  </div>

   <div class="result" v-if="result=='correct'">Yes, you are correct!</div>
  <div class="result" v-if="result=='incorrect'">Sorry, no</div>

  <div class="correct-answer" v-if="showAnswer">The correct answer is <pre>{{ question.answers[0] }}</pre></div>

  <div class="explanation" v-html="explanation"></div>

   <div class="more-info" v-if="question.moreInfo"><a :href="question.moreInfo" target="new-window">{{ question.moreInfo }}</a></div>
</section>

</template>

<script>
// imports here
 
export default {
  name: 'FillInBlank',
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
      answer: null,
      result: null,
      explanation: null,
      showAnswer: false,
      question: {
      "id": 3120,
      "type": "FillBlank",
      "given": "<pre>let x = Math.random()</pre><br>If x is less than 0.33, log 'small'. <br>If x is greater than or equal to 0.33 but less than 0.66, log 'medium'. <br>If neither of these conditions are true, log 'large'. <br>Use curly braces <pre>{}</pre> within if conditions.",
      "question": "",
      "q1": "let x = Math.random()<br>if (x < 0.33) { console.log('small')}<br>",
      "q2": "<br>else {console.log('large')}",
      "choices": [],
      "answer": "",
      "answers": ["else if (x >=0.33 && x < 0.66) {console.log('medium')}","else if (x >=0.33 && x < 0.66) {console.log(\"medium\")}"],
      "explanation": "<pre>else if</pre> is your friend here.",
      "displayAsCode": [ "answer", "q1", "q2"],
      "moreInfo": "",
      "size": 60
    },
    }
  },

  methods: {
    evaluateAnswer() {
      let rightAnswer = false
      this.question.answers.forEach( answer => {
        console.log(answer.replace(/\s+/g, ''))
        console.log(this.answer.replace(/\s+/g, ''))
        if (answer.replace(/\s+/g, '') == this.answer.replace(/\s+/g, '')) {
          this.$store.dispatch('add_to_score', this.difficulty)
          rightAnswer = true
        } 
        this.showAnswer = true;
        this.explanation = this.question.explanation
        // this.$emit('next-question')
      })
      if (rightAnswer) {
        this.result = 'correct'
      } else {
        this.result = 'incorrect'
      }
    }
    ,
  },

  mounted() {

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
section.fill-in-blanks {
  position: relative;
  font-size: 1.3rem;
}



.given {
  font-size: 1.3rem;
  margin-bottom: 20px;
}

.answer {
  /* width: 200px; */
  border: none;
  border-bottom: 1px dashed green;
  /* background-color: rgb(241,243,244); */
  /* font-family: 'Fira Code'; */
  color: green;
  font-size: 1.3rem;
  font-weight: 600;
  margin-left: 2px;
}

.answer:active, .answer:focus {
  outline: 0;
}

pre {
  font-family: 'Fira Code';
  color: maroon;
}

</style>