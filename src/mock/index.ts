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
          path: "/Cascader",
          name: "级联选择器",
          component: "Cascader.vue",
          children: [],
        },
        {
          path: "/CodeMirror",
          name: "代码块",
          component: "CodeMirror.vue",
          children: [],
        },
        {
          path: "/promise",
          name: "手写promise",
          component: "promise.vue",
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
              component: "InputButton.vue",
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

  {
    url: "/api/options",
    method: "get",
    response: () => {
      return [
        {
          name: "1",
          code: "1",
        },
        {
          name: "2",
          code: "2",
        },
        {
          name: "3",
          code: "3",
        },
      ];
    },
  },
];

export default mock;
