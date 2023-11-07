import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
} from 'vue-router';
import BasicLayout from "../layout/BasicLayout.vue";
import HomeView from "../views/HomeView.vue";
import { isEmpty, assign } from "lodash-es";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
          name: "profile",
          component: () => import("../views/Profile.vue"),
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
  ],
});

// fix 在子应用中切换路由又回退时出现了url自动加上了undefined
// https://github.com/umijs/qiankun/issues/2254
router.beforeEach((_to: RouteLocationNormalized, from: RouteLocationNormalized, next: Function) => {
  if (isEmpty(history.state.current)) {
    assign(history.state, { current: from.fullPath });
  }
  next();
});

export default router;
