import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from '@formkit/vue'
import { createAutoAnimatePlugin } from '@formkit/addons'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import '@formkit/themes/genesis'

// Components
import BaseCard from '#/UI/BaseCard.vue'
import BaseButton from '#/UI/BaseButton.vue'

createApp(App)
   .use(createPinia())
   .use(router)
   .use(plugin, defaultConfig({
      plugins: [
         createAutoAnimatePlugin({
            duration: 100,
            easing: "ease-in"
         })
      ]
   }) )

   .component('BaseCard', BaseCard)
   .component('BaseButton', BaseButton)

.mount('#app')
