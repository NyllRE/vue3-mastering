<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

li {
  list-style-type: none;
}
</style>

<template lang="pug">

.about
  h1 This is the Resource Project's index page

ul
  li(v-for='source in storedResources' :key="source.id")
    h1 {{ source.title }}
    p {{ source.description }}
    a( :href="source.link" ) {{ source.link }}
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const storedResources = ref([
  {
    id: 'vue',
    title: 'Official Vue Guide',
    description: 'The official Vue.js Documentation',
    link: 'https://vuejs.org'
  },
  {
    id: 'official-guide',
    title: 'Official NuxtJS Guide',
    description: 'The official Vue.js Documentation',
    link: 'https://vuejs.org'
  }
])

</script>