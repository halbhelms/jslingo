<template>
<section class='home'>
  <section class='home-wrapper'>
   <h1>JsLingo Home</h1>
   <div class="next-question"><button>Next Question</button></div>
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

  methods: {},

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