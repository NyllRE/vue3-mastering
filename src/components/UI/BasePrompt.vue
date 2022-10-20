<script lang="ts" setup>
import BaseButton from './BaseButton.vue'
import { Teleport } from 'vue'


</script>


<template lang="pug">


.prompt
   BaseButton.btn( mode="light-red" @click="$emit('clicked')" ) X
   .base-data
      slot( name='headers' )
         i please add your headers
   
   .content
      slot
         i please add your content

</template>


<style lang="scss" scoped>

.prompt {
   background: var(--color-background);
   box-shadow: 0 0 20em 30em #0009;

   border-radius: 0em;
   padding: 2em;

   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);

   width: 100%;
   height: 100%;
   // overflow: scroll;

   .btn {
      float: right
   }

   .base-data {
      width: 90%;
      height: 30%;
      position: sticky; 
   }

   .content {
      overflow-y: auto;
      height: 70%;
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