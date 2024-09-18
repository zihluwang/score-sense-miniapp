<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '我的估分',
  },
}
</route>

<template>
  <view class="my-container">
    <!-- 没登录状态 -->
    <view v-if="pageType === 'no-login'" class="no-login"></view>
    <!-- 登录了但是没有估分信息状态 -->
    <view v-else-if="pageType === 'no-score'" class="no-score">
      <view class="image-text">
        <image
          class="no-score-image"
          src="@/static/images/my/estimate-score.png"
          mode="scaleToFill"
        />
        <text class="no-score-text">快去估分吧～</text>
      </view>
      <view class="button-row" @click="toEstimateScore">
        <view class="to-score">去估分</view>
      </view>
    </view>
    <!-- 登录了并且有估分信息状态 -->
    <view v-else class="has-score"></view>
  </view>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store'
import { hideLoading, showLoading, showToast } from '@/utils/toast'
import { loginReq } from '@/service/login/login'

const userStore = useUserStore()

type PageType = 'no-login' | 'no-score' | 'has-score'
const pageType = ref<PageType>('no-score')

/**
 * 一键登录功能
 */
const login = () => {
  // 登陆账号
  console.log('登录')
  // 实现微信小程序账号登陆
  uni.login({
    provider: 'weixin', // 使用微信登录
    success: async (loginRes) => {
      console.log(loginRes)
      const { errMsg, code } = loginRes
      if (errMsg === 'login:ok') {
        console.log('登录需要的code:', code)
        showLoading()
        try {
          const res = await loginReq(code)
          userStore.setUserInfo(res)
          hideLoading()
          showToast('登录成功')
        } catch (e) {
          showToast('登录失败')
          console.error('登录失败', e)
        }
      }
    },
    fail: (error) => {
      console.error('微信小程序一键登录失败', error)
    },
  })
}

/**
 * 一键退出登录状态
 */
const logout = () => {
  // 退出账号登陆
  console.log('退出登录')
  // 清除 pinia 同时 storage 会自动清除
  userStore.clearUserInfo()
  // 通知
  showToast('退出成功')
}

/**
 * 点击去估分跳转首页
 */
const toEstimateScore = () => {
  uni.switchTab({ url: '/pages/index/index' })
}
</script>

<style lang="scss" scoped>
.my-container {
  min-height: 100vh;

  // .no-login {
  // }

  .no-score {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;

    .image-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .no-score-image {
        width: 335rpx;
        height: 254rpx;
      }

      .no-score-text {
        font-size: 32rpx;
        font-weight: 400;
        color: #666666;
        text-align: center;
      }
    }

    .button-row {
      width: 650rpx;
      height: 85rpx;
      margin-top: 119rpx;

      .to-score {
        width: 650rpx;
        height: 85rpx;
        font-size: 32rpx;
        font-weight: 400;
        line-height: 85rpx;
        color: #ffffff;
        text-align: center;
        background: #1f53ff;
        border-radius: 8rpx;
      }
    }
  }

  // .has-score {
  // }

  // .info-wrapper {
  //   margin-bottom: 50rpx;

  //   .row {
  //     display: flex;
  //     align-items: center;
  //     min-height: 100rpx;
  //     margin-bottom: 20rpx;
  //   }

  //   .avatar {
  //     .avatar-img {
  //       width: 100rpx;
  //       height: 100rpx;
  //       overflow: hidden;
  //       border-radius: 50%;
  //     }
  //   }
  // }

  // .buttons-wrapper {
  //   display: flex;

  //   .wd-button {
  //     flex: 1;
  //   }
  // }
}
</style>
