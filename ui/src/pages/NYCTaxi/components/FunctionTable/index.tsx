import React, { useState } from 'react'

import { Card } from 'antd'

const tabList = [
  {
    key: 'nyc_taxi_demo',
    tab: 'nyc_taxi_demo'
  },
  {
    key: 'lookup_online_store',
    tab: 'lookup_online_store'
  },
  {
    key: 'lookup_address',
    tab: 'lookup_address'
  },
  {
    key: 'local_compute',
    tab: 'local_compute'
  }
]

const contentList: Record<string, React.ReactNode> = {
  nyc_taxi_demo: (
    <pre>
      <code>
        {
          'nyc_taxi_demo(pu_loc_id as int, do_loc_id as int, pu_time as string, do_time as string, trip_distance as double, fare_amount as double)'
        }
      </code>
      <br />
      <code>
        {
          '| lookup pu_loc_avg_fare = f_location_avg_fare, pu_loc_max_fare = f_location_max_fare from feathrci on to_string(pu_loc_id)'
        }
      </code>
      <br />
      <code>
        {
          '| lookup do_loc_avg_fare = f_location_avg_fare, do_loc_max_fare = f_location_max_fare from feathrci on to_string(do_loc_id)'
        }
      </code>
      <br />
      <code>
        {'| lookup pu_loc_name = name as string from locationsvc on to_string(pu_loc_id)'}
      </code>
      <br />
      <code>
        {'| lookup do_loc_name = name as string from locationsvc on to_string(do_loc_id)'}
      </code>
      <br />
      <code>
        {
          '| project duration_second = (timestamp(do_time, "%Y/%-m/%-d %-H:%-M") - timestamp(pu_time, "%Y/%-m/%-d %-H:%-M"))'
        }
      </code>
      <br />
      <code>
        {
          '| project duration_second = (timestamp(do_time, "%Y/%-m/%-d %-H:%-M") - timestamp(pu_time, "%Y/%-m/%-d %-H:%-M"))'
        }
      </code>
      <br />
      <code>{';'}</code>
    </pre>
  ),
  lookup_online_store: (
    <pre>
      <code>
        {
          'nyc_taxi_demo_1_lookup_online_store(pu_loc_id as int, do_loc_id as int, pu_time as string, do_time as string, trip_distance as double, fare_amount as double)'
        }
      </code>
      <br />
      <code>
        {
          '| lookup pu_loc_avg_fare = f_location_avg_fare, pu_loc_max_fare = f_location_max_fare from feathrci on to_string(pu_loc_id)'
        }
      </code>
      <br />
      <code>
        {
          '| lookup do_loc_avg_fare = f_location_avg_fare, do_loc_max_fare = f_location_max_fare from feathrci on to_string(do_loc_id)'
        }
      </code>
      <br />
      <code>{';'}</code>
    </pre>
  ),
  concat: (
    <pre>
      <code>
        {
          'nyc_taxi_demo_2_lookup_address(pu_loc_id as int, do_loc_id as int, pu_time as string, do_time as string, trip_distance as double, fare_amount as double)'
        }
      </code>
      <br />
      <code>
        {'| lookup pu_loc_name = name as string from locationsvc on to_string(pu_loc_id)'}
      </code>
      <br />
      <code>
        {'| lookup do_loc_name = name as string from locationsvc on to_string(do_loc_id)'}
      </code>
      <br />
      <code>{';'}</code>
    </pre>
  ),
  local_compute: (
    <pre>
      <code>
        {
          'nyc_taxi_demo_3_local_compute(pu_loc_id as int, do_loc_id as int, pu_time as string, do_time as string, trip_distance as double, fare_amount as double)'
        }
      </code>
      <br />
      <code>
        {
          '| project duration_second = (timestamp(do_time, "%Y/%-m/%-d %-H:%-M") - timestamp(pu_time, "%Y/%-m/%-d %-H:%-M"))'
        }
      </code>
      <br />
      <code>{'| project speed_mph = trip_distance * 3600 / duration_second'}</code>
      <br />
      <code>{';'}</code>
    </pre>
  )
}

const FunctionTable = () => {
  const [activeTabKey1, setActiveTabKey1] = useState<string>('nyc_taxi_demo')
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
