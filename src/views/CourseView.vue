
<script lang="ts" setup>

import { ref } from 'vue'
import ResourceItem from '#/course/ResourceItem.vue'
import BasePrompt from '#/UI/BasePrompt.vue'
import { useVariableStore } from '@/stores/vars'


useVariableStore().change('Resources Project - Vue Course')

const storedResources = ref([
  {
    id: 'vue',
    title: 'Vue Guide',
    description: 'The official Vue.js Documentation',
    link: 'https://vuejs.org'
  },
  {
    id: 'official-guide',
    title: 'NuxtJS Guide',
    description: 'The official Nuxt.js Documentation',
    link: 'https://nuxtjs.org'
  }
])

const prompt = ref(false)

const togglePrompt = () => {
  prompt.value = !prompt.value
}

</script>



<template lang="pug">

.container 
  ul
    li.center
      BaseCard.card( @click="togglePrompt" )
        .plus +
    ResourceItem(
      v-for='source in storedResources'
      :key="source.id"
      :source="source")

  BasePrompt.prompt( :visibility="prompt" @click="togglePrompt" ) hai lol

</template>




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

.center {
  margin: 0 auto;
  text-align: center;
  width: 50%;
  transition: .2s;
}

.card {
  transition: .2s;
  transform: scale(.8);
}
.card:hover {
  background: rgb(133, 133, 133);
  border: 0px solid #0000;
    transform: scale(.9);
  color: black
}


</style>