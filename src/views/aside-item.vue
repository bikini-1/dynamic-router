<template>
  <div v-for="(item, index) in props.routes" :key="index">
    <SubMenu v-if="item.children?.length" :key="Math.random() + 'sub'">
      <template #title>{{ item.name }}</template>
      <aside-item :routes="item.children"></aside-item>
    </SubMenu>
    <MenuItem
      v-else
      :key="Math.random() + 'item'"
      :title="item.name"
      :path="item.path"
      >{{ item.name }}
    </MenuItem>
  </div>
</template>
<script lang="ts" setup>
import { SubMenu, MenuItem } from "ant-design-vue";

// 递归组件用
defineOptions({ name: "aside-item" });

const props = defineProps(["routes"]);
</script>
<style lang="less" scoped></style>
