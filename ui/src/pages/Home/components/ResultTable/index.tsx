import React from 'react'

import { Card } from 'antd'

import ResizeTable from '@/components/ResizeTable'

export interface ResultTableProps {
  data?: any[]
}

const ResultTable = (props: ResultTableProps) => {
  const { data } = props

  const columns = [
    {
      title: 'Funtion',
      dataIndex: 'pipeline',
      width: 100,
      ellipsis: true
    },
    {
      title: 'Count',
      dataIndex: 'count',
      width: 100,
      ellipsis: true
    },
    {
      title: 'Time',
      dataIndex: 'time',
      width: 150,
      ellipsis: true
    },
    {
      title: 'Data',
      dataIndex: 'data',
      render: (col: any) => {
        return JSON.stringify(col)
      }
    },
    {
      title: 'Status',
      dataIndex: 'status'
    }
  ]

  return (
    <Card title="Result List" bodyStyle={{ padding: 0 }}>
      <ResizeTable dataSource={data} columns={columns} scroll={{ y: 600 }} />
    </Card>
  )
}

export default ResultTable
