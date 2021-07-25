<template>
<section class='multiple-choice'>
  <h2 class="title">Choose the correct response</h2>
  <!-- Display if question.given exists -->
  <h3 class="given" v-if="question.given">Given...</h3>
  <!-- Display given as HTML? :Yes -->
  <div class="given pre" v-if="question.displayAsCode.includes('given') && question.given" v-html="question.given"></div>
  <!-- Display given as HTML? :No -->
  <div v-else class="given">{{ question.given }}</div>
  <!-- Question -->
    <div class="question"><img src="./multiple-choice.png" class="question-icon" height="64" alt=""><span v-html="question.question"></span></div>
  <!-- Choices -->
  <div class="choices">
    <p class="choice" :class="question.displayAsCode.includes('choices') ? 'pre' : ''" v-for="(choice, i) in question.choices" :key="choice" @click="evaluateAnswer(i)" v-html="choice"></p>
  </div>
  <!-- Scoring -->
  <div class="result" v-if="result=='correct'">&#x2705; Yes! </div>
  <div class="result" v-if="result=='incorrect'">💣 Sorry, no </div>
  <div class="result" v-if="result" v-html="correctAnswer"></div>
  <!-- Explanation -->
  <div class="explanation" v-if="question.explanation" v-html="explanation"></div>
  <!-- More info -->
  <div class="more-info" v-if="question.moreInfo && showMoreInfo"><img src="./more-info.png" class="more-info-icon" height="64" alt=""> <a :href="question.moreInfo">{{ question.moreInfo }}</a></div>

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
      "id": 5316,
      "type": "MultipleChoice",
      "given": "let players = [<br>&nbsp;&nbsp;{name: 'Alice', rank: 5},<br>&nbsp;&nbsp;{name: 'Angel', rank: 1},<br>&nbsp;&nbsp;{name: 'Adrian', rank: 3},<br>&nbsp;&nbsp;{name: 'Astor', rank: 4},<br>&nbsp;&nbsp;{name: 'Allen', rank: 7},<br>&nbsp;&nbsp;{name: 'Albricht', rank: 6},<br>&nbsp;&nbsp;{name: 'Adam', rank: 2},<br>]<br><br>function sortPlayers(p1, p2) {<br>&nbsp;&nbsp;if (p1.rank > p2.rank) return 1<br>&nbsp;&nbsp;if (p1.rank < p2.rank) return -1<br>&nbsp;&nbsp;return 0<br>}<br><br>let rankedPlayers = players.sort(sortPlayers).map( player => player.name)",
      "question": "What is wrong with this code?",
      "displayAsCode": ["given"],
      "q1": "",
      "q2": "",
      "choices": ["arrays of objects cannot be sorted with the <pre>sort</pre> function", "<pre>rankedPlayers</pre> is invalid","the <pre>sortPlayers</pre> function does not sort by rank", "nothing"],
      "answer": 3,
      "answers": [],
      "explanation": "",
      "moreInfo": "",
      "size": 0
    }
    ,
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
       return `The correct answer is ${this.question.choices[this.question.answer]}`
     } else {
       return `The correct answer is ${this.question.choices[this.question.answer]}`
     }
   },

   styledQuestion() {
     return `<img class="question" src="./multiple-choice.png" height="64" /> ${this.question.question}`
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
  font-size: 1.2rem;
  line-height: 1.2rem;
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

img.more-info-icon {
  position: relative;
  top: 30px;
}

img.question-icon {
  position: relative;
  top: 24px;
  padding-right: 6px;
}

.question-mark {
  position: relative;
  top: 18px;
}

.title {
  background-color: black;
  color: rgb(242, 133, 0);
  margin: 0;
  line-height: 4rem;
  font-size: 2rem;
}

</style>