import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  globalStyle: {
    navigationStyle: 'default',
    navigationBarTitleText: 'unibest',
    navigationBarBackgroundColor: '#f8f8f8',
    navigationBarTextStyle: 'black',
    backgroundColor: '#FFFFFF',
  },
  easycom: {
    autoscan: true,
    custom: {
      '^wd-(.*)': 'wot-design-uni/components/wd-$1/wd-$1.vue',
      '^(?!z-paging-refresh|z-paging-load-more)z-paging(.*)':
        'z-paging/components/z-paging$1/z-paging$1.vue',
    },
  },
  tabBar: {
    color: '#999999',
    selectedColor: '#1F53FF',
    backgroundColor: '#FFFFFF',
    borderStyle: 'black',
    height: '50px',
    fontSize: '10px',
    iconWidth: '24px',
    spacing: '3px',
    list: [
      {
        iconPath: 'static/tabbar/index_normal.png',
        selectedIconPath: 'static/tabbar/index_active.png',
        pagePath: 'pages/index/index',
        text: '估分助手',
      },
      {
        iconPath: 'static/tabbar/my_normal.png',
        selectedIconPath: 'static/tabbar/my_active.png',
        pagePath: 'pages/my/my',
        text: '我的估分',
      },
    ],
  },
})
