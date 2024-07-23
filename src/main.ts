import { createApp } from "vue";

import "./style.css";

import App from "./App.vue";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";

import router from "./router";

import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

createApp(App).use(pinia).use(router).use(Antd).mount("#app");
