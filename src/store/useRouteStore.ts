import { defineStore } from "pinia";
import { RouteRecordRaw, Router } from "vue-router";
import layout from "@/views/layout/layout.vue";
import { markRaw } from "vue";

let modules = import.meta.glob("../pages/**/**.vue");

export const useRouteStore = defineStore("route-store", {
  state: () => {
    return {
      routes: [] as Array<RouteRecordRaw>,
    };
  },

  getters: {},
  actions: {
    addRoutes(data: RouteRecordRaw[], router: Router) {
      const dataList = listToTree(data, [], 0);
      this.routes = generateRouter(dataList);
      // this.routes.forEach((v) => {
      router.addRoute({
        path: "/home",
        name: "home",
        redirect: this.routes[0].path,
        component: () => import("../views/layout/layout.vue"),
        children: this.routes,
      });
      // });
    },
  },
});

export const generateRouter = (routerList: any) => {
  const res: any = [];
  routerList.forEach((e: any) => {
    let e_new = {
      path: e.path,
      name: e.name,
      meta: {
        title: e.title,
        hidden: e.hidden,
        keepAlive: e.keepAlive,
      },
      component: null,
      children: [],
    };
    if (e.component === "Layout") {
      e_new.component = markRaw(layout) as any;
    } else {
      e_new.component = modules[`../pages${e.path}/index.vue`] as any;
    }

    if (e.children && e.children.length > 0) {
      const children = generateRouter(e.children);
      // 保存权限
      e_new = { ...e_new, children: children as any };
    }
    res.push(e_new);
  });
  return res;
};

const listToTree = (list: any, tree: any, pid: any) => {
  list.forEach((item: any) => {
    if (item.pid === pid) {
      const child = {
        ...item,
        children: [],
      };
      tree.push(child);
      listToTree(list, child.children, item.id);
    }
  });
  return tree;
};
