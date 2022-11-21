import React, { Key } from 'react'

import { Card } from 'antd'

import ResizeTable from '@/components/ResizeTable'

export interface Trip {
  id: number
  pickUpTime: string
  dropOffTime: string
  puId: number
  doId: number
  distance: number
  fareAmount: number
}

export interface TripTableProps {
  data?: Trip[]
  selectedKeys?: Key[]
  onSelect?: (selectedRowKeys: Key[], selectedRows: Trip[]) => void
}

const TripTable = (props: TripTableProps) => {
  const { data, selectedKeys, onSelect } = props

  const columns = [
    {
      title: 'Pick up Datetime',
      dataIndex: 'pickUpTime',
      width: 150
    },
    {
      title: 'Pick up LocationID',
      dataIndex: 'puId',
      width: 100,
      ellipsis: true
    },
    {
      title: 'Drop off Datetime',
      dataIndex: 'dropOffTime',
      width: 150
    },
    {
      title: 'Drop off LocationID',
      dataIndex: 'doId',
      width: 100,
      ellipsis: true
    },
    {
      title: 'Distance',
      dataIndex: 'distance',
      width: 100
    },
    {
      title: 'Fare Amount',
      dataIndex: 'fareAmount',
      ellipsis: true,
      width: 100
    }
  ]

  return (
    <Card title="Trip List" bodyStyle={{ padding: 0 }}>
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

export default TripTable
