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
    <view class="info-wrapper">
      <view class="row nickname">昵称：{{ userStore.userInfo.username }}</view>
      <view class="row phone">手机号：{{ userStore.userInfo.phone }}</view>
      <view class="row avatar">
        头像：
        <image class="avatar-img" :src="userStore.userInfo.avatar" mode="scaleToFill" />
      </view>
      <view class="row token">token: {{ userStore.userInfo.token }}</view>
    </view>
    <view class="buttons-wrapper">
      <wd-button :disabled="userStore.isLogin" @click="login">登录</wd-button>
      <wd-button :disabled="!userStore.isLogin" type="error" @click="logout">退出登录</wd-button>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store'
import { hideLoading, showLoading, showToast } from '@/utils/toast'
import { loginReq } from '@/service/login/login'

const userStore = useUserStore()

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

const logout = () => {
  // 退出账号登陆
  console.log('退出登录')
  // 清除 pinia 同时 storage 会自动清除
  userStore.clearUserInfo()
  // 通知
  showToast('退出成功')
}
</script>

<style lang="scss" scoped>
.my-container {
  box-sizing: border-box;
  padding: 0 25rpx;

  .info-wrapper {
    margin-bottom: 50rpx;

    .row {
      display: flex;
      align-items: center;
      min-height: 100rpx;
      margin-bottom: 20rpx;
    }

    .avatar {
      .avatar-img {
        width: 100rpx;
        height: 100rpx;
        overflow: hidden;
        border-radius: 50%;
      }
    }
  }

  .buttons-wrapper {
    display: flex;

    .wd-button {
      flex: 1;
    }
  }
}
</style>
