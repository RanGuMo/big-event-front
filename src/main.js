import './assets/main.scss'
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
//导入持久化插件
import {createPersistedState} from'pinia-persistedstate-plugin'
const pinia = createPinia()
const persist = createPersistedState()
//pinia使用持久化插件
pinia.use(persist)

// 使用中文语言包
import locale from 'element-plus/dist/locale/zh-cn.js'



const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(ElementPlus,{locale})
app.mount('#app')