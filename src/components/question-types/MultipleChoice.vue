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
      "id": 422,
      "type": "MultipleChoice",
      "given": "let report = {<br>&nbsp;&nbsp;age: 0,<br>&nbsp;&nbsp;set age(age) {<br>&nbsp;&nbsp;&nbsp;&nbsp;if ( age > 0 && age < 120 ) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.age = age<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;}<br>}<br><br>report.age = 42",
      "question": "What does this code do?",
      "displayAsCode": ["given"],
      "q1": "",
      "q2": "",
      "choices": ["Sets <pre>report.age</pre> to 42", "Throws a run-time exception", "Does nothing as it violates the age check"],
      "answer": 1,
      "answers": [],
      "explanation": "You cannot have the property name the same as your <pre>get</pre> property.",
      "moreInfo": "https://javascript.info/property-accessors",
      "size": 4
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