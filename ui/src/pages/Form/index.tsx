import React from 'react'

import { Card } from 'antd'

import PagePanel from '@/components/PagePanel'
import { observer } from '@/hooks'

import BasicForm from './components/BasicForm'

const Form = () => {
  // const { globalStore } = useStore()

  return (
    <PagePanel title="Basic Form">
      <Card bordered={false}>
        <BasicForm />
      </Card>
    </PagePanel>
  )
}

export default observer(Form)
