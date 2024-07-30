import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";

import { viteMockServe } from "vite-plugin-mock";

import * as path from "path";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// arco-desing
import { ArcoResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
export default defineConfig({
  base: "/app",
  resolve: {
    //设置别名
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
  plugins: [
    vue(),
    viteMockServe({
      supportTs: false,
      logger: false,
      mockPath: "./src/mock",
    }),
    AutoImport({
      resolvers: [ArcoResolver()],
    }),
    Components({
      resolvers: [
        ArcoResolver({
          sideEffect: true,
        }),
      ],
    }),
  ],
});
