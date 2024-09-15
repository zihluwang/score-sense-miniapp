import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDeviceStore = defineStore(
  'device',
  () => {
    const statusBarHeight = ref(null)
    const menuButtonInfo = ref(null)
    const navBarHeight = ref(null)

    const getInfo = () => {
      statusBarHeight.value = uni.getSystemInfoSync().statusBarHeight
      menuButtonInfo.value = uni.getMenuButtonBoundingClientRect()
      navBarHeight.value =
        menuButtonInfo.value.bottom -
        statusBarHeight.value +
        (menuButtonInfo.value.top - statusBarHeight.value) // 状态栏与胶囊按钮中的空隙

      console.log('设备信息：状态栏高度', statusBarHeight.value)
      console.log('设备信息：胶囊菜单信息', menuButtonInfo.value)
      console.log('设备信息：导航栏高度', navBarHeight.value)
    }

    return {
      statusBarHeight,
      menuButtonInfo,
      navBarHeight,
      getInfo,
    }
  },
  {
    persist: true,
  },
)
