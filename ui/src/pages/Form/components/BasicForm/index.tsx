import React, { useCallback, useState } from 'react'

import { Form, Select, Input, Button } from 'antd'

export interface BasicFormProps {}

const { Item } = Form
const { TextArea } = Input

const RoleOptions = [
  { label: 'Admin', value: 'admin' },
  { label: 'Producer', value: 'producer' },
  { label: 'Consumer', value: 'consumer' }
]

const ValidateRule = {
  scope: [{ required: true, message: 'Please select scope!' }],
  userName: [{ required: true, message: 'Please input user name!' }],
  roleName: [{ required: true, message: 'Please select role name!' }],
  reason: [{ required: true, message: 'Please input reason!' }]
}

const BasicForm = (props: BasicFormProps, ref: any) => {
  const [form] = Form.useForm()

  const [loading, setLoading] = useState<boolean>(false)

  const handleFinish = useCallback(
    async (values: any) => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    },
    [form]
  )

  return (
    <Form
      form={form}
      layout="vertical"
      style={{ margin: '0 auto', maxWidth: 600 }}
      onFinish={handleFinish}
    >
      <Item label="User Name" name="userName" rules={ValidateRule.userName}>
        <Input maxLength={255} placeholder="Email Account or App Id" />
      </Item>
      <Item label="Role Name" name="roleName" rules={ValidateRule.roleName}>
        <Select options={RoleOptions} placeholder="Select a role to assign:" />
      </Item>
      <Item label="Reason" name="reason" rules={ValidateRule.reason}>
        <TextArea maxLength={50} placeholder="For Audit Purpose" />
      </Item>
      <Item>
        <Button htmlType="submit" loading={loading} type="primary">
          Submit
        </Button>
      </Item>
    </Form>
  )
}

export default BasicForm
