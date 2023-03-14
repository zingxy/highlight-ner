import React, { useEffect, useState } from 'react'

import { Spin, Card, Col, Row, Statistic, Divider } from 'antd'
import Counter from '../components/Counter'
import Chart from '../components/Chart'
import Highlight from '../components/Highlight'
import MutationList from '../components/MutationList'

function Result() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timerId = setTimeout(() => setIsLoading(false), 1000)
    return () => {
      clearTimeout(timerId)
    }
  })

  if (isLoading) {
    return (
      <Spin
        className="fixed left-1/2 top-1/2 scale-[4] text-sm"
        size="large"
      ></Spin>
    )
  }

  return (
    <section className="m-8 ">
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Counter />
          <Divider />
          <Chart />
        </Col>
        <Col span={14}>
          <Highlight />
        </Col>
        <Col span={4}>
          <MutationList />
        </Col>
      </Row>
    </section>
  )
}

export default Result
