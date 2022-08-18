import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

// Components
import BaseCard from './components/UI/BaseCard.vue'
// import BaseTransition from './components/UI/BaseTransition.vue'
import BaseButton from './components/UI/BaseButton.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('BaseCard', BaseCard)
// app.component('BaseTransition', BaseTransition)
app.component('BaseButton', BaseButton)

app.mount('#app')
