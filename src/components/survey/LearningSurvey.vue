<template lang="pug">
  
section
  basecard
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
        basebutton Submit

</template>

<script>
export default {
  data() {
    return {
      enteredName: '',
      chosenRating: null,
      invalidInput: false,
    };
  },
  emits: ['survey-submit'],
  methods: {
    submitSurvey() {
      if (this.enteredName === '' || !this.chosenRating) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;

      this.$emit('survey-submit', {
        userName: this.enteredName,
        rating: this.chosenRating,
      });

      this.enteredName = '';
      this.chosenRating = null;
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