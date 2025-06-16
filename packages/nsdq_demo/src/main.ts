import ZwWidget from '@danyaqf/zw-widget'
import { createApp } from 'vue'
import { initPinia } from '../stores/index'
import App from './App.vue'

import './style.css'

const app = createApp(App)
initPinia(app)
app.use(ZwWidget)
app.mount('#app')
