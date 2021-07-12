<template>
<section class='valid-or-not'>
  <h2 class="title">Is this valid JavaScript?</h2>
  <div :class="question.displayAsCode.includes('question') ? 'pre' : ''" v-html="question.question">
  </div>
  <div class="answer-buttons">
    <button class="true" @click="evaluateAnswer(true)">Yes</button>
    <button class="false" @click="evaluateAnswer(false)">No</button>
  </div>
  <div class="result" v-if="result=='correct'">You're right!</div>
  <div class="result" v-if="result=='incorrect'">Sorry, no</div>
  <div class="explanation" v-html="explanation"></div>

  <div class="more-info" v-if="showMoreInfo">More info: <a :href="question.moreInfo">{{ question.moreInfo }}</a></div>
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
      "id": 638,
      "type": "ValidOrNot",
      "given": "",
      "question": "let options = {<br>&nbsp;&nbsp;shipping: 'overnight',<br>&nbsp;&nbsp;signature: 'required'<br>}<br><br>function shipment({shipping = '2d day', insurance = false, signature = 'optional'}) {<br>&nbsp;&nbsp;return `Package to be delivered ${shipping}. A signature is ${signature}. The package is ${insurance ? 'required' : 'not required'}`<br>}<br><br>console.log(shipment(options))",
      "displayAsCode": ["question"],
      "q1": "",
      "q2": "",
      "choices": [],
      "answer": true,
      "answers": [],
      "explanation": "",
      "moreInfo": "https://javascript.info/destructuring-assignment#smart-function-parameters",
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

button.true {
  background-color: green;
  color: white;
}

button.false {
  background-color: red;
  color: white;
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