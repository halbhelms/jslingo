<template>

<section class='valid-or-not'>
  <h2 class="title">Is this valid JavaScript?</h2>
  <!-- Code -->
  <section class="is-valid">
    <img class="is-valid" src="./yes-no.png" height="64" alt="" />
    <div class="question" :class="question.displayAsCode.includes('question') ? 'pre' : ''" v-html="question.question"></div>
  </section>
  <!-- Yes/No buttons -->
  <div class="answer-buttons">
    <button class="true" @click="evaluateAnswer(true)">Yes</button>
    <button class="false" @click="evaluateAnswer(false)">No</button>
  </div>
  <div class="result" v-if="result=='correct'">You're right!</div>
  <div class="result" v-if="result=='incorrect'">Sorry, no</div>
  <div class="correct-answer" v-if="result">The correct answer is <pre>{{ correctAnswer}}</pre></div>
  <!-- Explanation -->
  <div class="explanation" v-if="question.explanation" v-html="explanation"></div>
  <!-- More info -->
  <div class="more-info" v-if="showMoreInfo && question.moreInfo"><img src="./more-info.png" height="64" alt="" class="more-info-icon"> <a :href="question.moreInfo" target="new-win">{{ question.moreInfo }}</a></div>
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
      showMoreInfo: false,

      question:  {
      "id": 5311,
      "type": "ValidOrNot",
      "given": "",
      "question": "let MRassays = [<br>&nbsp;&nbsp;0.276,<br>&nbsp;&nbsp;0.149,<br>&nbsp;&nbsp;0.475,<br>&nbsp;&nbsp;0.294,<br>&nbsp;&nbsp;0.092,<br>&nbsp;&nbsp;0.410,<br>&nbsp;&nbsp;0.096,<br>&nbsp;&nbsp;0.413,<br>&nbsp;&nbsp;0.176<br>]<br><br>function numericCompare(a, b) {<br>&nbsp;&nbsp;if (a > b) return 1<br>&nbsp;&nbsp;if (b > a) return -1<br>&nbsp;&nbsp;return 0<br>}<br><br>let sortedAssays = MRassays.sort(numericCompare)<br>let trimmedAssays = []<br><br>for (let i=1; i&lt;sortedAssays.length-1; i++) {<br>&nbsp;&nbsp;trimmedAssays.push(sortedAssays[i])<br>}<br><br>let avg = trimmedAssays.reduce((total, assay) => total += assay)/trimmedAssays.length",
      "displayAsCode": ["question"],
      "q1": "",
      "q2": "",
      "choices": [],
      "answer": true,
      "answers": [],
      "explanation": "",
      "moreInfo": "https://javascript.info/array",
      "size": 0
    },
    }
  },

  methods: {
    evaluateAnswer(answer) {
      this.showMoreInfo = true
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

   correctAnswer() {
     return this.question.answer ? 'Yes' : 'No'
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

.answer-buttons {
  margin-top: 24px;
}

button.true {
  background-color: green;
  color: white;
}

button.false {
  background-color: red;
  color: white;
}

.correct-answer {
  font-size: 1.3rem;
}

.is-valid {
  display: grid;
  grid-template-columns: 60px auto;
  gap: 12px;
}

img.is-valid {
  position: relative;
  top: 16px;
}

img.more-info-icon {
  position: relative;
  top: 28px;
}

.more-info {
  margin-top: -30px;
}

.question {
  margin: 20px 0 0 20px;
}

.result {
  margin-top: 20px;
}

.title {
  background-color: black;
  color: rgb(242, 133, 0);
  margin: 0;
  line-height: 4rem;
  font-size: 2rem;
}
</style>