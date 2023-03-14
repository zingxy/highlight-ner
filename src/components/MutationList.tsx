import React, { useId } from 'react'
import { Card, Divider } from 'antd'

type Mutaion = {
  type: 'DNA' | 'Protein' | 'RSID'
  name: string
}

const mutations: Mutaion[] = [
  {
    type: 'DNA',
    name: 'sdfs',
  },
  {
    type: 'DNA',
    name: 'sdfs',
  },
  {
    type: 'DNA',
    name: 'sdfs',
  },
]

function MutationList() {
  return (
    <Card>
      <Card title="蛋白质变异">
        <ul>
          {mutations.map(item => {
            return <li key={useId()}>{item.name}</li>
          })}
        </ul>
      </Card>

      <Card
        className="mt-4"
        title="DNA变异"
      >
        <ul>
          {mutations.map(item => {
            return <li key={useId()}>{item.name}</li>
          })}
        </ul>
      </Card>
      <Card
        className="mt-4"
        title="RSID"
      >
        <ul>
          {mutations.map(item => {
            return <li key={useId()}>{item.name}</li>
          })}
        </ul>
      </Card>
    </Card>
  )
}

export default MutationList
