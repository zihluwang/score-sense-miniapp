<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '我来回忆',
  },
}
</route>

<template>
  <view class="memory-container">
    <!-- 回忆题号 -->
    <view class="card">
      <wd-input
        type="number"
        custom-class="input"
        label="回忆题号："
        label-width="100px"
        v-model="formData.topicNumber"
        placeholder="请输入题号"
        :rules="[{ required: true, message: '回忆题号是必须要填写的' }]"
      />
    </view>
    <!-- 回忆题干 -->
    <view class="card">
      <view class="title">回忆题干：</view>
      <wd-textarea
        custom-class="textarea"
        v-model="formData.topicTitle"
        placeholder="请根据您的回忆输入题干信息"
        placeholderClass="textarea-placeholder"
        :maxlength="500"
        show-word-limit
      />
    </view>
    <!-- 回忆选项 -->
    <view class="card">
      <view class="title">
        回忆选项
        <text class="sub-title">（主观题无需填写）</text>
      </view>
      <view class="chooses">
        <view
          class="item"
          :class="{ active: formData.activeTopicValueIndex === index }"
          v-for="(item, index) in formData.topicValues"
          :key="item.id"
          @click="formData.activeTopicValueIndex = index"
        >
          {{ item.sign }}
        </view>
      </view>
      <wd-textarea
        custom-class="textarea"
        v-model="formData.topicValues[formData.activeTopicValueIndex].value"
        placeholder="请根据您的回忆输入主观题答案"
        placeholderClass="textarea-placeholder"
        :maxlength="500"
        show-word-limit
      />
    </view>
    <!-- 图片补充 -->
    <view class="card">
      <view class="title">
        图片补充
        <text class="sub-title">（0/6）</text>
      </view>
      <view class="image-list">
        <view class="image-wrapper" v-for="(item, index) in formData.topicImages" :key="index">
          <image :src="item" mode="scaleToFill" />
          <view class="delete"><wd-icon name="close" size="16rpx" color="#ffffff"></wd-icon></view>
        </view>
        <view v-if="formData.topicImages.length < 6" class="choose-image" @click="chooseImage">
          <image src="@/static/images/index/choose-image-icon.png" mode="scaleToFill" />
        </view>
      </view>
    </view>
  </view>
  <view
    class="fixed-bottom-area"
    :style="{
      paddingBottom: deviceStore.safeAreaInsets.bottom ? '64rpx' : '25rpx',
    }"
  >
    <view class="cancel">取消</view>
    <view class="submit">提交</view>
  </view>
</template>

<script lang="ts" setup>
import { useDeviceStore } from '@/store'

const deviceStore = useDeviceStore()

const formData = reactive({
  topicNumber: '',
  topicTitle: '',
  activeTopicValueIndex: 0,
  topicValues: [
    { id: 1, sign: 'A', value: '' },
    { id: 2, sign: 'B', value: '' },
    { id: 3, sign: 'C', value: '' },
    { id: 4, sign: 'D', value: '' },
    { id: 5, sign: 'E', value: '' },
  ],
  topicImages: [],
})
const chooseImage = () => {
  uni.chooseMedia({
    count: 6,
    mediaType: ['image'],
    sourceType: ['album', 'camera'],
    maxDuration: 30,
    camera: 'back',
    success(res) {
      console.log('🚀 ~ success ~ res:', res)
      console.log(res.tempFiles)
      res.tempFiles.forEach((item) => {
        formData.topicImages.push(item.tempFilePath)
      })
    },
  })
}
</script>

<style lang="scss" scoped>
.memory-container {
  min-height: 100vh;
  padding: 25rpx 25rpx 187rpx 25rpx;

  .card {
    padding: 25rpx;
    margin-bottom: 25rpx;
    background-color: #fff;
    border-radius: 8rpx;

    .title {
      font-size: 32rpx;
      font-weight: 400;
      color: #333333;
    }

    .sub-title {
      font-size: 24rpx;
      font-weight: 400;
      color: #999999;
    }

    :deep(.input) {
      padding: 0 !important;

      .wd-input__label-inner,
      .wd-input__value {
        font-size: 32rpx;
        font-weight: 400;
        color: #333333;
      }

      .wd-input__value {
        text-align: right;
      }
    }

    :deep(.textarea) {
      padding: 0 !important;
      margin-top: 25rpx !important;

      .wd-textarea__value {
        .wd-textarea__inner {
          padding: 25rpx !important;
          background-color: #f8f8f8 !important;
        }
      }
    }

    .chooses {
      display: flex;
      padding: 25rpx 0 0 0;

      .item {
        width: 84rpx;
        height: 84rpx;
        margin-right: 25rpx;
        font-size: 32rpx;
        line-height: 84rpx;
        color: #333333;
        text-align: center;
        background: #eeeeee;
        border-radius: 42rpx;

        &.active {
          color: #1f53ff;
          background: rgba(120, 156, 255, 0.2);
        }
      }
    }

    .image-list {
      display: grid;
      grid-template-columns: repeat(4, 140rpx);
      gap: 30rpx;
      margin-top: 25rpx;

      .image-wrapper {
        position: relative;
        width: 140rpx;
        height: 140rpx;

        image {
          width: 140rpx;
          height: 140rpx;
          overflow: hidden;
          border-radius: 8rpx;
        }

        .delete {
          position: absolute;
          top: -15rpx;
          right: -15rpx;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30rpx;
          height: 30rpx;
          vertical-align: middle;
          background-color: #333333;
          border-radius: 50%;

          :deep(.wd-icon) {
            vertical-align: middle;
          }
        }
      }

      .choose-image {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 140rpx;
        height: 140rpx;
        background: #f8f8f8;
        border-radius: 8rpx;

        image {
          width: 56rpx;
          height: 57rpx;
        }
      }
    }
  }
}

.fixed-bottom-area {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 98rpx;
  padding: 25rpx 25rpx 0 25rpx;
  background: #ffffff;

  .cancel {
    flex: 1;
    height: 85rpx;
    margin-right: 25rpx;
    font-size: 32rpx;
    font-weight: 700;
    line-height: 85rpx;
    color: #1f53ff;
    text-align: center;
    border: 1rpx solid #1f53ff;
    border-radius: 8rpx;
  }

  .submit {
    flex: 1;
    height: 85rpx;
    margin-left: 25rpx;
    font-size: 32rpx;
    font-weight: 700;
    line-height: 85rpx;
    color: #ffffff;
    text-align: center;
    background: #1f53ff;
    border-radius: 8rpx;
  }
}
</style>
