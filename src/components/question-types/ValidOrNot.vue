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
      "id": 6249,
      "type": "ValidOrNot",
      "given": "",
      "question": "function Book(title, author) {<br>&nbsp;&nbsp;this.title = title<br>&nbsp;&nbsp;this.author = author<br>&nbsp;&nbsp;this.getDetails = () => {<br>&nbsp;&nbsp;&nbsp;&nbsp;return `${this.title} by ${this.author}`<br>&nbsp;&nbsp;}<br>}<br><br>let pfom = new Book('A Prayer for Owen Meany', 'John Irving')<br><br>p(pfom.getDetails())",
      "displayAsCode": ["question"],
      "q1": "",
      "q2": "",
      "choices": [],
      "answer": true,
      "answers": [""],
      "explanation": "",
      "moreInfo": "https://www.dofactory.com/javascript/function-objects",
      "size": 0
    }
    ,
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

.pre {
  background-color: whitesmoke;
  padding: 4px;
  margin-right: 18px;
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