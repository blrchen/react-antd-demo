import config from '@/config'
import http from '@/utils/http'

const API_PATH = `${config.API_PATH}/projects`

export const projectList = (playload: any) => {
  return http.get(`${API_PATH}/projects`)
}

export const dataSources = (playload: any) => {
  const { project } = playload

  return http.get(`${API_PATH}/${project}/datasources`)
}
