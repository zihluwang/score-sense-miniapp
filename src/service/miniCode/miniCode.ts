import { http } from '@/utils/http'

export interface IMiniCodeParams {
  scene: string
  page: string
  checkPath: boolean
}

/**
 *获取小程序码
 */
export const getMiniCodeReq = (params: IMiniCodeParams) => {
  return http.get('/share/qrcode', params)
}
