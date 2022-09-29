import { createRouter, createWebHistory, Router } from "vue-router";
import Create from "../views/Create.vue";
import Playlists from "../views/Playlists.vue";
import App from "../App.vue";
import Login from "../views/Login.vue";

interface routes {
  path: string;
  name: string;
}

const routes = [
  {
    path: "/",
    name: "app",
    component: App,
  },
  {
    path: "/create",
    name: "create",
    component: Create,
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
  },
];

const router: Router = createRouter({
  history: createWebHistory(""),
  routes,
});

export default router;
