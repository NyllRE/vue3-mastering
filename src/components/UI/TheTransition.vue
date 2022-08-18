<script setup lang="ts">
console.log('br');

</script>


<template lang="pug">

.slot-holder
   transition( name="slide-fade" )
      slot

</template>

<style lang="scss">

.slot-holder {
   width: 40vw;
}

.slide-fade-enter-active {
   transition: all 0.3s 0.4s;
}

.slide-fade-leave-active {
   transition: all 0.3s;
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