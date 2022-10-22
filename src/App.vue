<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '#/UI/TheHeader.vue'

</script>


<template lang="pug">

routerView( v-slot="{ Component }" )
   TheHeader
   transition( name='slide-fade' mode='out-in' )
      component.slot-holder( :is="Component" )

</template>

<style lang="scss">

.slide-fade-leave-active, .slide-fade-enter-active {
   transition: 0.3s;
}

.slide-fade-leave-to {
   // transform: translateY(-20px);
   transform: scale(.9);
   opacity: 0;
}

.slide-fade-enter-from {
//   transform: translateY(20px);
   transform: scale(1.1);
   opacity: 0;
}

@media (min-width: 1024px) {
   .slot-holder {
      width: 40vw;
   }
}

@media (max-width: 1024px) {
   .slide-fade-leave-active, .slide-fade-enter-active {
      transition: 0.3s;
   }

   .slide-fade-leave-to {
      transform: translateX(20px);
      opacity: 0;
   }

   .slide-fade-enter-from {
      transform: translateX(-20px);
      opacity: 0;
   }
}

</style>
