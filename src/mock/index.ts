import { MockMethod } from "vite-plugin-mock";

const mock: MockMethod[] = [
  {
    url: "/api/test",
    method: "get",
    response: () => {
      return {
        status: 200,
        message: "success",
        data: "hello world",
      };
    },
  },

  {
    url: "/api/routes",
    method: "get",
    response: () => {
      const routes = [
        {
          path: "/page1",
          name: "page1",
          component: "page1.vue",
          children: [],
        },
        {
          path: "/page2",
          name: "page2",
          component: "page2.vue",
          children: [],
        },
        {
          path: "/page3",
          name: "page3",
          // component: "page3.vue",
          children: [
            {
              path: "/page3-1",
              name: "page3-1",
              component: "page3-1.vue",
            },
          ],
        },

        {
          path: "/page4",
          name: "page4",
          component: "page3.vue",
          children: [
            {
              path: "/page4-1",
              name: "page4-1",
              component: "page3-1.vue",
            },
            {
              path: "/page4-2",
              name: "page4-2",
              component: "page3-1.vue",
            },
            {
              path: "/page4-3",
              name: "page4-3",
              component: "page3-1.vue",
            },
          ],
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
];

export default mock;
