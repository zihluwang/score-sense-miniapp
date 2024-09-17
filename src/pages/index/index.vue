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
    <view class="white-bar">
      <view class="location-name">
        <text class="location-text">浙江省</text>
        <image
          class="location-icon"
          src="@/static/images/index/location-more-icon.png"
          mode="scaleToFill"
        />
      </view>
      <view class="share-button">
        <image class="share-icon" src="@/static/images/index/share-icon.png" mode="scaleToFill" />
        <text class="share-text">分享好友</text>
      </view>
    </view>
    <!-- 列表内容 -->
    <view class="content-wrapper">
      <!-- 公告栏组件 -->
      <view class="notice-bar">
        <image class="notice-icon" src="@/static/images/index/notice-icon.png" mode="scaleToFill" />
        <view class="notice-text">
          <view class="notice-content">
            题目持续整理更新中！题目持续整理更新中！题目持续整理更新中！题目持续整理更新中！题目持续整理更新中！题目持续整理更新中！题目持续整理更新中！题目持续整理更新中！题目持续整理更新中！
          </view>
        </view>
      </view>
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
  // 关闭轮播图的圆角
  :deep(.swiper) {
    .wd-swiper__track {
      border-radius: 0 !important;
    }
  }

  // 小白条
  .white-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 85rpx;
    padding: 23rpx 25rpx 22rpx 25rpx;
    background: #ffffff;

    .location-name {
      height: 40rpx;
      font-size: 28rpx;
      font-weight: 700;
      line-height: 40rpx;
      color: #333333;

      .location-icon {
        width: 40rpx;
        height: 40rpx;
      }
    }

    .share-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 184rpx;
      height: 53rpx;
      background: #ffaa27;
      border-radius: 27rpx;

      .share-icon {
        width: 24rpx;
        height: 24rpx;
        margin-right: 9rpx;
      }

      .share-text {
        height: 40rpx;
        font-size: 28rpx;
        line-height: 40rpx;
        color: #ffffff;
      }
    }
  }

  .content-wrapper {
    width: 100%;
    padding: 25rpx;

    .notice-bar {
      display: flex;
      align-items: center;
      height: 30rpx;

      .notice-icon {
        width: 30rpx;
        height: 30rpx;
        margin-right: 10rpx;
      }

      .notice-text {
        width: 660rpx;
        height: 30rpx;
        overflow: hidden;
        font-size: 22rpx;
        line-height: 30rpx;
        color: #df572b;

        .notice-content {
          animation: notice 10s linear infinite;
        }
      }
    }
  }
}

@keyframes notice {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
