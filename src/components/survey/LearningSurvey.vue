<template lang="pug">

section
  BaseCard
    h2 How was you learning experience?
    form(@submit.prevent='submitSurvey')
      .form-control
        label(for='name') Your Name
        input#name(type='text' name='name' v-model.trim='enteredName')
      h3 My learning experience was ...
      .form-control
        input#rating-poor(type='radio' value='poor' name='rating' v-model='chosenRating')
        label(for='rating-poor') Poor
      .form-control
        input#rating-average(type='radio' value='average' name='rating' v-model='chosenRating')
        label(for='rating-average') Average
      .form-control
        input#rating-great(type='radio' value='great' name='rating' v-model='chosenRating')
        label(for='rating-great') Great
      p(v-if='invalidInput') One or more input fields are invalid. Please check your provided data.
      div
        BaseButton Submit

</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      enteredName: '',
      chosenRating: null,
      invalidInput: false,
    };
  },
  emits: ["pushed"],
  methods: {
    submitSurvey() {
      if (this.enteredName === '' || !this.chosenRating) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;


      axios.post('https://basic-testing-backend-default-rtdb.europe-west1.firebasedatabase.app/surveys.json', {
        name: this.enteredName,
        rating: this.chosenRating,
      });

      this.enteredName = '';
      this.chosenRating = null;
      this.$emit('pushed')
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type='text'] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
</style>