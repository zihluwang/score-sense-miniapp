import { http } from '@/utils/http'

/**
 * 登录请求
 * @param code 一键登录获取的code
 */
export const loginReq = (code: string) => {
  const reqData = { code }
  return http.post<IUserInfo>('/users/login', reqData)
}
