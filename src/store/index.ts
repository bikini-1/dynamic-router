import { defineStore } from "pinia";
import { RouteRecordRaw, Router } from "vue-router";

let modules = import.meta.glob("../views/pages/*.vue");

export const useRouteStore = defineStore("route-store", {
  state: () => {
    return {
      routes: [] as Array<RouteRecordRaw>,
      menuList: [] as any,
    };
  },

  getters: {},
  actions: {
    addRoutes(data: RouteRecordRaw[], router: Router) {
      this.routes = generateRouter(data);
      this.routes.forEach((v) => {
        router.addRoute(v);
      });

      this.menuList = this.routes.map((v, i) => {
        return {
          key: i,
          label: v.name,
          title: v.name,
          path: v.path,
        };
      });
    },
  },
});

const generateRouter = (list: any) => {
  let newRouters = [];
  newRouters = list.map((item: any) => {
    if (item.children && item.children.length) {
      return {
        path: item.path,
        name: item.name,
        component: modules[`../views/pages/${item.component}`],
        children: generateRouter(item.children),
      };
    } else {
      return {
        path: item.path,
        name: item.name,
        component: modules[`../views/pages/${item.component}`],
        children: [],
      };
    }
  });
  return newRouters;
};
