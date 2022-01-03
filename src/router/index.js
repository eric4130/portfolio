import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Project1 from '../views/Project1.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/project1',
    name: 'Project1',
    component: Project1
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
