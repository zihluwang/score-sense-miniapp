import { getDivisionsReq, IDivisionItem } from '@/service/division/divisions'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDivisionStore = defineStore('divisions', () => {
  const divisions = ref([])

  const getDivisions = async () => {
    try {
      const res = await getDivisionsReq()
      console.log('获取省市数据成功', res)
      setDivisions(res as IDivisionItem[])
    } catch (error) {
      console.error('获取省市数据失败', error)
    }
  }

  const setDivisions = async (data: IDivisionItem[]) => {
    divisions.value = data
  }

  const resetDivisions = async () => {
    divisions.value = []
  }

  return {
    divisions,
    getDivisions,
    setDivisions,
    resetDivisions,
  }
})
