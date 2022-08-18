import { defineStore } from 'pinia'

export const useVariableStore = defineStore({
  id: 'variables',
  state: () => {
    return { title: "Vue 3 Mastering" }
  },
  getters: {
    text: (state) => state.title
  },
  actions: {
    change(value: string) {
      this.title = value
      
    }
  }
})
