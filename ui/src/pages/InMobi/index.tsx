import React, { Key, useEffect, useRef, useState } from 'react'

import { Button, Card, Col, message, Row } from 'antd'

import API from '@/api'
import { ExecuteRequest, ResultsData } from '@/api/demo/interface'
import SourceData from '@/assets/appdata.json'
import PagePanel from '@/components/PagePanel'
import { observer } from '@/hooks'

import AppDataTable, { AppData } from './components/AppDataTable'
import ExecuteForm from './components/ExecuteForm'
import FunctionTable from './components/FunctionTable'
import ResultTable from './components/ResultTable'

//import TripTable, { Trip } from './components/TripTable'

const InMobi = () => {
  const [selectedKeys, setSelectedKeys] = useState<Key[]>([])
  const [resultData, setResultData] = useState<ResultsData[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const sourceRowRef = useRef<AppData[]>([])

  const onSelectSource = (selectedRowKeys: Key[], selectedRows: AppData[]) => {
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
              fv: data.fv,
              os: data.os,
              appBundle: data.appBundle,
              osVersion: data.osVersion
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
      message.warning('Please select App Data')
    }
  }

  return (
    <PagePanel title="InMobi Demo" body={<ExecuteForm onSubmit={onExecute} />}>
      <Row>
        <FunctionTable />
      </Row>
      <Row>
        <AppDataTable
          data={SourceData as AppData[]}
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

export default observer(InMobi)
