import React, { Key } from 'react'

import { Card } from 'antd'

import ResizeTable from '@/components/ResizeTable'

export interface AppData {
  id: number
  ip: string
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
      title: 'IP',
      dataIndex: 'ip',
      width: 150
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
