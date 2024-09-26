// 将 base64 数据转换为微信小程序内部临时文件地址
export function base64ToTempFilePath(base64Data, callback) {
  const fs = wx.getFileSystemManager()
  const [match, format, bodyData] = /data:image\/(\w+);base64,(.*)/.exec(base64Data) || []
  if (!match) {
    console.error('ERROR_BASE64SRC_PARSE')
    return
  }
  const filePath = `${wx.env.USER_DATA_PATH}/temp_image.${format}`
  const buffer = wx.base64ToArrayBuffer(bodyData)

  fs.writeFile({
    filePath,
    data: buffer,
    encoding: 'binary',
    success: (res) => {
      callback(filePath)
    },
    fail: (err) => {
      console.error('ERROR_BASE64SRC_WRITE', err)
    },
  })
}

// 示例用法
// const base64Data = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...'
// base64ToTempFilePath(base64Data, (tempFilePath) => {
//   console.log('临时文件路径:', tempFilePath)
//   // 可以将 tempFilePath 赋值给 <image> 组件的 src 属性
//   // this.setData({ imageSrc: tempFilePath });
// })
