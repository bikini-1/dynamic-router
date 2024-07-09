import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteMockServe } from "vite-plugin-mock";
import * as path from "path";

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
  ],
});
