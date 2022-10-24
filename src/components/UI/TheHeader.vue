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
   top: 0rem;
   background: #fff1;
   backdrop-filter: blur(3px);
   z-index: 99;
   
   @media (prefers-color-scheme: dark) {
      background: #0001
   }
   
   .wrapper {
      height: 16vh;

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
         border-left: 2px solid var(--color-border);

         &:first-of-type {
            border: 0;
         }
         &.router-link-exact-active {
            color: var(--color-text);
   
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

   .logo {
      margin: 0 2rem 0 0;
   }

   header {
      display: flex;
      /* place-items: flex-start; */
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
