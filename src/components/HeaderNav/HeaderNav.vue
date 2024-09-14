<template>
  <!-- 状态栏占位 -->
  <view :style="{ height: deviceStore.statusBarHeight + 'px' }"></view>
  <!-- 真正的导航栏内容 ，请按照自己的需求自行定义-->
  <wd-navbar title="标题"></wd-navbar>
</template>

<script lang="ts" setup>
import { useDeviceStore } from '@/store/device'
const deviceStore = useDeviceStore()
</script>

<style lang="scss" scoped>
//
</style>
