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
      id="swiper"
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
      <Tabs :tabs="tabs" @change-tab="handleChangeTab" />
      <!-- 列表 -->
      <scroll-view class="exam-list-wrapper" enable-flex scroll-y>
        <view class="exam-list" v-if="examList.length">
          <view class="exam-list-item" v-for="item in examList" :key="item.id">
            <view class="top-row">
              <view class="pass-num">已有{{ item.users }}人参与</view>
              <view class="menus">
                <view class="memory" @click="toMemoryPage(item.id)">
                  我来回忆
                  <wd-icon name="arrow-right" size="32rpx"></wd-icon>
                </view>
                <view class="share">
                  分享
                  <wd-icon name="arrow-right" size="32rpx"></wd-icon>
                </view>
              </view>
            </view>
            <view class="middle-row ellipsis-2">
              {{ item.name }}
            </view>
            <view class="bottom-row">
              <view class="publish-time">上线时间：{{ item.publishTime }}</view>
              <view v-if="item.type === 1" class="buttons-1">预约估分</view>
              <view v-else-if="item.type === 2" class="buttons-2">
                <view class="left">重新估分</view>
                <view class="right">查看报告</view>
              </view>
              <view v-else class="buttons-3">确认报名</view>
            </view>
          </view>
        </view>
        <view v-else class="no-data">
          <image
            class="no-data-image"
            src="@/static/images/index/list-no-data.png"
            mode="scaleToFill"
          />
          <text class="tip">试卷整理中～</text>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import Tabs from '@/components/Tabs/Tabs.vue'
import { ITabsItem } from '@/types/index/tabs'
import { showLoading, hideLoading } from '@/utils/toast'

defineOptions({
  name: 'Home',
})

const toMemoryPage = (id: string | number) => {
  uni.navigateTo({
    url: '/pages/memory/memory?id=' + id,
  })
}

const current = ref<number>(0)
const swiperList = ref([
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/redpanda.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/capybara.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/panda.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/moon.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/meng.jpg',
])

const tabs = ref<ITabsItem[]>([
  { id: 1, title: '最新' },
  { id: 2, title: '公务员' },
  { id: 3, title: '事业单位' },
  { id: 4, title: '教师' },
  { id: 5, title: '军队文职' },
  { id: 6, title: '医疗' },
  { id: 7, title: '研究生' },
  { id: 8, title: '选调生' },
  { id: 9, title: '公安招警' },
  { id: 10, title: '遴选' },
  { id: 11, title: '国企' },
  { id: 12, title: '三支一扶' },
  { id: 13, title: '书记员' },
  { id: 14, title: '六项人员' },
])
const handleChangeTab = (tab: ITabsItem, currentTab: string, index: number) => {
  console.log(tab)
  console.log(currentTab)
  console.log(index)
  showLoading()
  examList.value = []

  setTimeout(() => {
    hideLoading()
    examList.value = [
      {
        id: 1,
        users: 30,
        name: '杭州上城区事业单位招聘笔试题目 - 根据考生回忆整理',
        publishTime: '09月23日 10:30',
        type: 1,
      },
      {
        id: 2,
        users: 99,
        name: '杭州上城区事业单位招聘笔试题目 - 根据考生回忆整理',
        publishTime: '09月23日 10:30',
        type: 2,
      },
      {
        id: 3,
        users: 4,
        name: '杭州上城区事业单位招聘笔试题目 - 根据考生回忆整理',
        publishTime: '09月23日 10:30',
        type: 3,
      },
      {
        id: 4,
        users: 78,
        name: '杭州上城区事业单位招聘笔试题目 - 根据考生回忆整理',
        publishTime: '09月23日 10:30',
        type: 2,
      },
      {
        id: 5,
        users: 128,
        name: '杭州上城区事业单位招聘笔试题目 - 根据考生回忆整理',
        publishTime: '09月23日 10:30',
        type: 1,
      },
      {
        id: 6,
        users: 887,
        name: '杭州上城区事业单位招聘笔试题目 - 根据考生回忆整理',
        publishTime: '09月23日 10:30',
        type: 2,
      },
      {
        id: 7,
        users: 1,
        name: '杭州上城区事业单位招聘笔试题目 - 根据考生回忆整理',
        publishTime: '09月23日 10:30',
        type: 3,
      },
      {
        id: 8,
        users: 99,
        name: '杭州上城区事业单位招聘笔试题目 - 根据考生回忆整理',
        publishTime: '09月23日 10:30',
        type: 2,
      },
      {
        id: 9,
        users: 2,
        name: '杭州上城区事业单位招聘笔试题目 - 根据考生回忆整理',
        publishTime: '09月23日 10:30',
        type: 1,
      },
    ]
  }, 1500)
}

const examList = ref([
  {
    id: 1,
    users: 30,
    name: '杭州上城区事业单位招聘笔试题目 - 根据考生回忆整理',
    publishTime: '09月23日 10:30',
    type: 1,
  },
  {
    id: 2,
    users: 99,
    name: '杭州上城区事业单位招聘笔试题目 - 根据考生回忆整理',
    publishTime: '09月23日 10:30',
    type: 2,
  },
  {
    id: 3,
    users: 4,
    name: '杭州上城区事业单位招聘笔试题目 - 根据考生回忆整理',
    publishTime: '09月23日 10:30',
    type: 3,
  },
  {
    id: 4,
    users: 78,
    name: '杭州上城区事业单位招聘笔试题目 - 根据考生回忆整理',
    publishTime: '09月23日 10:30',
    type: 2,
  },
  {
    id: 5,
    users: 128,
    name: '杭州上城区事业单位招聘笔试题目 - 根据考生回忆整理',
    publishTime: '09月23日 10:30',
    type: 1,
  },
  {
    id: 6,
    users: 887,
    name: '杭州上城区事业单位招聘笔试题目 - 根据考生回忆整理',
    publishTime: '09月23日 10:30',
    type: 2,
  },
  {
    id: 7,
    users: 1,
    name: '杭州上城区事业单位招聘笔试题目 - 根据考生回忆整理',
    publishTime: '09月23日 10:30',
    type: 3,
  },
  {
    id: 8,
    users: 99,
    name: '杭州上城区事业单位招聘笔试题目 - 根据考生回忆整理',
    publishTime: '09月23日 10:30',
    type: 2,
  },
  {
    id: 9,
    users: 2,
    name: '杭州上城区事业单位招聘笔试题目 - 根据考生回忆整理',
    publishTime: '09月23日 10:30',
    type: 1,
  },
])
</script>

<style scoped lang="scss">
.index-container {
  height: 100vh;

  // 关闭轮播图的圆角
  :deep(.swiper) {
    .wd-swiper__track {
      height: 364rpx !important;
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
    padding: 25rpx 25rpx 0 25rpx;

    .notice-bar {
      display: flex;
      align-items: center;
      height: 30rpx;
      margin-bottom: 25rpx;

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

    .exam-list-wrapper {
      height: calc(100vh - 604rpx);
      margin-top: 25rpx;

      .exam-list {
        padding-bottom: 25rpx;

        .exam-list-item {
          position: relative;
          height: 260rpx;
          padding: 0 25rpx 25rpx 25rpx;
          margin-bottom: 25rpx;
          background: linear-gradient(180deg, #e8f5ff 0%, #ffffff 30%, #ffffff 100%);
          border-radius: 28rpx;
          box-shadow: 0rpx 1rpx 4rpx 0rpx #999999;

          &:nth-last-child(1) {
            margin-bottom: 0;
          }

          .top-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 59rpx;

            .pass-num {
              position: absolute;
              top: 0;
              left: 0;
              width: 198rpx;
              height: 59rpx;
              font-size: 24rpx;
              font-weight: 500;
              line-height: 59rpx;
              color: #ffffff;
              text-align: center;
              background: linear-gradient(270deg, #3075f3 0%, #7993f8 100%);
              border-radius: 28rpx 0rpx 28rpx 0rpx;
            }

            .menus {
              display: flex;
              align-items: center;
              justify-content: flex-end;
              width: 250rpx;
              height: 59rpx;
              margin-right: 0;
              margin-left: auto;
              font-size: 24rpx;
              color: #1f53ff;

              .share {
                margin-left: 25rpx;
              }

              .share,
              .memory {
                display: flex;
              }
            }
          }

          .middle-row {
            width: 100%;
            margin-top: 17rpx;
            font-size: 32rpx;
            font-weight: 700;
            line-height: 45rpx;
            color: #333333;
          }

          .bottom-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 22rpx;

            .publish-time {
              font-size: 24rpx;
              font-weight: 400;
              color: #999999;
            }

            .buttons-1 {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 177rpx;
              height: 63rpx;
              font-size: 28rpx;
              font-weight: 500;
              color: #1f53ff;
              border: 1rpx solid #1f53ff;
              border-radius: 48rpx;
            }

            .buttons-2 {
              display: flex;
              width: 271rpx;
              height: 63rpx;
              overflow: hidden;
              font-size: 24rpx;
              font-weight: 500;
              color: #ffffff;
              border-radius: 48rpx;

              .left {
                display: flex;
                flex: 1;
                align-items: center;
                justify-content: center;
                background: #1f53ff;
              }

              .right {
                display: flex;
                flex: 1;
                align-items: center;
                justify-content: center;
                background: #ffaa27;
              }
            }

            .buttons-3 {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 177rpx;
              height: 63rpx;
              font-size: 28rpx;
              font-weight: 500;
              color: #ffffff;
              background: #1f53ff;
              border-radius: 48rpx;
            }
          }
        }
      }

      .no-data {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;

        .no-data-image {
          width: 335rpx;
          height: 245rpx;
          margin-bottom: 25rpx;
        }

        .tip {
          font-size: 32rpx;
          font-weight: 400;
          line-height: 45rpx;
          color: #666666;
          text-align: center;
        }
      }
    }
  }
}

.content {
  line-height: 120px;
  text-align: center;
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
