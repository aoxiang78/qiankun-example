import Vue from "vue";
import VueRouter from "vue-router";
import BasicLayout from "../layout/BasicLayout.vue";
import Home from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: BasicLayout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
      },
      {
        path: "/profile",
        name: "Profile",
        component: () =>
          import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
      },
    ],
  },
  {
    path: "/vue2/:morePath*",
    name: "vue2",
    component: BasicLayout,
  },
  {
    path: "/vue3/:morePath*",
    name: "vue3",
    component: BasicLayout,
  },
  {
    path: "/vue3-vite/:morePath*",
    name: "vue3-vite",
    component: BasicLayout,
  },
  {
    path: "/react-umi/:morePath*",
    name: "react-umi",
    component: BasicLayout,
  },
  {
    path: "/react18/:morePath*",
    name: "react18",
    component: BasicLayout,
  },
];

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes,
});

export default router;
