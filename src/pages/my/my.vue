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
    <view v-if="pageType === 'no-login'" class="no-login">
      <view class="image-text">
        <image
          class="no-login-image"
          src="@/static/images/my/estimate-score.png"
          mode="scaleToFill"
        />
        <text class="no-login-text">快去登录吧～</text>
      </view>
      <view class="button-row" @click="login">
        <view class="to-login">登录</view>
      </view>
    </view>
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
    <view v-else class="has-score">
      <view class="score-list">
        <view class="score-list-item" v-for="item in scoreList" :key="item.id">
          <view class="top-row">估分时间：{{ item.time }}</view>
          <view class="middle-row">{{ item.title }}</view>
          <view v-if="item.isFinish" class="bottom-row">
            <view class="score-rank">
              <view class="score">
                得分：
                <text class="blue-text">{{ item.score }}</text>
              </view>
              <view class="rank">
                排名：
                <text class="blue-text">{{ item.rank }}</text>
              </view>
            </view>
            <view class="check-report-button">查看报告</view>
          </view>
          <view v-else class="bottom-row">
            <view class="continue-button">继续估分</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store'
import { hideLoading, showLoading, showToast } from '@/utils/toast'
import { loginReq } from '@/service/login/login'

const userStore = useUserStore()

type PageType = 'no-login' | 'no-score' | 'has-score'
const pageType = ref<PageType>('has-score')
const scoreList = ref([
  {
    id: 1,
    time: '09月23日 10:30',
    title: '杭州上城区事业单位招聘笔试估分题（考生回忆版）',
    isFinish: false,
    score: 0,
    rank: 0,
  },
  {
    id: 2,
    time: '09月23日 10:30',
    title: '杭州上城区事业单位招聘笔试估分题（考生回忆版）',
    isFinish: true,
    score: 83,
    rank: 73,
  },
  {
    id: 3,
    time: '09月23日 10:30',
    title: '杭州上城区事业单位招聘笔试估分题（考生回忆版）',
    isFinish: true,
    score: 77,
    rank: 112,
  },
  {
    id: 4,
    time: '09月23日 10:30',
    title: '杭州上城区事业单位招聘笔试估分题（考生回忆版）',
    isFinish: false,
    score: 0,
    rank: 0,
  },
  {
    id: 5,
    time: '09月23日 10:30',
    title: '杭州上城区事业单位招聘笔试估分题（考生回忆版）',
    isFinish: false,
    score: 0,
    rank: 0,
  },
  {
    id: 6,
    time: '09月23日 10:30',
    title: '杭州上城区事业单位招聘笔试估分题（考生回忆版）',
    isFinish: false,
    score: 0,
    rank: 0,
  },
])

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

  .no-login,
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

      .no-login-image,
      .no-score-image {
        width: 335rpx;
        height: 254rpx;
      }

      .no-login-text,
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

      .to-login,
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

  .has-score {
    min-height: 100vh;
    padding: 0 25rpx;
    background-color: #f5f5f5;

    .score-list {
      padding: 25rpx 0;

      .score-list-item {
        width: 700rpx;
        height: 225rpx;
        padding: 25rpx;
        margin-bottom: 25rpx;
        background: #ffffff;
        border-radius: 8rpx;

        &:nth-last-child(1) {
          margin-bottom: 0;
        }

        .top-row {
          font-size: 24rpx;
          font-weight: 400;
          color: #999999;
        }

        .middle-row {
          margin-top: 15rpx;
          font-size: 28rpx;
          font-weight: 400;
          color: #333333;
        }

        .bottom-row {
          display: flex;
          margin-top: 24rpx;

          .check-report-button,
          .continue-button {
            width: 177rpx;
            height: 63rpx;
            margin-right: 0;
            margin-left: auto;
            font-size: 28rpx;
            font-weight: 500;
            line-height: 63rpx;
            color: #ffffff;
            text-align: center;
            background: #1f53ff;
            border-radius: 48rpx;
          }

          .check-report-button {
            background-color: #ffaa27;
          }

          .score-rank {
            display: flex;
            align-items: center;
            font-size: 28rpx;
            font-weight: 400;
            color: #333333;

            .score {
              margin-right: 25rpx;
            }

            .blue-text {
              font-size: 28rpx;
              font-weight: 400;
              color: #1f53ff;
            }
          }
        }
      }
    }
  }
}
</style>
