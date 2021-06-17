<template>
<section class='fill-in-blanks'>
  <section class='fill-in-blanks-wrapper'>
   <p class="pre" v-for="line in question.template" :key="line">{{ line }}</p>
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
      question: {
        type: 'FillInBlanks',
        question: 'Complete the Code',
        template: [
          'const colors = ["red", "green", "blue"]',
          'colors.|_|(color => {',
          `  console.log(color)`,
          '}'
        ],
        displayAsCode: true,
        difficulty: 2,
        answers: ['forEach']
      },
    }
  },

  methods: {},

 computed: {}
}
</script>

<style scoped>
section.fill-in-blanks {
  position: relative;
}
</style>