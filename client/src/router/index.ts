import { createRouter, createWebHistory } from 'vue-router'
import Create  from '../views/Create.vue';
import Playlists from '../views/Playlists.vue';
import  App from '../App.vue';
import Login from '../views/Login.vue';


const routes = [
  {
    path: '/',
    name: 'app',
    component: App
  },
  {
    path: '/create',
    name: 'create',
    component: Create
    
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }, 
  {
    path: '/playlists',
    name: 'playlists',
    component: Playlists
  },
]

const router = createRouter({
  history: createWebHistory(""),
  routes
})

export default router
