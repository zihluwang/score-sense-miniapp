<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '在线估分',
  },
}
</route>

<template>
  <view class="answer-container h-100vh flex flex-col">
    <!-- 题目卡片 -->
    <view class="wrapper flex-1 p-25rpx bg-white flex flex-col">
      <view class="h-33rpx flex items-center justify-between">
        <view class="text-24rpx text-#999999 w-585rpx ellipsis">
          杭州上城区事业单位招聘笔试题目 - 根据考生回忆整理
        </view>
        <view class="text-24rpx text-#999999">
          <text class="text-#333333">{{ nth }}</text>
          /50题
        </view>
      </view>

      <view
        class="flex-1 flex"
        :style="{
          Transition: 'transform 0.3s',
          transform: `translateX(${translateX}rpx)`,
        }"
      >
        <view
          class="exam-item flex-none w-700rpx h-full mr-50rpx"
          v-for="(item, index) in topics"
          :key="item.id"
          @touchstart="touchStart"
          @touchend="touchEnd($event, index)"
        >
          <view class="h-44rpx flex items-center justify-between mt-25rpx">
            <view class="px-20rpx py-5rpx bg-#E8F0FF rounded-1000rpx flex center">
              <text class="text-24rpx text-#1F53FF">{{ currentExamType }}</text>
            </view>
            <image
              class="w-44rpx h-44rpx"
              src="@/static/images/answering/draft-icon.png"
              mode="scaleToFill"
            />
          </view>

          <view class="text-#333333 text-30rpx leading-47rpx mt-25rpx mb-40rpx">
            {{ item.index }}、{{ item.question }}
          </view>

          <view class="choices mt-25rpx">
            <view
              class="item h-96rpx bg-#f8f8f8 rounded-4rpx py-25rpx px-30rpx mb-20rpx flex items-center"
              v-for="(item2, index) in item.options"
              :key="item2"
            >
              <view class="text-30rpx text-#333333 mr-25rpx">{{ choices[index] }}</view>
              <view
                class="h-30rpx text-30rpx text-#999999 mr-25rpx"
                style="border-right: 2rpx solid #999999"
              />
              <view class="text-30rpx text-#333333">{{ item2 }}</view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- 底部三个按钮 -->
    <view
      class="px-25rpx pt-25rpx bg-white flex items-center justify-center"
      style="border: 2rpx solid #e5e5e5"
      :style="{
        paddingBottom: deviceStore.safeAreaInsets.bottom ? '64rpx' : '25rpx',
      }"
    >
      <view v-show="nth <= 1" class="item flex flex-col items-center justify-between mr-170rpx">
        <image
          class="w-44rpx h-44rpx"
          src="@/static/images/answering/prev-icon.png"
          mode="scaleToFill"
        />
        <text class="text-24rpx text-#333333 mt-4rpx">上一题</text>
      </view>
      <view
        v-show="nth > 1"
        class="item flex flex-col items-center justify-between mr-170rpx"
        @click="leftOne"
      >
        <image
          class="w-44rpx h-44rpx"
          src="@/static/images/answering/prev-icon-active.png"
          mode="scaleToFill"
        />
        <text class="text-24rpx text-#333333 mt-4rpx">上一题</text>
      </view>
      <view class="item flex flex-col items-center justify-between">
        <image
          class="w-44rpx h-44rpx"
          src="@/static/images/answering/sheet-icon.png"
          mode="scaleToFill"
        />
        <text class="text-24rpx text-#333333 mt-4rpx">答题卡</text>
      </view>
      <view
        v-show="!isExamAnswerFinish"
        class="item flex flex-col items-center justify-between ml-170rpx"
        @click="rightOne"
      >
        <image
          class="w-44rpx h-44rpx"
          src="@/static/images/answering/next-icon.png"
          mode="scaleToFill"
        />
        <text class="text-24rpx text-#333333 mt-4rpx">下一题</text>
      </view>
      <view
        v-show="isExamAnswerFinish"
        class="item flex flex-col items-center justify-between ml-170rpx"
      >
        <image
          class="w-44rpx h-44rpx"
          src="@/static/images/answering/post-exam-icon.png"
          mode="scaleToFill"
        />
        <text class="text-24rpx text-#333333 mt-4rpx">去交卷</text>
      </view>
    </view>
  </view>
  <!-- <wd-watermark content="公途公考·估分助手" :width="130" :height="130"></wd-watermark> -->
</template>

<script lang="ts" setup>
import { useDeviceStore } from '@/store/device'
import { ref } from 'vue'
import topicList from './data.json'

const deviceStore = useDeviceStore()

// 选项
const choices = ref('ABCDEFGHIJKLMNOPQRSTUVWXYZ')

// 判断现在这张试卷是否已经作答完成
const isExamAnswerFinish = computed(() => nth.value >= topicList.length)
// 当前题目的类型
const currentExamType = computed(() => {
  const type = topics.value[nth.value - 1].type
  if (type === 1) {
    return '单选'
  } else if (type === 2) {
    return '多选'
  } else {
    return '判断'
  }
})
// 题目列表
const topics = ref([...topicList])
// 下一个index（下标计算）
const newIndex = ref(0)
// 当前第几题(下标计算)
const nth = ref(1)
// 移动的距离（通过下标计算）
const translateX = ref(0)

const rightOne = () => {
  translateX.value = translateX.value - 750
  newIndex.value = newIndex.value + 1
  nth.value = nth.value + 1
}
const leftOne = () => {
  translateX.value = translateX.value + 750
  newIndex.value = newIndex.value - 1
  nth.value = nth.value - 1
}

const startX = ref(0)
const touchStart = (e) => {
  // 手指触摸屏幕时触发，有一个手指放在屏幕上也会触发
  // 获取触摸时的原点
  startX.value = e.changedTouches[0].pageX // 触摸目标在页面中的X坐标
  // console.log('开始触摸：', this.startX);
}
const touchEnd = (e, index) => {
  // 手指离开屏幕时触发
  // 获取滑动距离
  const moveX = e.changedTouches[0].pageX - startX.value
  // 判断滑动方向
  if (moveX < -100 && index < topics.value.length - 1) {
    // 下一题 判断大幅度左滑且不是最后一题
    rightOne()
  } else if (moveX > 100 && index !== 0) {
    // 上一题 判断大幅度右滑且不是第一题
    leftOne()
  }
}
</script>

<style lang="scss" scoped>
.choices {
  .item {
    &.active {
      background-color: #e8f0ff !important;
      border: 2rpx solid #487ef7 !important;
    }
  }
}

.exam-item {
  &:nth-last-child(1) {
    margin-right: 0 !important;
  }
}

@keyframes toRight {
  0% {
    opacity: 1;
    transform: translateX(-100%);
  }

  50% {
    opacity: 1;
    transform: translateX(0);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.toRight {
  animation-name: toRight;
  animation-duration: 1.3s;
  animation-timing-function: ease-in-out;
}

@keyframes toLeft {
  0% {
    opacity: 1;
    transform: translateX(100%);
  }

  50% {
    opacity: 1;
    transform: translateX(0);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.toLeft {
  animation-name: toLeft;
  animation-duration: 1.3s;
  animation-timing-function: ease-in-out;
}
</style>
