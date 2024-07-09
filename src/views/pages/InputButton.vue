<template>
  <h1 id="page3">Page 3-1</h1>
  <div class="input-warraper">
    <Input type="text" />
    <Button type="primary">搜索</Button>
  </div>
  <button @click="handleClick">Home</button>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import { Select, Input, Button, Space } from "ant-design-vue";

const router = useRouter();

const handleClick = () => router.push({ path: "/home" });
</script>
<style lang="less" scoped>
.input-warraper {
  display: flex;
  align-items: center;
}
button {
  border-radius: 0 8px 8px 0;
  border: 1px solid transparent;
}
input {
  border-radius: 8px 0 0 8px;
  vertical-align: middle;
}
</style>
