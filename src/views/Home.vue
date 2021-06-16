<template>
<section class='home'>
  <section class='home-wrapper'>
    <h1>JsLingo Home</h1>
    <div class="score">Your score: {{ $store.state.score }}</div>
    <div class="next-question"><button @click="nextQuestion">Next Question</button></div>
    
    <component v-if="question" :is="question.type" :_question="question" @next-question="nextQuestion"/>
  </section>
</section>
</template>

<script>
// imports here
 
export default {
  name: '',
  description: '',

  components: {},

  props: {},

  data() {
    return {
      question: null,
    }
  },

  methods: {
    nextQuestion() {
      console.log('nextQuestion executed')
      this.question = this.$store.getters.randomQuestion
    }
  },

  created() {
    this.question = this.$store.getters.randomQuestion
  },

 computed: {}
}
</script>

<style scoped>
section.home {
  position: relative;
}
</style>