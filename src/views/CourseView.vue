
<script lang="ts" setup>

import { ref } from 'vue'
import ResourceItem from '#/course/ResourceItem.vue'
import BasePrompt from '#/UI/BasePrompt.vue'
import { useVariableStore } from '@/stores/vars'
import ResourceCard from '../components/course/ResourceCard.vue'


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

  transition( name="size-fade" )
    component( :is="ResourceCard" v-if="prompt" @togglePrompt="togglePrompt")

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
  border: 1px solid #0000;
  color: black;
}


.size-fade-enter-active {
  transition: 0.3s;
}

.size-fade-leave-active {
  transition: 0.3s;
}

.size-fade-leave-to {
  transform: translate(-50%, -50%) scale(.8);
  opacity: 0;
}

.size-fade-enter-from {
  transform: translate(-50%, -50%) scale(.8);
  opacity: 0;
}
</style>