<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '#/UI/TheHeader.vue'

</script>


<template lang="pug">

TheHeader

routerView( v-slot="{ Component }" )
  transition( name='slide-fade' mode='out-in' )
    component.slot-holder( :is="Component" )


</template>

<style lang="scss">

.slot-holder {
   width: 40vw;
}

.slide-fade-enter-active {
   transition: 0.3s;
}

.slide-fade-leave-active {
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
</style>