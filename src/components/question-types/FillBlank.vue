<template>
<h2>{{ _question.question }}</h2>
<section class='fill-in-blanks'>
   <div class="pre"><span v-html="_question.q1" /><input type="text" class="answer" :size="_question.size" v-on:keyup.enter="evaluateAnswer" v-model="answer" /><span v-html="_question.q2" /></div>
</section>

</template>

<script>
// imports here
 
export default {
  name: 'FillInBlank',
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
    return {
      answer: null,
    }
  },

  methods: {
    evaluateAnswer() {
      this._question.answers.forEach( answer => {
        if (answer == this.answer) {
          this.$state.dispatch('add_to_score', this._question.difficulty)
        } else{
          console.log('wrong')
        }
        this.$emit('next-question')
      })
    },
  },

  mounted() {

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
  /* width: 200px; */
  border: none;
  border-bottom: 2px solid grey;
  background-color: rgb(241,243,244);
  font-family: 'Fira Code';
  color: green;
  font-size: 1.3rem;
  font-weight: 600;
}

.answer:active, .answer:focus {
  outline: 0;
}

</style>