<template lang="pug">

section#learning-survey
  BaseCard
    h2 How was you learning experience?
    //-
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
    .learning-survey
      FormKit(
         type="form" 
         submit-label="submit"
         ref="myForm"
         :actions="false"
         @submit="submitSurvey"

      )
         FormKit(
            name="name"
            label="Your name"
            type="text"
            validation="required"
            v-model="enteredName"
         )

         FormKit(
            label="How likely would you suggest this course to others?"
            v-model="value"
            type="range"
            step=".5"
            min="1"
            max="5"
            :help="'Rating: ' + value"
         )
         StarRating

         FormKit(
            name="submit"
            type="submit"
            label="submit"
         )

</template>

<script lang="ts">
import axios from 'axios'
import StarRating from './StarRating.vue';
export default {
  data() {
    return {
      enteredName: '',
      value: 3
    };
  },
  emits: ["pushed"],
  methods: {
    async submitSurvey() {

      // await axios.post('https://basic-testing-backend-default-rtdb.europe-west1.firebasedatabase.app/surveys.json', {
      //   name: this.enteredName,
      //   rating: this.chosenRating,
      // });

      this.enteredName = '';
      this.value = 3;
      // this.$emit('pushed')
    },
  },
};
</script>

<style lang="scss">
#learning-survey h2 {
  font-weight: 700;
}
.learning-survey * {
  color: var(--color-text)
}

// input[type='text'] {
//   display: block;
//   width: 20rem;
//   margin-top: 0.5rem;
// }

</style>