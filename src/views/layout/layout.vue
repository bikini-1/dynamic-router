<template>
  <h1 id="">动态路由</h1>
  <Menu style="width: 256px" mode="vertical" @click="handleClick">
    <AsideItem :routes="routes"></AsideItem>
  </Menu>
  <router-view></router-view>
</template>
<script lang="ts" setup>
import { computed, onMounted } from "vue";

import type { MenuProps } from "ant-design-vue";
import { Menu } from "ant-design-vue";

import { useRouteStore } from "../../store";
import { useRouter } from "vue-router";

import AsideItem from "../aside-item.vue";

defineOptions({ name: "layout" });

const store = useRouteStore();
const router = useRouter();

const routes = computed(() => store.routes);

const handleClick: MenuProps["onClick"] = (menuInfo) => {
  console.log(router.getRoutes());

  router.push({ path: menuInfo.item.path });
};

onMounted(() => {});
</script>
