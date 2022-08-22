<script lang="ts" setup>

const props: any = defineProps(['visibility'])

</script>


<template lang="pug">

transition( name="slide-fade" )
   .prompt( v-if="visibility" )
      slot

</template>


<style lang="scss" scoped>

.prompt {
   background: var(--color-background);
   box-shadow: 0 0 20em 2em #000;

   border-radius: 2em;
   padding: 2em;

   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);

   width: 70%;
   height: 70%;
}

</style>