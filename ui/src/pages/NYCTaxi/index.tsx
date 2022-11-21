import React, { Key, useEffect, useRef, useState } from 'react'

import { Button, Card, Col, message, Row } from 'antd'

import API from '@/api'
import { ExecuteRequest, ResultsData } from '@/api/demo/interface'
import SourceData from '@/assets/tripdata.json'
import PagePanel from '@/components/PagePanel'
import { observer } from '@/hooks'

import ExecuteForm from './components/ExecuteForm'
import FunctionTable from './components/FunctionTable'
import ResultTable from './components/ResultTable'
import TripTable, { Trip } from './components/TripTable'

const NYCTaxi = () => {
  const [selectedKeys, setSelectedKeys] = useState<Key[]>([])
  const [resultData, setResultData] = useState<ResultsData[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const sourceRowRef = useRef<Trip[]>([])

  const onSelectSource = (selectedRowKeys: Key[], selectedRows: Trip[]) => {
    sourceRowRef.current = selectedRows
    setSelectedKeys(selectedRowKeys)
  }

  const onExecute = async (values: { functions: string[] }) => {
    const { functions } = values

    const model: ExecuteRequest = {
      requests: []
    }
    if (sourceRowRef.current.length > 0) {
      functions.forEach((item) => {
        sourceRowRef.current.forEach((data) => {
          model.requests.push({
            pipeline: item,
            data: {
              pu_loc_id: data.puId,
              do_loc_id: data.doId,
              pu_time: data.pickUpTime,
              do_time: data.dropOffTime,
              trip_distance: data.distance,
              fare_amount: data.fareAmount
            }
          })
        })
      })

      try {
        setLoading(true)
        const result = await API.Demo.execute(model)
        setResultData(
          result.results.map((item, i) => {
            return {
              key: i,
              ...item
            }
          })
        )
      } catch (e: any) {
        message.error(e.message)
      } finally {
        setLoading(false)
      }
    } else {
      message.warning('Please select Trip Data')
    }
  }

  return (
    <PagePanel title="Trip Demo" body={<ExecuteForm onSubmit={onExecute} />}>
      <Row>
        <FunctionTable />
      </Row>
      <Row>
        <TripTable
          data={SourceData as Trip[]}
          selectedKeys={selectedKeys}
          onSelect={onSelectSource}
        />
      </Row>
      <Row>
        <ResultTable loading={loading} data={resultData} />
      </Row>
    </PagePanel>
  )
}

export default observer(NYCTaxi)
