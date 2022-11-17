import React, { Key, useEffect, useRef, useState } from 'react'

import { Button, Card, Col, message, Row } from 'antd'

import API from '@/api'
import { ExecuteRequest, ResultsData } from '@/api/demo/interface'
import SourceData from '@/assets/tripdata.json'
import PagePanel from '@/components/PagePanel'
import { observer } from '@/hooks'

import ExecuteForm from './components/ExecuteForm'
import ResultTable from './components/ResultTable'
import TripTable, { Trip } from './components/TripTable'

const Home = () => {
  const [selectedKeys, setSelectedKeys] = useState<Key[]>([])
  const [resultData, setResultData] = useState<ResultsData[]>([])

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
            data: {}
          })
        })
      })

      console.log('model data', model)
      // try {
      //   const result = await API.Demo.execute(model)
      //   setResultData(result.results)
      // } catch (e) {
      //   console.log(e)
      // }
    } else {
      message.warning('Please select Trip Data')
    }
  }

  return (
    <PagePanel title="Trip Demo" body={<ExecuteForm onSubmit={onExecute} />}>
      <Row gutter={[20, 20]}>
        <Col lg={24} md={24} sm={24} xl={8} xs={24}>
          <TripTable
            data={SourceData as Trip[]}
            selectedKeys={selectedKeys}
            onSelect={onSelectSource}
          />
        </Col>
        <Col
          lg={24}
          md={24}
          sm={24}
          xl={16}
          xs={24}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <ResultTable data={resultData} />
        </Col>
      </Row>
    </PagePanel>
  )
}

export default observer(Home)
