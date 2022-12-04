import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import CalegListContainer from "./container/CalegListContainer.vue";
import CalegDetailContainer from "./container/CalegDetailContainer.vue";
import './style.css'
import App from './App.vue'

const routes = [
    { path: '/', component: CalegListContainer },
    { path: '/user/:path', component: CalegDetailContainer },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App)
app.use(router)

app.mount('#app')
