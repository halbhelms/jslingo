<template>
<section class='question-wrapper'>
  <section class='question-wrapper-wrapper'>
   <h1>Question</h1>
   <slot></slot>
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
    return {}
  },

  methods: {},

 computed: {}
}
</script>

<style scoped>
section.question-wrapper {
  position: relative;
}
</style>