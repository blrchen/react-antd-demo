import config from '@/config'
import http from '@/utils/http'

const API_PATH = `${config.API_PATH}`

export const allRuns = () => {
  return http.get(`${API_PATH}/all_runs`)
}

export const allStatus = (id: number | string) => {
  return http.get(`${API_PATH}/all_status`, { id })
}

export const allPoints = (id: number | string) => {
  return http.get(`${API_PATH}/all_points`, { id })
}

export const annotationTarget = (id: number | string) => {
  return http.get(`${API_PATH}/annotation_target`, { id })
}

export const updateAnnotation = (playload: any) => {
  return http.post(`${API_PATH}/update_annotation`, playload)
}
