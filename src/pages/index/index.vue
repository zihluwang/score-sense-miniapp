<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="home">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '首页',
  },
}
</route>
<template>
  <view class="index-container">
    <!-- 轮播图 -->
    <wd-swiper
      :list="swiperList"
      autoplay
      v-model:current="current"
      custom-class="swiper"
    ></wd-swiper>
    <!-- 小白条 -->
    <view class="content-wrapper">
      <!-- 公告栏组件 -->
      <!-- tab栏 -->
      <!-- 列表 -->
    </view>
  </view>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'Home',
})

const current = ref<number>(0)
const swiperList = ref([
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/redpanda.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/capybara.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/panda.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/moon.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/meng.jpg',
])
</script>

<style scoped lang="scss">
.index-container {
  box-sizing: border-box;

  // 关闭轮播图的圆角
  :deep(.swiper) {
    .wd-swiper__track {
      border-radius: 0 !important;
    }
  }

  .content-wrapper {
    box-sizing: border-box;
    width: 100%;
    padding: 0 25rpx;
    background-color: pink;
  }
}
</style>
