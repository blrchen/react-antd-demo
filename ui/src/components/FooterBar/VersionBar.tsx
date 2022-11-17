import React from 'react'

import { Space } from 'antd'
import dayjs from 'dayjs'

import config from '@/config'

export interface VersionBarProps {
  className?: string
}
const VersionBar = (props: VersionBarProps) => {
  const { className } = props
  const generatedTime = dayjs(config.GENERATED_TIME).utc().format('YYYY-MM-DD HH:mm:DD UTC')

  return (
    <Space className={className} size={[46, 0]}>
      <span>Demo UI Version: {config.VERSION}</span>
      <span>Demo UI Build Generated at {generatedTime}</span>
    </Space>
  )
}

export default VersionBar
