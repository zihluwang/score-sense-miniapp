<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '估分职位',
  },
}
</route>

<template>
  <view class="job-selection-container">
    <view class="card">
      <view class="title">选择估分职位信息</view>
      <view class="tip">
        <image src="@/static/images/job-selection/attention-icon.png" mode="scaleToFill" />
        <text>选择后能获取更精准的排名</text>
      </view>
      <view class="job-input">
        <image src="@/static/images/job-selection/search-icon.png" mode="scaleToFill" />
        <input type="text" v-model="jobName" placeholder="请输入岗位名称" />
      </view>
      <view class="show-more">
        <image src="@/static/images/job-selection/check-icon.png" mode="scaleToFill" />
        <text>查看职位表</text>
      </view>
      <view class="button" @click="start">确定</view>
    </view>
  </view>
</template>

<script lang="ts" setup>
const jobName = ref('')

const start = () => {
  uni.navigateTo({
    url: '/pages/answering/answering',
  })
}
</script>

<style lang="scss" scoped>
.job-selection-container {
  min-height: 100vh;
  padding: 25rpx;
  background-color: #f5f5f5;

  .card {
    width: 700rpx;
    height: 520rpx;
    padding: 44rpx 25rpx 46rpx 25rpx;
    background: #ffffff;
    border-radius: 8rpx;

    .title {
      height: 45rpx;
      margin-bottom: 15rpx;
      font-size: 32rpx;
      font-weight: 400;
      line-height: 45rpx;
      color: #333333;
    }

    .tip {
      height: 30rpx;
      margin-bottom: 60rpx;
      font-size: 22rpx;
      font-weight: 400;
      line-height: 30rpx;
      color: #999999;

      image {
        width: 20rpx;
        height: 20rpx;
        margin-right: 10rpx;
      }
    }

    .job-input {
      display: flex;
      align-items: center;
      width: 650rpx;
      height: 80rpx;
      padding-left: 33rpx;
      background: #f8f8f8;
      border-radius: 40rpx;

      image {
        width: 40rpx;
        height: 40rpx;
        margin-right: 10rpx;
      }
    }

    .show-more {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 40rpx 0 45rpx 0;
      font-size: 22rpx;
      font-weight: 400;
      color: #1f53ff;
      text-align: left;

      image {
        width: 32rpx;
        height: 32rpx;
        margin-right: 10rpx;
      }
    }

    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 650rpx;
      height: 85rpx;
      font-size: 32rpx;
      font-weight: 500;
      color: #ffffff;
      background: #1f53ff;
      border-radius: 8rpx;
    }
  }
}
</style>
