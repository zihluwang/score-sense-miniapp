<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '估分排名',
  },
}
</route>

<template>
  <view
    class="score-ranking-container"
    :style="{
      background: `url('${bgBase64}') no-repeat`,
      backgroundSize: '100% 100%',
    }"
  >
    <view class="padding-wrapper">
      <view class="top-three-wrapper">
        <view
          class="item second"
          :style="{
            background: `url('${secondBase64}') no-repeat`,
            backgroundSize: '100% 100%',
          }"
        >
          <image :src="topThree[1].avatar" mode="scaleToFill" />
          <view class="username">{{ topThree[1].name }}</view>
          <view class="score">
            <text>{{ topThree[1].score }}</text>
            分
          </view>
        </view>
        <view
          class="item first"
          :style="{
            background: `url('${firstBase64}') no-repeat`,
            backgroundSize: '100% 100%',
          }"
        >
          <image :src="topThree[0].avatar" mode="scaleToFill" />
          <view class="username">{{ topThree[0].name }}</view>
          <view class="score">
            <text>{{ topThree[0].score }}</text>
            分
          </view>
        </view>
        <view
          class="item third"
          :style="{
            background: `url('${thirdBase64}') no-repeat`,
            backgroundSize: '100% 100%',
          }"
        >
          <image :src="topThree[2].avatar" mode="scaleToFill" />
          <view class="username">{{ topThree[2].name }}</view>
          <view class="score">
            <text>{{ topThree[2].score }}</text>
            分
          </view>
        </view>
      </view>
      <view class="ranking-list-wrapper">
        <view class="item" v-for="item in rankList" :key="item.rank">
          <view class="rank">{{ item.rank }}</view>
          <image class="avatar" :src="item.avatar" mode="scaleToFill" />
          <view class="username">{{ item.name }}</view>
          <view class="score">
            <text>{{ item.score }}</text>
            分
          </view>
        </view>
      </view>
    </view>
    <view class="my-ranking-wrapper">
      <view class="rank">{{ myRank.rank }}</view>
      <image class="avatar" :src="myRank.avatar" mode="scaleToFill" />
      <view class="username">{{ myRank.name }}</view>
      <view class="score">
        <text>{{ myRank.score }}</text>
        分
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import scoreRankingBg from '@/static/images/score-ranking/ranking-bg.png'
import first from '@/static/images/score-ranking/first.png'
import second from '@/static/images/score-ranking/second.png'
import third from '@/static/images/score-ranking/third.png'

const bgBase64 =
  'data:image/png;base64,' + uni.getFileSystemManager().readFileSync(scoreRankingBg, 'base64')

const firstBase64 =
  'data:image/png;base64,' + uni.getFileSystemManager().readFileSync(first, 'base64')

const secondBase64 =
  'data:image/png;base64,' + uni.getFileSystemManager().readFileSync(second, 'base64')

const thirdBase64 =
  'data:image/png;base64,' + uni.getFileSystemManager().readFileSync(third, 'base64')

const topThree = ref([
  {
    id: 1,
    name: '用户咪咪',
    score: 100,
    avatar:
      'https://img1.baidu.com/it/u=1653751609,236581088&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
    rank: 1,
  },
  {
    id: 2,
    name: '用户西西',
    score: 97,
    avatar:
      'https://img1.baidu.com/it/u=1653751609,236581088&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
    rank: 2,
  },
  {
    id: 3,
    name: '用户1233',
    score: 92,
    avatar:
      'https://img1.baidu.com/it/u=1653751609,236581088&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
    rank: 3,
  },
])

const rankList = ref([
  {
    id: 33,
    name: '用户1233',
    score: 87,
    avatar:
      'https://img1.baidu.com/it/u=1653751609,236581088&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
    rank: 4,
  },
  {
    id: 3333,
    name: '用户1233',
    score: 85,
    avatar:
      'https://img1.baidu.com/it/u=1653751609,236581088&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
    rank: 5,
  },
  {
    id: 33333,
    name: '用户1233',
    score: 80,
    avatar:
      'https://img1.baidu.com/it/u=1653751609,236581088&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
    rank: 6,
  },
  {
    id: 3333333,
    name: '用户1233',
    score: 74,
    avatar:
      'https://img1.baidu.com/it/u=1653751609,236581088&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
    rank: 7,
  },
  {
    id: 3222,
    name: '用户1233',
    score: 73,
    avatar:
      'https://img1.baidu.com/it/u=1653751609,236581088&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
    rank: 8,
  },
  {
    id: 322,
    name: '用户1233',
    score: 72,
    avatar:
      'https://img1.baidu.com/it/u=1653751609,236581088&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
    rank: 9,
  },
  {
    id: 311,
    name: '用户1233',
    score: 72,
    avatar:
      'https://img1.baidu.com/it/u=1653751609,236581088&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
    rank: 10,
  },
  {
    id: 311,
    name: '用户1233',
    score: 72,
    avatar:
      'https://img1.baidu.com/it/u=1653751609,236581088&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
    rank: 11,
  },
  {
    id: 311,
    name: '用户1233',
    score: 72,
    avatar:
      'https://img1.baidu.com/it/u=1653751609,236581088&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
    rank: 12,
  },
  {
    id: 311,
    name: '用户1233',
    score: 72,
    avatar:
      'https://img1.baidu.com/it/u=1653751609,236581088&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
    rank: 13,
  },
  {
    id: 311,
    name: '用户1233',
    score: 72,
    avatar:
      'https://img1.baidu.com/it/u=1653751609,236581088&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
    rank: 14,
  },
  {
    id: 411,
    name: '用户1233',
    score: 72,
    avatar:
      'https://img1.baidu.com/it/u=1653751609,236581088&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
    rank: 15,
  },
])

const myRank = reactive({
  id: 3,
  name: '小羊肖恩',
  score: 92,
  avatar:
    'https://img1.baidu.com/it/u=1653751609,236581088&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
  rank: 233,
})
</script>

<style lang="scss" scoped>
.score-ranking-container {
  display: flex;
  flex-direction: column;
  // padding-bottom: 64rpx;

  .padding-wrapper {
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
    padding: 25rpx 25rpx 0 25rpx;

    .top-three-wrapper {
      display: flex;
      align-items: flex-end;
      width: 100%;
      height: 429rpx;
      margin-top: 21rpx;

      .item {
        flex: 1;
        text-align: center;

        image {
          width: 98rpx;
          height: 98rpx;
          overflow: hidden;
          border-radius: 50%;
        }

        .username {
          margin-top: 88rpx;
          font-size: 28rpx;
          font-weight: 500;
          color: #333333;
        }

        .score {
          margin-top: 7rpx;
          font-size: 20rpx;
          font-weight: 400;
          color: #999999;
          text-align: center;

          text {
            font-size: 40rpx;
            font-weight: 700;
          }
        }

        &.first {
          height: 429rpx;

          .score {
            text {
              color: #ffaa27;
            }
          }
        }

        &.second {
          height: 358rpx;

          .score {
            text {
              color: #487ef7;
            }
          }
        }

        &.third {
          height: 358rpx;

          .score {
            text {
              color: #ed918b;
            }
          }
        }
      }
    }

    .ranking-list-wrapper {
      flex: 1;
      margin-top: 18rpx;

      .item {
        display: flex;
        align-items: center;
        height: 110rpx;
        padding: 25rpx;
        border-bottom: 2rpx solid #eee;

        .rank {
          width: 60rpx;
          margin-right: 25rpx;
          font-size: 28rpx;
          color: #333333;
        }

        .avatar {
          width: 58rpx;
          height: 58rpx;
          margin-right: 20rpx;
          overflow: hidden;
          border-radius: 50%;
        }

        .username {
          font-size: 28rpx;
          color: #333333;
        }

        .score {
          margin-right: 0;
          margin-left: auto;
          font-size: 20rpx;
          color: #333333;

          text {
            font-size: 32rpx;
            font-weight: 500;
          }
        }
      }
    }
  }

  .my-ranking-wrapper {
    display: flex;
    align-items: center;
    height: 110rpx;
    padding: 25rpx 50rpx;
    background: #487ef7;

    .rank {
      width: 60rpx;
      margin-right: 25rpx;
      font-size: 28rpx;
      color: #ffffff;
    }

    .avatar {
      width: 58rpx;
      height: 58rpx;
      margin-right: 20rpx;
      overflow: hidden;
      border-radius: 50%;
    }

    .username {
      font-size: 28rpx;
      color: #ffffff;
    }

    .score {
      margin-right: 0;
      margin-left: auto;
      font-size: 20rpx;
      color: #ffffff;

      text {
        font-size: 32rpx;
        font-weight: 500;
      }
    }
  }
}
</style>
