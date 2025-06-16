import ZwWidget from '@danyaqf/zw-widget'
import { createApp } from 'vue'
import App from './App.vue'

import './style.css'

console.log('Zwidget', ZwWidget)

const app = createApp(App)
app.use(ZwWidget)
app.mount('#app')
