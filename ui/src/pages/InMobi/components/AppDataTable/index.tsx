import React, { Key } from 'react'

import { Card } from 'antd'

import ResizeTable from '@/components/ResizeTable'

export interface AppData {
  id: number
  fv: number
  os: string
  appBundle: string
  osVersion: string
}

export interface AppDataProp {
  data?: AppData[]
  selectedKeys?: Key[]
  onSelect?: (selectedRowKeys: Key[], selectedRows: AppData[]) => void
}

const AppDataTable = (props: AppDataProp) => {
  const { data, selectedKeys, onSelect } = props

  const columns = [
    {
      title: 'Float Value',
      dataIndex: 'fv',
      width: 150
    },
    {
      title: 'OS',
      dataIndex: 'os',
      width: 100,
      ellipsis: true
    },
    {
      title: 'App Bundle',
      dataIndex: 'appBundle',
      width: 150
    },
    {
      title: 'OS Version',
      dataIndex: 'osVersion',
      width: 100,
      ellipsis: true
    }
  ]

  return (
    <Card title="App Data List" bodyStyle={{ padding: 0 }}>
      <ResizeTable
        rowSelection={{
          fixed: true,
          selectedRowKeys: selectedKeys,
          onChange: onSelect
        }}
        bordered={true}
        scroll={{ y: 650 }}
        columns={columns}
        rowKey="id"
        dataSource={data}
        pagination={false}
      />
    </Card>
  )
}

export default AppDataTable
