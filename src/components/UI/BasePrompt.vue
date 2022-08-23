<script lang="ts" setup>
import { ref } from 'vue'
import BaseButton from './BaseButton.vue'

// const props: any = defineProps(['title', 'description'])

</script>


<template lang="pug">

//- Teleport( to='body' )

.prompt
   BaseButton.btn( mode="light-red" @click="$emit('clicked')" ) X
   .base-data
      slot( name='headers' )
         i please add your headers
   
   slot
      i please add your content

</template>


<style lang="scss" scoped>

.prompt {
   background: var(--color-background);
   box-shadow: 0 0 20em 2em #000;

   border-radius: 0em;
   padding: 2em;

   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);

   width: 100%;
   height: 100%;

   .btn {
      float: right
   }

   .base-data {
      width: 90%
   }
}

@media (min-width: 1024px) {
   .prompt {
      width: 70%;
      height: 70%;
      border-radius: 2em;
   }
}

</style>