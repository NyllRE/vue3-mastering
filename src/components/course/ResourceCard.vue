<script setup lang="ts">
import { ref } from 'vue';
import BasePrompt from '../UI/BasePrompt.vue';

const { prompt } = defineProps(['prompt'])

</script>

<template lang="pug">

BasePrompt.prompt(
   @clicked="$emit('togglePrompt')"
)
   template( #headers )
      h1 Add Resource
      p type in the resource and specify what it is for exactly

      hr

   FormKit(
      type="group"
      name="resource"
      :value="{ name: 'Javascript', description: 'The Mozilla guide' }"
   )
      FormKit(
         name="name"
         label="Name"
         type="text"
         validation="required"
      )

      FormKit(
         name="description"
         label="Description"
         type="textarea"
         help="(optional) specify what you want"
      )

      FormKit(
      name="url"
      label="url"
      type="url"
      placeholder="www.example.org"
      help="insert the url of the resource"
      validation="required|url"
   )

      FormKit(
         name="submit"
         type="submit"
      )

</template>

<style lang="scss">

.formkit-outer > *, .formkit-help {
   margin: 0 auto;
}

.prompt {
   h1 {
      font-weight: 700;
   }
   hr {
      margin: 1em 0 2em 0;
   }

   .formkit-input {
      color: var(--color-heading)
   }
   .formkit-help {
      color: var(--color-text)

   }

   [data-type="submit"] .formkit-input {
      background: rgb(45, 255, 185);
      color: black;
      transition: .2s;
      float: right
   }

}


</style> 