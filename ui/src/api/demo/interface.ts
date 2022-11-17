export interface RequestData {
  pipeline: string
  data: any
}

export interface ResultsData {
  count: number
  data: any[]
  pipeline: string
  status: string
  time: number
}

export interface ExecuteRequest {
  requests: RequestData[]
}

export interface ExecuteRespose {
  results: ResultsData[]
}
