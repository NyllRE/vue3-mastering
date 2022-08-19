<style scoped lang="scss">
@media (min-width: 1024px) {
  .container {
    align-items: center;
  }
}
ul {
  display: flex;
  flex-direction: column;
  justify-content: center;

  li {
    list-style-type: none;
    
    .plus {
      font-size: 2em;
    }
  }
}

</style>

<template lang="pug">

.container 
  ul
    li
      BaseCard( style='text-align: center; width: 50%' )
        .plus +
    ResourceItem(
      v-for='source in storedResources'
      :key="source.id"
      :source="source")

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ResourceItem from '../components/course/ResourceItem.vue'
import { useVariableStore } from '@/stores/vars'
import BaseCard from '../components/UI/BaseCard.vue'

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