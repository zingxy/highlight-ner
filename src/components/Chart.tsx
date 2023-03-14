import React, { useRef, useLayoutEffect } from 'react'
import { Row, Col, Card, Statistic } from 'antd'

import * as echarts from 'echarts'

const option = {
  title: {
    text: '基因组变异',
    subtext: '',
    left: 'center',
    bottom: '0',
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 15, name: 'DNA变异' },
        { value: 8, name: '蛋白质变异' },
        { value: 3, name: 'RSID' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
}

function Chart() {
  const chartDom = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    if (chartDom.current) {
      const myChart = echarts.init(chartDom.current)
      option && myChart.setOption(option)
    }
    return () => {
      echarts.dispose(chartDom.current!)
    }
  }, [])
  return (
    <Row>
      <Col span={24}>
        <Card>
          <div
            ref={chartDom}
            className="h-60"
          ></div>
        </Card>
      </Col>
    </Row>
  )
}

export default Chart
