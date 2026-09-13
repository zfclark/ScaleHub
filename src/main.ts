import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useThemeStore } from '@/stores/theme'
import { useHistoryStore } from '@/stores/history'
import './assets/styles/main.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)

const theme = useThemeStore()
theme.init()
const history = useHistoryStore()
history.init()

app.mount('#app')
