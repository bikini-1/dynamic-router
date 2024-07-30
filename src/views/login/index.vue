<template>
  <div class="login">
    <div class="login-form">
      <h1>动态路由</h1>
      <el-form :model label-width="auto">
        <el-form-item label="用户名">
          <el-input v-model="model.name" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="model.password" />
        </el-form-item>
      </el-form>

      <el-row justify="center">
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-row>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store/useUserStore'

const router = useRouter()
const store = useUserStore()

const model = ref({
  name: '',
  password: ''
})

const onSubmit = async () => {
  await store.setUserInfo(form.value)
  router.push({ path: '/home' })
}
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../../assets/bg.jpg') center center;
  .login-form {
    width: 400px;
    padding: 20px;
    // box-shadow: green 1px 1px 2000px 1px;
    background-color: rgba(255, 255, 255, 0.1); /* 半透明背景 */
    backdrop-filter: blur(10px); /* 背景模糊 */
    -webkit-backdrop-filter: blur(10px); /* 兼容老版本 Safari */

    border-radius: 8px;
    h1 {
      text-align: center;
    }

    .el-button {
      width: 100%;
    }
  }
}
</style>
