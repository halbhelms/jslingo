<template>
  <QuestionWrapper>
    <section class='true-or-false'>
      
    </section>
  </QuestionWrapper>
</template>

<script>
// imports here
 
export default {
  name: 'TrueOrFalse',
  description: 'A true or false question',

  components: {},

  props: {
    'question': {
      type: Object,
      required: true,
    }
  },

  data() {
    return {}
  },

  methods: {},

 computed: {}
}
</script>

<style scoped>
section.true-or-false {
  position: relative;
}
</style>