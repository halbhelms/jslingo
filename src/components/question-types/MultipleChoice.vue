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

  <div class="result" v-if="result=='correct'">&#x2705; Yes! </div>
  <div class="result" v-if="result=='incorrect'">💣 Sorry, no </div>
  <div class="result" v-if="result" v-html="correctAnswer"></div>

  <div class="explanation" v-html="explanation"></div>

  <div class="more-info" v-if="question.moreInfo && showMoreInfo">More info: <a :href="question.moreInfo">{{ question.moreInfo }}</a></div>

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
      showMoreInfo: false,
      
      question:  {
      "id": 640,
      "type": "MultipleChoice",
      "given": "let auction = () => {<br>&nbsp;&nbsp;let acceptablePrice = 5000<br>&nbsp;&nbsp;let startingPrice = 2000<br>&nbsp;&nbsp;let currentPrice = startingPrice<br>&nbsp;&nbsp;return (amount) => {<br>&nbsp;&nbsp;&nbsp;&nbsp;if (currentPrice >= acceptablePrice) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 'Too late, loser'<br>&nbsp;&nbsp;&nbsp;&nbsp;} else {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;currentPrice = amount<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (currentPrice >= acceptablePrice) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 'You won'<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} else {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 'Bid too low. Try again.'<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;}<br>}",
      "question": "This code is an example of...",
      "displayAsCode": ["given"],
      "q1": "",
      "q2": "",
      "choices": ["an ES6 <pre>class</pre>", "a curried function", "a closure", "a higher order invariant (HOI)"],
      "answer": 2,
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
     if (this.question.isplayAsCode.includes('given')) return "pre"
   },

   correctAnswer() {
     if (this.question.displayAsCode.includes('choices')) {
       return `${this.question.choices[this.question.answer]}`
     } else {
       return `${this.question.choices[this.question.answer]}`
     }
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