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
      "id": 5223,
      "type": "MultipleChoice",
      "given": "let studentGrades = [<br>&nbsp;&nbsp;{name: 'Ana', grade: 96},<br>&nbsp;&nbsp;{name: 'Bob', grade: 92},<br>&nbsp;&nbsp;{name: 'Cal', grade: 84},<br>&nbsp;&nbsp;{name: 'Dan', grade: 89},<br>&nbsp;&nbsp;{name: 'Ell', grade: 78},<br>&nbsp;&nbsp;{name: 'Fay', grade: 88},<br>&nbsp;&nbsp;{name: 'Gen', grade: 91},<br>]<br><br>function convertNumberToGrade(studentGrade) {<br>&nbsp;&nbsp;let slg = studentGrade<br>&nbsp;&nbsp;slg.letterGrade = 'F'<br>&nbsp;&nbsp;if (studentGrade.grade > 59) slg.letterGrade ='D'<br>&nbsp;&nbsp;if (studentGrade.grade > 69) slg.letterGrade = 'C'<br>&nbsp;&nbsp;if (studentGrade.grade > 79) slg.letterGrade = 'B'<br>&nbsp;&nbsp;if (studentGrade.grade > 89) slg.letterGrade = 'A'<br>&nbsp;&nbsp;return slg<br>}<br><br>let studentLetterGrades = studentGrades.???(convertNumberToGrade)",
      "question": "What should we replace <em>???</em> with in order to create a new array derived from apply the <pre>convertNumberToGrade</pre> function to <pre>studentGrades</pre>?",
      "displayAsCode": ["given"],
      "q1": "",
      "q2": "",
      "choices": ["filter", "forEach", "where", "map"],
      "answer": 3,
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



</style>