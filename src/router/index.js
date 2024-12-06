import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/Home.vue'
import AddGame from '../views/AddGame.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: AddGame
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router 