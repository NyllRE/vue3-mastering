<style scoped>
header {
   line-height: 1.5;
   max-height: 100vh;
}

.logo {
   display: block;
   margin: 0 auto 2rem;
}
h1 {
   display:block;
   width: 100%;
   text-align: center;
}
nav {
   width: auto;
   font-size: 12px;
   text-align: center;
   margin: 1em 0;
}

nav a.router-link-exact-active {
   color: var(--color-text);
}

nav a.router-link-exact-active:hover {
   background-color: transparent;
}

nav a {
   display: inline-block;
   padding: 0 1rem;
   border-left: 2px solid var(--color-border);
}

nav a:first-of-type {
   border: 0;
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


<template lang="pug">

header
   .wrapper
      h1
         BaseTransition {{ store.title }}
      nav
         RouterLink( to="/help" ) help
         RouterLink( to="/course" ) Course 

</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { useVariableStore } from '@/stores/vars'

const store = useVariableStore()


</script>