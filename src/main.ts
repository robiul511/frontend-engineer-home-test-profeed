import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

import Brands from './pages/Brands.vue'
import Cars from './pages/Cars.vue'

const routes = [
  { path: '/', component: Cars },
  { path: '/brands', component: Brands },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
router.beforeEach((to, from, next) => {
  console.log(from, 'ini from nya');
  if (to.path === '/brands' || to.path === '/' ) {
    next()
  } else {
    next({ path: '/'})
  }
  
})

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')