import { defineStore } from 'pinia'

export const resourcesStore = defineStore({
   id: 'resources',
   state: () => {
      return {
         list: [
            {
               id: 'vue',
               title: 'Vue Guide',
               description: 'The official Vue.js Documentation',
               link: 'https://vuejs.org',
            },
            {
               id: 'official-guide',
               title: 'NuxtJS Guide',
               description: 'The official Nuxt.js Documentation',
               link: 'https://nuxtjs.org',
            }
         ]
      }
   },
   getters: {
      get: (state) => state.list
   },
   // actions: {
   //    add(value: object) {
   //       this.list += value
   //    }
   // }
})


interface Obj {
   state: {
      list: {
         id: string,
         title: string,
         description: string,
         link: string
      }[]
   }
}