<template>
<section class='fill-in-blanks'>
  <section class='fill-in-blanks-wrapper'>
   <textarea v-model="attempt" placeholder="Enter code here..."></textarea>
   <button @click="evaluateAnswer">Check</button>
  </section>
</section>
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
      attempt: null,
      question: {
        type: 'FullCode',
        question: "Set <pre>x</pre> to 'Hello'",
        displayAsCode: [],
        difficulty: 2,
        answer: 'Hello'
      },
    }
  },

  methods: {
    evaluateAnswer() {
      let _answer = eval(this.attempt)
      console.log(_answer)
    },
  },

 computed: {}
}
</script>

<style scoped>
section.fill-in-blanks {
  position: relative;
}
</style>