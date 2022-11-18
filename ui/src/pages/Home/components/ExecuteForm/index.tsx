import React from 'react'

import { Form, Select, Button } from 'antd'

export interface ExecuteFormProps {
  onSubmit?: (value: any) => void
}

const { Item } = Form

const ExecuteForm = (porps: ExecuteFormProps) => {
  const [form] = Form.useForm()

  const { onSubmit } = porps

  return (
    <Form form={form} layout="inline" onFinish={onSubmit}>
      <Item
        label="Functions"
        name="functions"
        rules={[{ required: true, message: 'Please select Functions!' }]}
      >
        <Select
          options={[
            {
              value: 'nyc_taxi_demo',
              label: 'nyc_taxi_demo'
            }
            // {
            //   value: 't2',
            //   label: 'Function T2'
            // },
            // {
            //   value: 't3',
            //   label: 'Function T3'
            // }
          ]}
          mode="multiple"
          style={{ width: 350 }}
        />
      </Item>
      <Item>
        <Button type="primary" htmlType="submit">
          Execute
        </Button>
      </Item>
    </Form>
  )
}

export default ExecuteForm
