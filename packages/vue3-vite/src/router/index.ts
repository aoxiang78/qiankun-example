import { createRouter, createWebHistory } from "vue-router";
import { name } from "../../package.json";
import HomeView from "../views/HomeView.vue";
import BasicLayout from "../layout/BasicLayout.vue";

const router = createRouter({
  history: createWebHistory(`/${name}/`),
  routes: [
    {
      path: "/",
      name: "home",
      component: BasicLayout,
      children: [
        {
          path: "/",
          name: "home",
          component: HomeView,
        },
        {
          path: "/about",
          name: "about",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import("../views/AboutView.vue"),
        },
        {
          path: "/profile",
          name: "Profile",
          component: () => import("../views/Profile.vue"),
        },
      ],
    },
  ],
});

export default router;
