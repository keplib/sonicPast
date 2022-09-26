import { createRouter, createWebHistory } from 'vue-router'
import Create  from '../views/Create.vue';
import Playlists from '../views/Playlists.vue';
import  App from '../App.vue';


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
    path: '/playlists',
    name: 'playlists',
    component: Playlists
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
