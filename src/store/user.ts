import { defineStore } from 'pinia'
import { ref } from 'vue'

const initState: IUserInfo = {
  id: 0,
  openId: '',
  token: '',
  username: '',
  phoneNumber: '',
  avatarUrl: '',
  isBlocked: false,
}

export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref<IUserInfo>({ ...initState })

    const setUserInfo = (val: IUserInfo) => {
      userInfo.value = val
    }

    const clearUserInfo = () => {
      userInfo.value = { ...initState }
    }
    // 一般没有reset需求，不需要的可以删除
    const reset = () => {
      userInfo.value = { ...initState }
    }

    const isLogin = computed(() => !!userInfo.value.token)

    return {
      userInfo,
      setUserInfo,
      clearUserInfo,
      isLogin,
      reset,
    }
  },
  {
    persist: true,
  },
)
