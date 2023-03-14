import React from 'react'

import { Link } from 'react-router-dom'

const items = [
  {
    path: '/',
    name: '首页',
  },
  {
    path: 'sigle-pmid',
    name: 'PMID',
  },
  {
    path: 'batch',
    name: '批量输入',
  },
  {
    path: 'model',
    name: '模型参数',
  },
]

function Nav() {
  return (
    <div className="text-2xl  flex justify-around  items-center mt-4">
      {items.map(item => (
        <Link
          key={item.path}
          to={item.path}
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}

export default Nav
