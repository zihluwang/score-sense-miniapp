import { http } from '@/utils/http'

/**
 * 获取我的考试历史
 */
export const getExamHistoryListReq = () => {
  return http.get('/exams/historical')
}
