import './assets/main.css'

import { createApp } from 'vue'
import { ComponentLibrary } from 'vue-library';
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(ComponentLibrary)

app.use(router)

app.mount('#app')
