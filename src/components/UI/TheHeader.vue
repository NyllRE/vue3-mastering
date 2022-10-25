<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { useVariableStore } from '@/stores/vars'

const store = useVariableStore()

</script>


<template lang="pug">

header
   .wrapper
      h1
         BaseTransition {{ store.title }}
      nav
         RouterLink( to="/help" ) help
         RouterLink( to="/course" ) Course 
         RouterLink( to="/survey" ) Survey 

</template>



<style scoped lang="scss">
header {
   line-height: 1.5;
   max-height: 100vh;
   position: sticky;
   top: 0;
   padding: 1rem 0;
   background: #fff1;
   backdrop-filter: blur(3px);
   z-index: 99;
   
   @media (prefers-color-scheme: dark) {
      background: #0001
   }
   
   .wrapper {
      h1 {
         display:block;
         width: 100%;
         text-align: center;
      }
   }
   nav {
      width: auto;
      font-size: 12px;
      text-align: center;
      margin: 1em 0;

      a {
         display: inline-block;
         padding: 0 1rem;
         border-left: 2px solid var(--color-border); //=> these act like separators

         //=> this will remove the first border of the nav links
         //=>> this way the borders looks like separators
         &:first-of-type {
            border: 0;
         }

         &.router-link-exact-active {
            color: var(--color-text);
   
            //=> keeps the active link bg "inactive" visually
            &:hover {
              background-color: transparent;
           }
         }
      }
      
   }
   
   
   
}

@media (min-width: 1024px) {
   header {
      display: flex;
      place-items: center;
      width: 40vw;
      /* padding-right: calc((var(--section-gap) / 2) - 3em); */
   }

   header {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
   }

   nav {
      text-align: center;
      /* margin-left: -1rem; */
      font-size: 1rem;

      padding: 1rem 0;
      /* margin-top: 1rem; */
   }
}
</style>
