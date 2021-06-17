<template>
<section class='fill-in-blanks'>
   <p class="pre" v-for="line in question.template" :key="line" v-html="line"></p>
</section>

<div class="form-control">
  <label for="answer">Answer</label>
  <input id="answer" v-on:keyup.enter="evaluateAnswer" v-model="answer"/>
</div>
</template>

<script>
// imports here
 
export default {
  name: 'FillInBlanks',
  description: '',

  components: {},

  props: {},

  data() {
    return {
      answer: null,
      question: {
        type: 'FillInBlanks',
        question: 'Complete the Code',
        template: [
          'const colors = ["red", "green", "blue"]',
          `colors.|_|(color => {`,
          `|t|console.log(color)`,
          '}'
        ],
        displayAsCode: true,
        difficulty: 2,
        answers: ['forEach']
      },
    }
  },

  methods: {
    evaluateAnswer() {
      this.question.answers.forEach( answer => {
        if (answer == this.answer) {
          this.$state.dispatch('add_to_score', this.question.difficulty)
        } else{
          console.log('wrong')
        }
      })
    },
  },

  mounted() {
    this.question.template.forEach((line, i) => {
      let tabIncluded = line.includes('|t|')
      let answerIncluded = line.includes('|_|')
      if (answerIncluded) {
        this.question.template[i] = line.replace('|_|', '__________')
      }
      if (tabIncluded) {
        this.question.template[i] = line.replace('|t|', '&nbsp;&nbsp;')
      }
    }) 
  },

 computed: {}
}
</script>

<style scoped>
section.fill-in-blanks {
  position: relative;
}

.pre {
  margin-top: 0;
  margin-bottom: 0;
  line-height: 2.2rem;
}

.answer {
  width: 200px;
  border-bottom: 1px solid grey;
  display: inline-block;
}

abbr {
  display: inline-block;
}


</style>