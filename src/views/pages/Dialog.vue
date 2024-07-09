<template>
  <TemplatePromise v-slot="{ promise, resolve, reject, args }">
    <Modal
      :open="true"
      title="测试promise弹窗"
      @ok="submit(resolve)"
      @cancel="resolve(close())">
      <Form
        ref="formRef"
        :model="formState"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off">
        <form-item
          label="Username"
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]">
          <Input v-model:value="formState.username" />
        </form-item>
        <form-item
          label="123"
          name="password"
          :rules="[{ required: true, message: 'Please input your username!' }]">
          <Input v-model:value="formState.password" />
        </form-item>
      </Form>
    </Modal>
  </TemplatePromise>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { createTemplatePromise } from "@vueuse/core";
import { Modal, Form, FormItem, Input } from "ant-design-vue";

const TemplatePromise = createTemplatePromise({});

const formState = ref<any>({
  username: "",
  password: "",
});

const formRef = ref();
async function open() {
  const result = await TemplatePromise.start();
  // button is clicked, result is 'ok'
  console.log(result, "open函数打印");
}

const submit = (cn) => {
  console.log(formState.value);
  console.log(formRef.value.validate());

  return formRef.value
    .validate()
    .then(() => {
      console.log("submit");
      close();
      cn("1231231231231231231231");
    })
    .catch((error: any) => {
      console.log(error, "123123");
    });
};

const close = () => {
  formRef.value.resetFields();
  formRef.value.clearValidate();
};

defineExpose({ open });
</script>
<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
