import { createRouter, createWebHistory, Router } from "vue-router";
import Create from "../views/Create.vue";
import Playlists from "../views/Playlists.vue";
import App from "../App.vue";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import { getMe } from "../views/services/services"

interface routes {
  path: string;
  name: string;
}


const routes = [
  {
    path: "/",
    name: "app",
    component: Home,
  },
  {
    path: "/create", 
    name: "create",
    component: Create,
    beforeEnter: async() => {
      let res: boolean = await getMe()
      return res;
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    
  },
  {
    path: "/playlists",
    name: "playlists",
    component: Playlists,
    beforeEnter: async () => {
      let res: boolean = await getMe()
      return res;
    },
  },
];

const router: Router = createRouter({
  history: createWebHistory(""),
  routes,
});

export default router;
