import React from 'react'

import { Card, Descriptions } from 'antd'

import ResizeTable from '@/components/ResizeTable'

export interface ResultTableProps {
  data?: any[]
  loading?: boolean
}
const { Item } = Descriptions

const ResultTable = (props: ResultTableProps) => {
  const { data, loading } = props

  const columns = [
    {
      title: 'Funtion',
      dataIndex: 'pipeline'
    },
    {
      title: 'Count',
      dataIndex: 'count'
    },
    {
      title: 'Time',
      dataIndex: 'time',
      render: (col: number) => {
        return `${col}ms`
      }
    },
    {
      title: 'Status',
      dataIndex: 'status'
    }
  ]

  return (
    <Card title="Result List" bodyStyle={{ padding: 0 }}>
      <ResizeTable
        expandable={{
          expandedRowRender: ({ data }: { data: any[] }) => {
            return (
              <>
                {data.map((item, index) => {
                  return (
                    <Descriptions key={index}>
                      {Object.keys(item).map((key) => {
                        return (
                          <Item key={key} label={key}>
                            {item[key]}
                          </Item>
                        )
                      })}
                    </Descriptions>
                  )
                })}
              </>
            )
          },
          rowExpandable: (record: any) => {
            return record.status === 'OK' && record.count > 0
          }
        }}
        loading={loading}
        dataSource={data}
        columns={columns}
        scroll={{ y: 650 }}
      />
    </Card>
  )
}

export default ResultTable
