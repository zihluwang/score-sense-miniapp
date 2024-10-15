# 公途公考估分助手

### 未完成的功能

- 界面基本都画好了
- 首页的接口基本都对接了，分享海报的小程序码还没实现
- 首页的其他接口有问题的重新对一下
- 选择岗位页面需要实现一个岗位列表用来选择
- 考试相关的接口都要对接
- 页面基本都画的差不多了

### 代码分层

- pages 里面的都是页面
  - analysis 考试解析
  - answering 答题界面
  - index 首页
  - job-selection 岗位选择界面
  - memory 我来回忆界面
  - my 我的界面
  - score-ranking 考试排名界面
  - score-report 考试报告界面
  - start-scoring 开始估分界面
- service 里面是封装的接口，每一个页面都有自己的接口文件，通过文件名进行对应
- static 里面是静态资源，主要是图片，在static/images/下面，通过名称进行对应

### 项目相关文档

https://codercup.github.io/unibest-docs/

https://wot-design-uni.pages.dev/

https://limeui.qcoon.cn/#/overview

https://developers.weixin.qq.com/miniprogram/dev/framework/

https://uniapp.dcloud.net.cn/
