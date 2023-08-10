<template>
  <h1 id="page2">Page 2</h1>
  <button @click="handleClick">Home</button>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();

const handleClick = () => router.push({ path: "/home" });
</script>
<style lang="less" scoped></style>
