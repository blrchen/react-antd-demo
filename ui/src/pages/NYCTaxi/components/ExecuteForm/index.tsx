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
            },
            {
              value: 'nyc_taxi_demo_1_lookup_online_store',
              label: 'lookup_online_store'
            },
            {
              value: 'nyc_taxi_demo_2_lookup_address',
              label: 'lookup_address'
            },
            {
              value: 'nyc_taxi_demo_3_local_compute',
              label: 'local_compute'
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
