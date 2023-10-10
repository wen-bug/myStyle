import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import Preview from 'vite-plugin-vue-component-preview/client';
import { createPinia } from 'pinia'
import router  from './router/index';

import './style.css';

const pinia = createPinia()
const app=createApp(App)
app.use(Preview).use(pinia).use(router).mount('#app')
