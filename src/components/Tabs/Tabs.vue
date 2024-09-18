<template>
  <scroll-view scroll-x class="tab-bar" :scroll-into-view="currentTab" scroll-with-animation>
    <view
      v-for="(tab, index) in tabs"
      :key="index"
      :id="'tab' + index"
      class="tab-item"
      :class="{ active: currentTab === 'tab' + index }"
      @tap="handleTabChange(tab, index)"
    >
      <text class="text">{{ tab.title }}</text>
      <view class="line"></view>
    </view>
  </scroll-view>
</template>

<script lang="ts" setup>
import { ITabsItem } from '@/types/index/tabs'

defineProps<{
  tabs: ITabsItem[]
}>()

const emit = defineEmits<{
  (e: 'changeTab', item: ITabsItem, currentTab: string, index: number): void
}>()

const currentTab = ref('tab0')
const handleTabChange = (item: ITabsItem, index: number) => {
  currentTab.value = 'tab' + index
  emit('changeTab', item, currentTab.value, index)
}
</script>

<style lang="scss" scoped>
.tab-bar {
  display: flex;
  height: 50rpx;
  overflow: hidden;
  white-space: nowrap;
}

.tab-item {
  display: inline-block;
  height: 50rpx;
  margin-right: 45rpx;
  font-size: 28rpx;
  line-height: 40rpx;
  color: #999;

  &:nth-last-child(1) {
    margin-right: 0;
  }

  .line {
    width: 100%;
    height: 5rpx;
    margin-top: 5rpx;
    background-color: #1f53ff;
    opacity: 0;
  }
}

.tab-item.active {
  font-size: 28rpx;
  font-weight: 700;
  line-height: 40rpx;
  color: #333;

  .line {
    opacity: 1;
  }
}
</style>
