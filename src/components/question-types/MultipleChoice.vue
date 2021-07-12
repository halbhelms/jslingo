<template>
<section class='multiple-choice'>
  <h2 class="title">Choose the correct response</h2>
  <!-- Display if question.given exists -->
  <h3 class="given" v-if="question.given">Given...</h3>
  <!-- Display question.given as HTML? :Yes -->
  <div class="given pre" v-if="question.displayAsCode.includes('given') && question.given" v-html="question.given"></div>
  <!-- Display question.given as HTML? :No -->
  <div v-else class="given">{{ question.given }}</div>
  
  <div class="question" v-html="question.question"></div>

  <div class="choices">
    <p class="choice" :class="question.displayAsCode.includes('choices') ? 'pre' : ''" v-for="(choice, i) in question.choices" :key="choice" @click="evaluateAnswer(i)" v-html="choice"></p>
  </div>

  <div class="result" v-if="result=='correct'">Yes! The correct answer is {{  }}</div>
  <div class="result" v-if="result=='incorrect'">Sorry, no</div>

  <div class="explanation" v-html="explanation"></div>

  <div class="more-info" v-if="question.moreInfo">More info: <a :href="question.moreInfo">{{ question.moreInfo }}</a></div>

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
    },
  },

  emits: ['next-question'],

  data() {
    return {
      result: null,
      explanation: null,
      
      question:  {
      "id": 6142,
      "type": "MultipleChoice",
      "given": "function sum(a,b) {<br>&nbsp;&nbsp;return a + b<br>}<br><br>log(sum(1,2,3))",
      "question": "What will be logged to the console?",
      "displayAsCode": ["given"],
      "q1": "",
      "q2": "",
      "choices": ["3","6","123","error &mdash; argument number mismatch with parameter number"],
      "answer": 0,
      "answers": [],
      "explanation": "",
      "moreInfo": "",
      "size": 0
    },
    }
  },

  methods: {
    evaluateAnswer(answer) {
      if (answer == this.question.answer) {
        this.$store.dispatch('add_to_score', this.difficulty)
        this.result = 'correct'
      } else {
        this.result = 'incorrect'
      }
      this.explanation = this.question.explanation
      // this.$emit('next-question')
    },
  },

 computed: {
   givenClass() {
     if (this.displayAsCode.includes('given')) return "pre"
   },

   difficulty() {
    //  get the second digit, indicating the difficulty level
     return parseInt(this.question.id.toString().charAt(1))
   },
 }
}
</script>

<style scoped>
section.multiple-choice {
  position: relative;
}

@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400&display=swap');

.choices {
  margin-top: 40px;
  font-size: 1.5rem;
}

.choice {
  text-align: left;
  padding-left: 40px;
}

.choice:hover {
  cursor: pointer;
  color: green;
  font-weight: 600;
}

pre {
  font-family: 'Fira Code';
  color: maroon;
}

.title {
  background-color: black;
  color: rgb(242, 133, 0);
  margin: 0;
  line-height: 4rem;
  font-size: 2rem;
}

</style>