<template>
  <section class='true-or-false'>
    <h2 class="title">True or False</h2>
    <!-- Given -->
    <h3 v-if="question.given" class="if-given">Given...</h3>
    <div class="given" v-if="question.given" :class="question.displayAsCode.includes('given') ? 'pre' : ''" v-html="question.given"></div>
    <!-- Question -->
    <section class="question"><img class="question-mark" src="./scales.png" alt="" height="64"><div v-html="question.question"></div></section>
    <!-- Answer buttons -->
    <div class="answer-buttons">
      <button class="true" @click="evaluateAnswer(true)">True</button>
      <button class="false" @click="evaluateAnswer(false)">False</button>
    </div>
    <!-- Scoring -->
    <div class="result" v-if="answer=='yes'">&#x2705; YES! You are correct. The answer is {{ question.answer }}</div>
    <div class="result" v-if="answer=='no'">💣 Sorry, no. The correct answer is {{ question.answer }}</div>
    <!-- Explanation -->
    <div class="explanation" v-html="explanation" v-if="question.explanation"></div>
    <!-- More Info -->
    <div class="more-info" v-if="showMoreInfo && question.moreInfo"><img src="./more-info.png" height="64" alt="" class="more-info"><a :href="question.moreInfo" target="new-window">{{ question.moreInfo }}</a></div>
  </section>
</template>

<script>
// imports here
 
export default {
  name: 'TrueOrFalse',
  description: 'A true or false question',

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
      explanation: null,
      showMoreInfo: false,
      
      question: {
      "id": 936,
      "type": "TrueOrFalse",
      "given": "// HTML<br>&lt;ul><br>&nbsp;&nbsp;&lt;li data-plant-type=&quot;fruit&quot;>Tomato&lt;/li><br>&nbsp;&nbsp;&lt;li data-plant-type=&quot;vegetable&quot;>Potato&lt;/li><br>&nbsp;&nbsp;&lt;li data-plant-type=&quot;flower&quot;>Orchid&lt;/li><br>&nbsp;&nbsp;&lt;li data-plant-type=&quot;fruit&quot;>Strawberry&lt;/li><br>&nbsp;&nbsp;&lt;li data-plant-type=&quot;vegetable&quot;>Asparagas&lt;/li><br>&lt;/ul><br><br>// JS<br>let ul = document.querySelector('ul')<br><br>let newLi = document.createElement('li')<br>newLi.classList.add('fruit')<br>newLi.setAttribute('data-plant-type','fruit')<br>newLi.innerHTML = 'Peach'<br><br>ul.appendChild(newLi)",
      "question": "This will create a new <pre>li</pre> element",
      "displayAsCode": ["given"],
      "q1": "",
      "q2": "",
      "choices": [],
      "answer": true,
      "answers": [],
      "explanation": "",
      "moreInfo": "https://javascript.info/modifying-document#creating-an-element",
      "size": 0
    }
    ,
    }
  },

  methods: {
    evaluateAnswer(answer) {
      this.showMoreInfo = true
      if (answer == this.question.answer) {
        this.answer = 'yes'
        this.$store.dispatch('add_to_score', this.question.difficulty)
      } else {
        this.answer = 'no'
      }
      this.explanation = this.question.explanation
      // this.$emit('next-question')
    }
  },

 computed: {
   difficulty() {
    //  get the second digit, indicating the difficulty level
     return parseInt(this.question.id.toString().charAt(1))
   },
 },
}
</script>

<style scoped>
section.true-or-false {
  position: relative;
}

.asserted {
  text-align: left;
  margin-left: 20px;
  margin-top: 20px;
  font-size: 1.3rem;
  font-weight: 600;
}

.question {
  display: grid;
  grid-template-columns: 60px auto;
  gap: 12px;
  text-align: left;
  margin-top: 24px;
}

.question-mark {
  position: relative;
  top: -6px;
}

.if-given {
  text-align: left;
  margin-left: 1rem;
}

img.more-info {
  position: relative;
  top: 26px;
}

.answer-buttons {
  margin-top: 20px;
}

button {
  width: 6rem;  
  height: 2.2rem;
  margin: 0 6px;
  font-size: 1.3rem;
  border-radius: 1rem;
}

button:hover {
  cursor: pointer;
}

button.true {
  background-color: green;
  color: white;
}

button.false {
  background-color: red;
  color: white;
}

.answer {
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