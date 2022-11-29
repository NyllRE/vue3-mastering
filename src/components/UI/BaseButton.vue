<style lang="scss">
button {
   display: block;
   background: #0000;
   border: 1px solid var(--color-border);
   color: var(--color-text);
   border-radius: .3em;
   margin: .5em 0;
   padding: .5em 1em;
   transition: .1s;

   &:hover {
      background: #78ff69;
      color: black
   }
}

.light-red {
   &:hover {
      background: rgb(255, 144, 144);
      color: black
   }
}
.light-blue {
   &:hover {
      background: rgb(144, 181, 255);
      color: black
   }
}
</style>


<template lang="pug">

button( :class="mode || 'light-blue'" )
   slot

</template>

<script lang="ts" setup>
import { defineProps } from 'vue';


const props = defineProps<{
   mode: string
}>()

</script>