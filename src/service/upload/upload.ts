import { http } from '@/utils/http'

export interface IUploadFileParams {
  file: File
  name: string
}

export interface IUploadFileResp {
  id: string
  name: string
  path: string
  contentType: string
}

export const uploadFileReq = (data: IUploadFileParams) => {
  return http.post('/attachments/', data)
}
