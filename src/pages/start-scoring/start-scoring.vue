<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '开始估分界面',
  },
}
</route>

<template>
  <view class="start-scoring-container">
    <view class="card">
      <image
        class="start-scoring-image"
        src="@/static/images/start-scoring/start-scoring-image.png"
        mode="scaleToFill"
      />
      <text class="start-scoring-text">估分后可查看分数排名</text>
      <button class="start-scoring-button">开始估分</button>
    </view>
    <view class="card">
      <view class="title">估分说明</view>
      <image
        class="card-line"
        src="@/static/images/start-scoring/card-line.png"
        mode="scaleToFill"
      />
      <view class="content">
        <view class="p">
          1.以下题目均来源于考生回忆，可能存在偏差，公途公考不对此准确性、合法性及内容的真实性负责;
        </view>
        <view class="p">2.本份卷子的答案及解析基本为公途公考独家编写，转载；</view>
        <view class="p">
          3.若有权利人对题目解析主张所有权，请及时联系我司，我司将依法采取措施保障权利人的合法权益;
        </view>
        <view class="p">4.预约估分请打开通知提醒，否则无法收到通知消息!</view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
//
</script>

<style lang="scss" scoped>
.start-scoring-container {
  min-height: 100vh;
  padding: 25rpx;
  background-color: #f5f5f5;

  .card {
    width: 700rpx;
    height: 738rpx;
    padding: 25rpx;
    margin-bottom: 25rpx;
    background: #ffffff;
    border-radius: 8rpx;

    &:nth-child(1) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      .start-scoring-image {
        width: 335rpx;
        height: 244rpx;
        margin-top: 172rpx;
        margin-bottom: 25rpx;
      }

      .start-scoring-text {
        font-size: 32rpx;
        font-weight: 400;
        color: #666666;
      }

      .start-scoring-button {
        width: 650rpx;
        height: 85rpx;
        margin-top: 112rpx;
        font-size: 32rpx;
        font-weight: 500;
        color: #ffffff;
        text-align: center;
        background: #1f53ff;
        border-radius: 8rpx;
      }
    }

    &:nth-child(2) {
      position: relative;
      height: 508rpx;

      .title {
        position: absolute;
        top: 25rpx;
        left: -7rpx;
        display: flex;
        align-items: center;
        width: 193rpx;
        height: 53rpx;
        padding-left: 31rpx;
        font-size: 28rpx;
        font-weight: 500;
        color: #ffffff;
        background: url('@/static/images/start-scoring/title-bg.png') no-repeat;
        background-size: 100% 100%;
      }

      .card-line {
        position: absolute;
        top: 37rpx;
        right: 25rpx;
        width: 163rpx;
        height: 26rpx;
      }

      .content {
        width: 650rpx;
        margin-top: 102rpx;
        font-size: 28rpx;
        font-weight: 400;
        color: #666666;

        .p {
          margin-bottom: 25rpx;
          &:nth-last-child(1) {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
