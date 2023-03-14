import React from 'react'
import { Card, Tag } from 'antd'

type Mutaion = {
  type: 'DNA' | 'Protein' | 'RSID' | 'text'
  name: string
}

const mutations: Mutaion[] = [
  {
    type: 'text',
    name: 'fsdfsdfdssfdfsdfsdfdf,',
  },
  { type: 'DNA', name: 'dna' },
  {
    type: 'text',
    name: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Libero voluptatem molestiae quae amet nihil, suscipit, provident debitis nobis ipsa aliquam 
    magni quam sunt impedit cum hic consequatur et placeat iusto?`,
  },
  {
    type: 'text',
    name: 'fsdfsdfdssfdfsdfsdfdf,',
  },
  { type: 'DNA', name: 'dna' },
  {
    type: 'text',
    name: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Libero voluptatem molestiae quae amet nihil, suscipit, provident debitis nobis ipsa aliquam 
    magni quam sunt impedit cum hic consequatur et placeat iusto?`,
  },
  {
    type: 'text',
    name: 'fsdfsdfdssfdfsdfsdfdf,',
  },
  { type: 'DNA', name: 'dna' },
  {
    type: 'text',
    name: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Libero voluptatem molestiae quae amet nihil, suscipit, provident debitis nobis ipsa aliquam 
    magni quam sunt impedit cum hic consequatur et placeat iusto?`,
  },
  {
    type: 'text',
    name: 'fsdfsdfdssfdfsdfsdfdf,',
  },
  { type: 'Protein', name: 'dna' },
  {
    type: 'text',
    name: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Libero voluptatem molestiae quae amet nihil, suscipit, provident debitis nobis ipsa aliquam 
    magni quam sunt impedit cum hic consequatur et placeat iusto?`,
  },
  { type: 'RSID', name: 'dna' },
  {
    type: 'text',
    name: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Libero voluptatem molestiae quae amet nihil, suscipit, provident debitis nobis ipsa aliquam 
    magni quam sunt impedit cum hic consequatur et placeat iusto?`,
  },
  {
    type: 'text',
    name: 'fsdfsdfdssfdfsdfsdfdf,',
  },
  { type: 'DNA', name: 'dna' },
  {
    type: 'text',
    name: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Libero voluptatem molestiae quae amet nihil, suscipit, provident debitis nobis ipsa aliquam 
    magni quam sunt impedit cum hic consequatur et placeat iusto?`,
  },
  { type: 'RSID', name: 'dna' },
  {
    type: 'text',
    name: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Libero voluptatem molestiae quae amet nihil, suscipit, provident debitis nobis ipsa aliquam 
    magni quam sunt impedit cum hic consequatur et placeat iusto?`,
  },
  {
    type: 'text',
    name: 'fsdfsdfdssfdfsdfsdfdf,',
  },
  { type: 'DNA', name: 'dna' },
  {
    type: 'text',
    name: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Libero voluptatem molestiae quae provident debitis nobis ipsa aliquam 
    magni quam sunt impedit cum hic consequatur et placeat iusto?`,
  },
]
function Highlight() {
  return (
    <Card>
      {mutations.map(m => {
        switch (m.type) {
          case 'text':
            return m.name
          case 'DNA':
            return <Tag color="magenta">{m.name}</Tag>
          case 'Protein':
            return <Tag color="black">{m.name}</Tag>
          case 'RSID':
            return <Tag color="orange">{m.name}</Tag>
        }
      })}
    </Card>
  )
}

export default Highlight
