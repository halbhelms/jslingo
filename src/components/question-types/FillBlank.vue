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
      "id": 533,
      "type": "FillBlank",
      "given": "Fill in the blank to sort <pre>numbers</pre> using the <pre>compare</pre> function",
      "question": "",
      "displayAsCode": ["q1","q2","answer"],
      "q1": "function compare(a, b) {<br>&nbsp;&nbsp;if (a > b) return 1<br>&nbsp;&nbsp;if (a == b) return 0<br>&nbsp;&nbsp;if (a < b) return -1<br>}<br><br>let numbers = [1, 35, 5, 25, 15]<br>",
      "q2": "",
      "choices": [],
      "answer": "",
      "answers": ["numbers.sort(compare)"],
      "explanation": "",
      "moreInfo": "https://javascript.info/array-methods#sort-fn",
      "size": 22
    },
    }
  },

  methods: {
    evaluateAnswer() {
      let rightAnswer = false
      this.question.answers.forEach( answer => {
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