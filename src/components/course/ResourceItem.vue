<style scoped lang="scss">
li {
   list-style-type: none;
   display: flex;
   flex-direction: row;
   width: 100%;

   .details {
      float: left;

      a.view {
         color: rgb(251, 255, 0);
      }
   }
   .btn {
      float: right;
   }
}


</style>

<template lang="pug">

li
   BaseCard
      .details
         h3 {{ source.title }}
         p {{ source.description }}
         a( :href="source.link" ) {{ source.link }}
         br
         a.view( :href="'#'" ) View Resource 


      BaseButton.btn( mode="light-red" ) Delete

</template>

<script lang="ts" setup>
import { provide, ref } from 'vue'

const props = defineProps<{
   source: {
      title: string,
      description: string,
      link: string
   }
}>()

const title = ref<string>(props.source.title)
provide('title', title)


</script>