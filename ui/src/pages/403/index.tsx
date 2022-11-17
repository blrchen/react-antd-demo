import React from 'react'

import { Result, Button } from 'antd'
import { useNavigate } from 'react-router'

const Page404 = () => {
  const navigate = useNavigate()

  return (
    <Result
      extra={
        <Button
          type="primary"
          onClick={() => {
            navigate('/')
          }}
        >
          Back Home
        </Button>
      }
      status="403"
      subTitle="Sorry, you are not authorized to access this page."
      title="403"
    />
  )
}

export default Page404
