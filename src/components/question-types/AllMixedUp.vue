<template>
<!-- <div class="temp pre" v-html="question.ordered.join(' ')"></div> -->
<section class='all-mixed-up'>
  <section class='all-mixed-up-wrapper'>
    <div class="given" :class="question.displayAsCode.includes('given') ? 'pre' : ''" v-html="question.given"></div>
    <div class="question" v-html="question.question"></div>
    <div class="pre">
      <div class="answer" v-for="portion in answer" :key="portion" v-html="portion">
       
      </div>
    </div>
    <div>
      <div class="mixed" v-for="el in question.mixed" :key="el" @click="selectEl(el)" v-html="el"></div>
    </div>
    <div class="results">{{ results }}</div>
    <div class="more-info" v-html="question.moreInfo"></div>
  </section>
</section>
</template>

<script>
// imports here
 
export default {
  name: 'AllMixedUp',
  description: '',

  components: {},

  props: {},

  data() {
    return {
      answer: [],
      results: null,

      question: {
      "id": 5217,
      "type": "AllMixedUp",
      "given": "let flowers = ['roses', 'petunias', 'daffodils']<br>flowers.splice(-1, 0, 'irises', 'orchids')",
      "question": "Arrange the flowers to be in the same order they will be in <pre>flowers</pre> after this code is run",
      "displayAsCode": ["given"],
      "mixed": ["petunias", "orchids", "roses", "irises", "daffodils"],
      "ordered": ["roses", "petunias", "irises", "orchids", "daffodils"],
      "choices": [],
      "answer": "",
      "answers": [],
      "explanation": "",
      "moreInfo": "https://javascript.info/array-methods#splice",
      "size": 0
    }
    }
  },

  methods: {
    selectEl(el) {
      // push element into this.answer
      this.answer.push(el)
      // remove element from _question.mixed
      // this.question.mixed = this.question.mixed.filter(mixedEl => mixedEl != el )
      // check to see if the number of answers == number of _question.ordered
      if (this.question.ordered.length == this.answer.length) {
        this.evaluateAnswer()
      }
      // if so call evaluateAnswer
    },

    evaluateAnswer() {
      const answers = this.answer.join('')
      const ordered = this.question.ordered.join('')
      if (answers.replace(/\s+/, '') == ordered.replace(/\s+/, '')) {
        this.results = "Correct"
      } else {
        this.results = "Incorrect"
      }
    },
  },

 computed: {}
}
</script>

<style scoped>
section.all-mixed-up {
  position: relative;
}

.mixed {
  display: inline-block;
  border: 1px solid black;
  width: fit-content;
  border-radius: 20px;
  margin-right: 6px;
  background-color: rgb(57,120,180);
  color: white;
  padding-left: 8px;
  padding-right: 8px;
  line-height: 2rem;
  font-size: 1.4rem;
}

.mixed:hover {
  cursor: pointer;
}

.answer {
  display: inline-block;
  margin-right: 1ch;
}
</style>