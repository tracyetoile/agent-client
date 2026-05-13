import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Removed the curly braces here

const app = createApp(App)
app.use(router)
app.mount('#app')
