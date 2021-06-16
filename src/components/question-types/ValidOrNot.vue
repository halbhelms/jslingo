<template>
<section class='valid-or-not'>
  <h2>Is this valid JavaScript?</h2>
  <div class="pre">
    {{ _question.question }}
  </div>
  <div class="answer-buttons">
    <button class="true" @click="evaluateAnswer(true)">Yes</button>
    <button class="false" @click="evaluateAnswer(false)">No</button>
  </div>
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
    }
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
    }
  },

 computed: {}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400&display=swap');

section.valid-or-not {
  position: relative;
}

.pre {
  font-family: 'Fira Code';
  background-color: rgb(241,243,244);
  color: maroon;
  line-height: 2rem;
  font-size: 1.3rem;
  margin-bottom: 12px;
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