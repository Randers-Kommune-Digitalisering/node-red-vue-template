import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

import Start from '@/views/Start.vue'
import Templates from '@/views/Templates.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', 
            name: "Start",
            component: Start
        },
        {
            path: '/templates', 
            name: "Templates",
            component: Templates
        }
    ]
})

createApp(App)
.use(router)
.mount('#app')
