
<script lang="ts" setup>

import { ref } from 'vue'
import ResourceItem from '#/course/ResourceItem.vue'
import { useVariableStore } from '@/stores/vars'
import ResourcePrompt from '#/course/ResourcePrompt.vue'


useVariableStore().change('Resources Project - Vue Course')

// const storedResources = resourcesStore()
// const resources = ref(storedResources.get)
// console.log(storedResources.get);

const resources = ref([
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

const addResource = (data: formData) => {
  togglePrompt()
  resources.value.push({
    id: data.name,
    title: data.name,
    description: data.description,
    link: data.url
  })
}

interface formData {
  name: string,
  description: string,
  url: string
}

</script>



<template lang="pug">

.container 
  ul
    li.center
      BaseCard.card( @click="togglePrompt" )
        .plus +

    TransitionGroup( name="slide-fade-right" )
      component(
        :is="ResourceItem"
        v-for='source in resources'
        :key="source.id"
        :source="source")


  Transition( name="size-fade" )
    component(
      :is="ResourcePrompt"
      v-if="prompt"
      @togglePrompt="togglePrompt"
      @addedResource="addResource"
    )

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
  height: 65vh;
  overflow: scroll;

  li {
    list-style-type: none;
    
    .center {
      margin: 0 auto;
      text-align: center;
      width: 50%;
      transition: .2s;

      .card {
        transition: .2s;
        transform: scale(.8);

        &:hover {
          background: rgb(133, 133, 133);
          border: 1px solid #0000;
          color: black;
        }

        .plus {
          font-size: 2em;
        }
      }
    }
  }
}



.size-fade-leave-active, .size-fade-enter-active {
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



.slide-fade-right-leave-active, .slide-fade-right-enter-active {
  transition: 0.5s;
}

.slide-fade-right-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}

.slide-fade-right-enter-from {
  transform: translateX(30px);
  opacity: 0;
}
</style>