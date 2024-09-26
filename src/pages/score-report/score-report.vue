<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '估分报告',
  },
}
</route>

<template>
  <view class="score-report-container">
    <view class="card">
      <image
        class="restart-icon"
        src="@/static/images/score-report/restart-icon.png"
        mode="scaleToFill"
        @click="restartExam"
      />
      <view class="score-row">
        <text class="score-text">99</text>
        分
      </view>
      <view class="full-score-tip">满分100分</view>
      <view class="rank-area">
        <view class="job-rank">
          <image src="@/static/images/score-report/trophy-icon.png" mode="scaleToFill" />
          <view class="rank-text">
            岗位排名：
            <text>2</text>
            <text>/212</text>
          </view>
        </view>
        <view class="tip">估分排名实时更新</view>
        <view class="exam-result">
          <view class="item pass-topic-num">
            <view class="value">
              <text>49</text>
              <text>/50</text>
            </view>
            <view class="label">答对数量</view>
          </view>
          <view class="item average-score">
            <view class="value">99</view>
            <view class="label">平均分</view>
          </view>
          <view class="item defeat-ratio">
            <view class="value">98%</view>
            <view class="label">击败考生</view>
          </view>
        </view>
      </view>
      <view class="exam-info">
        估分试卷:
        <text class="exam-info-text">临平区事业单位招聘笔试题目-根据考生回忆整理</text>
      </view>
      <view class="exam-info">
        交卷时间:
        <text class="exam-info-text">2024-09-04 10:02:54</text>
      </view>
    </view>
    <view class="card">
      <view class="title">
        <image src="@/static/images/score-report/chart-icon.png" mode="scaleToFill" />
        试卷估分分布图
      </view>
      <view class="chart">
        <qiun-data-charts type="area" :opts="opts" :chartData="chartData" />
      </view>
    </view>
    <view class="card">
      <view class="title">
        <image src="@/static/images/score-report/answer-sheet-icon.png" mode="scaleToFill" />
        答题卡
      </view>
      <view class="color-example">
        <view class="color-example__item">
          <view class="color-dot"></view>
          答对
        </view>
        <view class="color-example__item">
          <view class="color-dot"></view>
          答错
        </view>
        <view class="color-example__item">
          <view class="color-dot"></view>
          未答
        </view>
      </view>
      <view class="mt-30rpx">
        <view class="text-24rpx text-#333333 mb-40rpx">一、单项选择题</view>
        <view class="grid grid-cols-5 gap-50rpx">
          <view
            class="topic-item w-90rpx h-90rpx rounded-50% bg-#eeeeee flex center"
            :class="{ active: item.choose.length > 0 }"
            v-for="item in topics"
            :key="item.id"
          >
            {{ item.index }}
          </view>
        </view>
      </view>
    </view>
  </view>
  <view
    class="fixed-bottom-row"
    :style="{
      paddingBottom: deviceStore.safeAreaInsets.bottom ? '64rpx' : '25rpx',
    }"
  >
    <view class="fixed-bottom-row__btn">查看解析</view>
    <view class="fixed-bottom-row__btn" @click="toRanking">查看排名</view>
  </view>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { onReady } from '@dcloudio/uni-app'
import topicList from '../answering/data.json'
import { useDeviceStore } from '@/store'

const deviceStore = useDeviceStore()

const categories1 = [0, 20, 40, 60, 80, 100]
const data1 = [7, 22, 18, 28, 15, 17]

const chartData = ref({
  categories: categories1,
  series: [
    {
      name: '分布比例',
      data: data1,
    },
  ],
})

const opts = reactive({
  padding: [15, 15, 0, 0], // 控制图标的缩进
  dataLabel: false, // 关闭数据点的文案
  dataPointShape: false, // 关闭数据点的形状
  yAxis: {
    gridType: 'solid',
  },
  legend: {
    show: false, // 关闭图例
  },
  extra: {
    area: {
      type: 'curve',
      addLine: true,
      gradient: true,
    },
  },
})

const restartExam = () => {
  uni.navigateTo({
    url: '/pages/start-scoring/start-scoring',
  })
}

const toRanking = () => {
  uni.navigateTo({
    url: '/pages/score-ranking/score-ranking',
  })
}

// const toAnalysis = () => {
//   uni.navigateTo({
//     url: '/pages/analysis/analysis',
//   })
// }

// 题目列表
const topics = ref([...topicList])
</script>

<style lang="scss" scoped>
.score-report-container {
  min-height: 100vh;
  padding: 25rpx 25rpx 199rpx 25rpx;
  background-color: #f5f5f5;

  .card {
    width: 700rpx;
    padding: 25rpx;
    margin-bottom: 25rpx;
    background: #ffffff;
    border-radius: 8rpx;

    .title {
      display: flex;
      align-items: center;
      font-size: 28rpx;
      font-weight: 500;
      color: #333333;

      image {
        width: 25rpx;
        height: 32rpx;
        margin-right: 17rpx;
      }
    }

    &:nth-child(1) {
      position: relative;
      display: flex;
      flex-direction: column;

      .score-row {
        font-size: 24rpx;
        font-weight: 400;
        color: #666666;
        text-align: center;

        .score-text {
          font-size: 90rpx;
          font-weight: 700;
          color: #10b287;
        }
      }

      .full-score-tip {
        font-size: 22rpx;
        font-weight: 400;
        color: #999999;
        text-align: center;
      }

      .rank-area {
        width: 650rpx;
        height: 224rpx;
        padding-top: 22rpx;
        margin-top: 35rpx;
        background: #f8f8f8;
        border-radius: 8rpx;

        .job-rank {
          display: flex;
          align-items: center;
          justify-content: center;

          image {
            width: 40rpx;
            height: 40rpx;
            margin-right: 5rpx;
          }

          .rank-text {
            font-size: 32rpx;
            font-weight: 700;
            color: #333333;

            text:nth-child(1) {
              color: #1f53ff;
            }

            text:nth-child(2) {
              color: #999999;
            }
          }
        }

        .tip {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 6rpx;
          font-size: 20rpx;
          font-weight: 400;
          color: #999999;
        }

        .exam-result {
          display: flex;
          align-items: center;
          justify-content: space-around;
          margin-top: 33rpx;

          .item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .value {
              font-size: 28rpx;
              font-weight: 500;
              color: #333333;
            }

            .label {
              margin-top: 7rpx;
              font-size: 22rpx;
              font-weight: 400;
              color: #999999;
            }

            &.pass-topic-num {
              .value {
                text:nth-child(1) {
                  color: #333333;
                }
                text:nth-child(2) {
                  color: #999999;
                }
              }
            }

            &.defeat-ratio {
              .value {
                color: #47c3a2;
              }
            }
          }
        }
      }

      .exam-info {
        margin-top: 20rpx;
        font-size: 20rpx;
        font-weight: 400;
        color: #999999;

        &:nth-last-child(1) {
          margin-top: 10rpx;
        }

        .exam-info-text {
          color: #333333;
        }
      }

      .restart-icon {
        position: absolute;
        top: 66rpx;
        right: 0;
        width: 89rpx;
        height: 84rpx;
      }
    }

    &:nth-child(2) {
      .chart {
        width: 100%;
        height: 400rpx;
      }
    }

    &:nth-child(3) {
      position: relative;
      margin-bottom: 0;

      .color-example {
        position: absolute;
        top: 30rpx;
        right: 25rpx;
        display: flex;
        align-items: center;

        .color-example__item {
          display: flex;
          align-items: center;
          margin-right: 17rpx;
          font-size: 22rpx;
          font-weight: 400;
          color: #999999;

          .color-dot {
            width: 15rpx;
            height: 15rpx;
            margin-right: 8rpx;
            border-radius: 50%;
          }

          &:nth-child(1) {
            .color-dot {
              background-color: #47c3a2;
            }
          }

          &:nth-child(2) {
            .color-dot {
              background-color: #f97068;
            }
          }

          &:nth-child(3) {
            .color-dot {
              background-color: #eeeeee;
            }
          }
        }
      }
    }
  }
}

.fixed-bottom-row {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  padding: 25rpx 25rpx 0 25rpx;
  background-color: #fff;

  .fixed-bottom-row__btn {
    flex: 1;
    height: 85rpx;
    border-radius: 8rpx;

    &:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 25rpx;
      font-size: 32rpx;
      font-weight: 500;
      color: #1f53ff;
      border: 1rpx solid #1f53ff;
    }

    &:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 25rpx;
      font-size: 32rpx;
      font-weight: 500;
      color: #ffffff;
      background: #1f53ff;
    }
  }
}
</style>
