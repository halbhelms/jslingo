<template>
<section class='multiple-choice'>
  <section class='multiple-choice-wrapper'>
    <h2>{{ _question.question }}</h2>
    <div class="choices">
      <p class="choice" :class="_question.displayAsCode ? 'pre' : ''" v-for="(choice, i) in _question.choices" :key="choice" @click="evaluateAnswer(i)">{{ choice }}</p>
    </div>
  </section>
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
    },
  },

  emits: ['next-question'],

  data() {
    return {}
  },

  methods: {
    evaluateAnswer(answer) {
      if (answer == this._question.answer) {
        this.$store.dispatch('add_to_score', this._question.difficulty)
      }
      this.$emit('next-question')
    },
  },

 computed: {}
}
</script>

<style scoped>
section.multiple-choice {
  position: relative;
}

@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400&display=swap');

.choice {
  text-align: left;
  padding-left: 40px;
  cursor: pointer;
}

.pre {
  font-family: 'Fira Code';
  background-color: rgb(241,243,244);
  color: maroon;
  line-height: 2rem;
  font-size: 1.3rem;
  margin-bottom: 12px;
}
</style>