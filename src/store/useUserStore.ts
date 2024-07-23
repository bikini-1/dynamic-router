import { login } from "./../api/index";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore(
  "user-store",
  () => {
    // 在 Setup Store 中：
    // ref() 就是 state 属性
    // computed() 就是 getters
    // function() 就是 actions
    const userInfo = ref({
      username: "",
      password: "",
    });

    const token = ref("");

    const setUserInfo = async (params: any) => {
      const {
        data: { data },
      } = await login(params);
      userInfo.value.username = data.username;
      userInfo.value.password = data.password;
      token.value = data.token;
    };
    return { userInfo, token, setUserInfo };
  },
  {
    persist: [
      {
        key: "userInfo",
        storage: localStorage,
        paths: ["userInfo"],
      },
      {
        key: "token",
        storage: localStorage,
        paths: ["token"],
      },
    ],
  }
);
