import React, { useRef, useState } from 'react'
import { ArrowDownOnSquareStackIcon } from '@heroicons/react/24/solid'
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Button, Card, Result, Steps } from 'antd'
function BatchInput() {
  const dom = useRef<HTMLDivElement>(null!)
  const [droped, setDroped] = useState(false)

  return (
    <Card
      title="上传文件-批量处理"
      className="m-auto mt-10 w-3/5 h-[60vh]"
    >
      <div
        ref={dom}
        className="h-[35vh]  border-dashed border-4 flex justify-center items-center flex-col gap-8"
        onDragEnter={e => {
          e.preventDefault()
          dom.current.classList.add('border-red-500')
        }}
        onDragOver={e => e.preventDefault()}
        onDrop={e => {
          e.preventDefault()
          dom.current.classList.remove('border-red-500')
          setDroped(true)
        }}
      >
        {droped ? (
          <Result
            status="success"
            title="文件上传成功"
          />
        ) : (
          <>
            <ArrowDownOnSquareStackIcon className="text-slate-400 w-20 " />
            <p className="text-2xl">选择文件拖动到此处</p>
          </>
        )}
        );
      </div>
      {droped && (
        <Steps
          className="mt-8"
          items={[
            {
              title: '文件上传',
              status: 'finish',
              icon: <UserOutlined />,
            },
            {
              title: '格式验证',
              status: 'finish',
              icon: <SolutionOutlined />,
            },
            {
              title: '模型处理',
              status: 'process',
              icon: <LoadingOutlined />,
            },
          ]}
        />
      )}
    </Card>
  )
}

export default BatchInput
