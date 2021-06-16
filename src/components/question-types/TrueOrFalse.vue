<template>
  <section class='true-or-false'>
    <h2>True or False</h2>
    <h3>{{ _question.question }}</h3>
    <div class="answer-buttons">
      <button class="true" @click="evaluateAnswer(true)">True</button>
      <button class="false" @click="evaluateAnswer(false)">False</button>
    </div>
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
    }
  },

  methods: {
    evaluateAnswer(answer) {
      if (answer == this._question.answer) {
        this.$store.dispatch('add_to_score', this._question.difficulty)
      }
      this.$emit('next-question')
    }
  },

 computed: {},
}
</script>

<style scoped>
section.true-or-false {
  position: relative;
}

button {
  width: 6rem;  
  height: 2.2rem;
  margin: 0 6px;
  font-size: 1.3rem;
  border-radius: 1rem;
}

button.true {
  background-color: green;
  color: white;
}

button.false {
  background-color: red;
  color: white;
}
</style>