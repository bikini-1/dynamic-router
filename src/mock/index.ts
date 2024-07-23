import { MockMethod } from "vite-plugin-mock";

const mock: MockMethod[] = [
  // 路由接口
  {
    url: "/api/routes",
    method: "get",
    response: () => {
      const routes = [
        {
          id: 1,
          pid: 0,
          path: "/demo",
          name: "demo",
          component: "demo",
          title: "demo",
          hidden: false,
          keepAlive: false,
          redirect: "",
        },
        {
          id: 2,
          pid: 0,
          path: "/note",
          name: "note",
          component: "note",
          title: "笔记",
          hidden: false,
          keepAlive: false,
          redirect: "",
        },
        {
          id: 3,
          pid: 0,
          path: "/system",
          name: "system",
          component: "system",
          title: "系统设置",
          hidden: false,
          keepAlive: false,
          redirect: "",
        },
        {
          id: 4,
          pid: 3,
          path: "/system/menu",
          name: "menu",
          component: "menu",
          title: "菜单设置",
          hidden: false,
          keepAlive: false,
          redirect: "",
        },
      ];
      return {
        code: 200,
        data: routes,
        message: "操作成功",
        success: true,
      };
    },
  },
  // 登录接口
  {
    url: "/api/login",
    method: "post",
    response: () => {
      const user = {
        username: "admin",
        password: "admin",
        token: "nBvj3uid8s9we-eie9w-mv9dfd-dfkjd99w01-9",
      };
      return {
        code: 200,
        data: user,
        message: "操作成功",
        success: true,
      };
    },
  },
];

export default mock;
