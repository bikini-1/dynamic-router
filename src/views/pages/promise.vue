<template>
  <div id="">
    <button @click="add">新增</button>
    <button @click="edit">编辑</button>
  </div>

  <Dialog ref="DialogRef"></Dialog>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import Dialog from "./Dialog.vue";

const DialogRef = ref();
const add = () => {
  console.log("add");
  DialogRef.value.open();
};

const edit = () => {
  console.log("edit");
};
</script>
<style lang="less" scoped></style>
