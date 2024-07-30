<template>
  <h1 id="">动态路由</h1>
  <Menu style="width: 256px" mode="vertical" @click="handleClick">
    <AsideItem :routes="routes"></AsideItem>
  </Menu>
  <el-table></el-table>
</template>
<script lang="ts" setup>
import { computed } from 'vue'

import type { MenuProps } from 'ant-design-vue'
import { Menu } from 'ant-design-vue'

import { useRouteStore } from '../store'
import { useRouter } from 'vue-router'

import AsideItem from './aside-item.vue'

defineOptions({ name: 'home-page' })

const store = useRouteStore()
const router = useRouter()

const routes = computed(() => store.routes)

const handleClick: MenuProps['onClick'] = menuInfo => {
  router.push({ path: menuInfo.item.path })
}
</script>
