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
      "id": 9331,
      "type": "MultipleChoice",
      "given": "// HTML<br>&lt;form action=&quot;&quot; name=&quot;myForm&quot;><br>&nbsp;&nbsp;&lt;h3>And now for a form...&lt;/h3><br>&nbsp;&nbsp;&lt;input type=&quot;text&quot; id=&quot;hmmm&quot;> &lt;label for=&quot;hmmm&quot;> Paste away, fools!&lt;/label><br>&lt;/form><br><br>// JS<br>hmmm.placeholder = 'Paste away'",
      "question": "What will this code do?",
      "displayAsCode": ["given"],
      "q1": "",
      "q2": "",
      "choices": ["Nothing &mdash; it will be ignored", "cause an error", "Set <em>Paste away</em> as the placeholder"],
      "answer": 2,
      "answers": [],
      "explanation": "",
      "moreInfo": "https://javascript.info/events-change-input#events-cut-copy-paste",
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