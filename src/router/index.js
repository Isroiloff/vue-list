import { createRouter, createWebHistory } from "vue-router";

import NavbarApp from "../components/NavbarApp.vue";

const routes = [
  {
    path: "/",
    name: "navbar",
    component: NavbarApp,
  },
  {
    path: "/about",
    name: "about",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
