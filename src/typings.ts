// 全局要用的类型放到这里

type IResData<T> = {
  code: number
  msg: string
  data: T
}

// uni.uploadFile文件上传参数
type IUniUploadFileOptions = {
  file?: File
  files?: UniApp.UploadFileOptionFiles[]
  filePath?: string
  name?: string
  formData?: any
}

type IUserInfo = {
  id?: number
  /** 微信的 openid，非微信没有这个字段 */
  openId?: string
  Authorization?: string
  username?: string
  phoneNumber?: string
  avatarUrl?: string
  isBlocked?: boolean
}

enum TestEnum {
  A = 'a',
  B = 'b',
}
