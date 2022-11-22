import React, { Key, useRef, useState } from 'react'

import { CheckCircleTwoTone, CheckSquareOutlined, PlayCircleOutlined } from '@ant-design/icons'
import { Descriptions, Row } from 'antd'
import { Link } from 'react-router-dom'

import { observer } from '@/hooks'

const Home = () => {
  return (
    <div>
      <h2> Demo List</h2>
      <Descriptions bordered title="Geo IP Demo">
        <Descriptions.Item label="Use Case" span={10}>
          <CheckCircleTwoTone /> Invoke arbitrary external JSON-based HTTP API. (Public Service)
        </Descriptions.Item>
        <Descriptions.Item label="Input" span={10}>
          IP Address
        </Descriptions.Item>
        <Descriptions.Item label="Output" span={10}>
          Country, City
        </Descriptions.Item>
        <Descriptions.Item label="Description">
          Look up IP Address Geo Info from external public API.
        </Descriptions.Item>
        <Descriptions.Item>
          <Link to="/geo">
            <PlayCircleOutlined />
          </Link>
        </Descriptions.Item>
      </Descriptions>
      <br />
      <Descriptions bordered title="New York Taxi Trip Demo">
        <Descriptions.Item label="Use Case" span={5}>
          <CheckCircleTwoTone /> Lookup feature values from Feathr Online Store.
          <br />
          <CheckCircleTwoTone /> Invoke arbitrary external JSON-based HTTP API. (Same Data Center)
          <br /> <CheckCircleTwoTone /> Expression engine with extensible functions for local
          computation.
        </Descriptions.Item>
        <Descriptions.Item label="Input" span={5}>
          Pick Up Location ID, Drop Off Location ID,
          <br />
          Pick Up Time, Drop Off Time
          <br />
          Trip Distance, Fare Amount
        </Descriptions.Item>
        <Descriptions.Item label="Output" span={5}>
          Pick Up Average Fare, Drop Off Average Fare, Pick Up Max Fare, Drop Off Max Fare;
          <br />
          Pick Up Location Name, Drop Off Location Name
          <br />
          Duration (second), Speed (mph)
        </Descriptions.Item>
        <Descriptions.Item label="Description">
          Based on Feathr NYC Taxi Sample:
          <br />
          - Look up Average Fare and Max Fare based on Location ID from Feathr Online Store;
          <br />
          - Look up Location Name from Map API deployed in the same data center;
          <br />- Calculate Trip Distance and Speed with Mathematic Calculation;
        </Descriptions.Item>
        <Descriptions.Item>
          <Link to="/nyctaxi">
            <PlayCircleOutlined />
          </Link>
        </Descriptions.Item>
      </Descriptions>
      <br />
      <Descriptions bordered title="InMobi Demo">
        <Descriptions.Item label="Use Case" span={5}>
          <CheckCircleTwoTone /> Performance meets InMobi‘s requirements.
        </Descriptions.Item>
        <Descriptions.Item label="Input" span={5}>
          Float Value, OS, App Bundle, OS Version
        </Descriptions.Item>
        <Descriptions.Item label="Output" span={5}>
          BucketId
          <br />
          OSappBundleCrossOS
          <br />
          majorOSVersion
        </Descriptions.Item>
        <Descriptions.Item label="Description">
          Bucket float value, Concat string and Split string
        </Descriptions.Item>
        <Descriptions.Item>
          <Link to="/inmobi">
            <PlayCircleOutlined />
          </Link>
        </Descriptions.Item>
      </Descriptions>
    </div>
  )
}

export default observer(Home)
