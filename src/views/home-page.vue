<template>
  <h1 id="">首页</h1>
  <Menu
    :theme="'dark'"
    style="width: 256px"
    mode="vertical"
    @click="handleClick">
    <AsideItem :routes="routes"></AsideItem>
  </Menu>
</template>
<script lang="ts" setup>
import { computed } from "vue";

import type { MenuProps } from "ant-design-vue";
import { Menu } from "ant-design-vue";

import { useStore } from "../store";
import { useRouter } from "vue-router";

import AsideItem from "./aside-item.vue";

defineOptions({ name: "home-page" });

const store = useStore();
const router = useRouter();

const routes = computed(() => store.routes);

const handleClick: MenuProps["onClick"] = (menuInfo) => {
  router.push({ path: menuInfo.item.path });
};
</script>
