import React from 'react'

import { Row, Col, Card, Statistic } from 'antd'
function Counter() {
  return (
    <Row>
      <Col span={24}>
        <Card>
          <Row gutter={16}>
            <Col span={8}>
              <Statistic
                title="蛋白质"
                value={9}
              />
            </Col>
            <Col span={8}>
              <Statistic
                title="DNA"
                value={5}
              />
            </Col>
            <Col span={8}>
              <Statistic
                title="RSID"
                value={7}
              />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}

export default Counter
