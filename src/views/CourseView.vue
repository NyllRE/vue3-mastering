<style scoped>
@media (min-width: 1024px) {
  .container {
    align-items: center;
  }
}

</style>

<template lang="pug">

.container 
  ul
    ResourceItem(
      v-for='source in storedResources'
      :key="source.id"
      :source="source")

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ResourceItem from '../components/course/ResourceItem.vue'
import { useVariableStore } from '@/stores/vars'

const store = useVariableStore()
store.change('Resources Project - Vue Course')

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
    description: 'The official Nuxt.js Documentation',
    link: 'https://nuxtjs.org'
  }
])

</script>