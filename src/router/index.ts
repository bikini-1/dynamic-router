import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

import { useStore } from "../store";

import { GetDynamicRoutes } from "../api";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("../views/home-page.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path !== "/404") {
    const store = useStore();
    if (store.routes.length < 1) {
      GetDynamicRoutes()
        .then((res: any) => {
          store.addRoutes(res.data.data, router);
          next({ ...to, replace: true });
        })
        .catch((_) => {
          next();
        });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
