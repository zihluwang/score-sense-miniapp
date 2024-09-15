export const showLoading = (text?: string) => {
  uni.showLoading({
    title: text || '加载中...',
    mask: true,
  })
}

export const hideLoading = () => {
  uni.hideLoading()
}

export const showToast = (text: string) => {
  uni.showToast({
    title: text,
    icon: 'none',
    duration: 2000,
  })
}
