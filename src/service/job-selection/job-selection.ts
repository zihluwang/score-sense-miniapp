import { http } from '@/utils/http'

interface JobListParams {
  currentPage: number
  pageSize: number
  examId: string
  name: string
  province: string
  prefecture: string
}

/**
 * 获取岗位列表
 * @param params
 * @returns
 */
export const getJobListReq = (params: JobListParams) => {
  return http.get('/vacancies/', params)
}
