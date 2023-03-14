import React from 'react'
import { Input, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
const { TextArea } = Input
function SigleTextInput() {
  const navigate = useNavigate()

  return (
    <section className="mt-10 mx-20 ">
      <TextArea
        allowClear
        style={{
          height: '50vh',
        }}
      />
      <div className="mt-4 flex justify-center">
        <Button
          className="text-white bg-blue-600 w-80 h-12"
          type="primary"
          onClick={() => {
            navigate('/result')
          }}
        >
          提交
        </Button>
      </div>
    </section>
  )
}

export default SigleTextInput
