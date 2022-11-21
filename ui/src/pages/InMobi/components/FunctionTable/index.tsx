import React, { useState } from 'react'

import { Form, Select, Button, Card } from 'antd'

const tabList = [
  {
    key: 'inmobi_demo',
    tab: 'inmobi_demo'
  },
  {
    key: 'bucket',
    tab: 'bucket'
  },
  {
    key: 'concat',
    tab: 'concat'
  },
  {
    key: 'split',
    tab: 'split'
  }
]

const contentList: Record<string, React.ReactNode> = {
  inmobi_demo: (
    <pre>
      <code>
        {'inmobi_demo(fv as float, os as string, appBundle as string, osVersion as string)'}
      </code>
      <br />
      <code>
        {
          '| project bucketId = bucket(fv, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512), appBundleCrossOS = os + "_" + appBundle, majorOSVersion = to_string(split(osVersion, ".")[0])'
        }
      </code>
      <br />
      <code>{'| project-remove fv, os, appBundle, osVersion'}</code>
      <br />
      <code>{';'}</code>
    </pre>
  ),
  bucket: (
    <pre>
      <code>{'inmobi_demo_1_bucket(fv as float)'}</code>
      <br />
      <code>{'| project bucketId = bucket(fv, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512)'}</code>
      <br />
      <code>{';'}</code>
    </pre>
  ),
  concat: (
    <pre>
      <code>{'inmobi_demo_2_concat(os as string, appBundle as string)'}</code>
      <br />
      <code>{'| project appBundleCrossOS = os + "_" + appBundle'}</code>
      <br />
      <code>{';'}</code>
    </pre>
  ),
  split: (
    <pre>
      <code>{'inmobi_demo_3_split(osVersion as string)'}</code>
      <br />
      <code>{'| project majorOSVersion = to_string(split(osVersion, ".")[0])'}</code>
      <br />
      <code>{';'}</code>
    </pre>
  )
}

const FunctionTable = () => {
  const [activeTabKey1, setActiveTabKey1] = useState<string>('inmobi_demo')
  const onTab1Change = (key: string) => {
    setActiveTabKey1(key)
  }

  return (
    <>
      <Card
        extra={
          <a href="https://xchfeathrtest4sto.blob.core.windows.net/public/pipeline.conf">More</a>
        }
        style={{ width: '100%' }}
        title="Function Definition"
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={(key) => {
          onTab1Change(key)
        }}
      >
        {contentList[activeTabKey1]}
      </Card>
    </>
  )
}

export default FunctionTable
