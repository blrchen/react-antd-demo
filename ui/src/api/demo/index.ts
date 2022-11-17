import config from '@/config'
import http from '@/utils/http'

const API_PATH = `${config.API_PATH}`

export const allRuns = () => {
  return http.get(`${API_PATH}/all_runs`)
}
