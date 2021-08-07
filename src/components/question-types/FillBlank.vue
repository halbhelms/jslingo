<template>
<h2 class="title">Fill in the blank</h2>
<section class='fill-in-blanks'>
  <section class="explain">
    <img class="fill-blank-icon" src="./fill-blank.png" alt="">
    <div class="given" :class="question.displayAsCode.includes('given') ? 'pre' : ''" v-html="question.given"></div>
  </section>
  <div class="body">
     <span v-html="question.q1" :class="question.displayAsCode.includes('q1') ? 'pre' : ''"/>
     <input type="text" class="answer" :class="question.displayAsCode.includes('answer') ? 'pre' : ''" :size="question.size" v-on:keyup.enter="evaluateAnswer" v-model="answer" />
     <span v-html="question.q2" :class="question.displayAsCode.includes('q2') ? 'pre' : ''" />
  </div>

   <div class="result" v-if="result=='correct'">&#x2705; Yes, you are correct!</div>
  <div class="result" v-if="result=='incorrect'">💣 Sorry, no</div>

  <div class="correct-answer" v-if="showAnswer">The correct answer is <pre>{{ question.answers[0] }}</pre></div>
  <!-- Explanation -->
  <div class="explanation" v-if="question.explanation" v-html="explanation"></div>
  <!-- More info -->
  <div class="more-info" v-if="showMoreInfo && question.moreInfo"> <a :href="question.moreInfo" target="new-window"><img src="./more-info.png" class="more-info-icon" height="64" alt="">{{ question.moreInfo }}</a></div>
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
      showMoreInfo: false,
      
      question: {
      "id": 5137,
      "type": "FillBlank",
      "given": "Fill in the blank to determine if <pre>cats</pre> is an array",
      "question": "",
      "displayAsCode": ["q1","q2","answer"],
      "q1": "let cats = ['Amadeus', 'Cody', 'Waffle']<br>",
      "q2": "",
      "choices": [],
      "answer": "",
      "answers": ["Array.isArray(cats)"],
      "explanation": "",
      "moreInfo": "https://javascript.info/array-methods#array-isarray",
      "size": 19
    }
    ,
    }
  },

  methods: {
    evaluateAnswer() {
      this.showMoreInfo = true
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
  top: 12px;
}

section.explain {
  display: grid;
  grid-template-columns: 60px auto;
  gap: 12px;
  margin-bottom: 20px;
}

.given {
  position: relative;
  top: 16px;
}

img.fill-blank-icon {
  position: relative;
  top: -12px;
}

img.more-info-icon {
  position: relative;
  top: 30px;
}


.title {
  background-color: black;
  color: rgb(242, 133, 0);
  margin: 0;
  line-height: 4rem;
  font-size: 2rem;
}


.if-given {
  text-align: left;
  margin-left: 1rem;
}

 .pre, pre {
  font-family: 'Fira Code';
  color: maroon;
  font-size: 1.3rem;
}

.answer {
  /* width: 200px; */
  border: none;
  border-bottom: 1px dashed green;
  /* background-color: rgb(241,243,244); */
  /* font-family: 'Fira Code'; */
  color: green;
  font-size: 1.3rem;
  margin-left: 2px;
}

.answer:active, .answer:focus {
  outline: 0;
}

</style>