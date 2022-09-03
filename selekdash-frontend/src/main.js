import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { createPinia} from 'pinia'

axios.defaults.baseURL = "http://localhost:8000/api"

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
