import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { createVuetify } from 'vuetify'
import 'vuetify/styles' // Import Vuetify styles

const vuetify = createVuetify()

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createPinia())

app.use(router)
app.use(vuetify)
app.mount('#app')
