import { http } from '@/utils/http'

/**
 * 获取轮播图列表
 * @returns
 */
export const getSwiperListReq = () => {
  return http.get('/swipes/enabled')
}

/**
 * 获取考试分类列表
 * @returns
 */
export const getExamTypeListReq = () => {
  return http.get<{ records: any[] }>('/exams/types')
}

/**
 * 根据分类id获取考试列表
 * @param typeId 分类id
 * @param divisionCode 地区id
 * @returns
 */
export const getExamListReq = (typeId: string, divisionCode: string) => {
  return http.get(`/exams/types/${typeId}`, { divisionCode })
}
