<template>
<section class='multiple-choice'>
  <h2>Choose the correct response</h2>
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

  <div class="result" v-if="result=='correct'">Yes! You are correct</div>
  <div class="result" v-if="result=='incorrect'">Sorry, no</div>

  <div class="explanation" v-html="explanation"></div>

  <div class="more-info" v-if="question.moreInfo"><a :href="question.moreInfo">{{ question.moreInfo }}</a></div>

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
      "id": 4216,
      "type": "MultipleChoice",
      "given": "const amadeus = {<br>&bnsp;&bnsp;name: 'Amadeus',<br>&bnsp;&bnsp;color: 'black',<br>&bnsp;&bnsp;tail: 'short',<br>}<br><br>let sayHi = function() {<br>&bnsp;&bnsp;return `Hi, I'm ${this.name} and I'm a ${this.color} cat`<br>}<br><br>amadeus.sayHi = sayHi<br><br>console.log(amadeus.sayHi())",
      "question": "What will running this code produce?",
      "displayAsCode": ["given"],
      "q1": "",
      "q2": "",
      "choices": ["Hi, I'm Amadeus and I'm a black cat", "Hi, I'm undefined and I'm a undefined cat", "Error, as <pre>amadeus</pre> is declared as a <pre>const</pre>","Nothing you can't assign a function to an object after it's been declared. It will be ignored."],
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



</style>