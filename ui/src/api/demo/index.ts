import config from '@/config'
import http from '@/utils/http'

import { ExecuteRequest, ExecuteRespose } from './interface'

const API_PATH = `${config.API_PATH}`

export const execute = (model: ExecuteRequest): Promise<ExecuteRespose> => {
  return http.post(`${API_PATH}/execute`, model)
}
