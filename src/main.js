import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import "@/assets/styles/main.scss"
import {createPinia} from "pinia";
const app = createApp(App)
const pinia = createPinia()
import clickOutside from "@/directives/index"
app.use(router)
app.use(pinia)
app.directive('click-outside',clickOutside)
app.mount('#app')
