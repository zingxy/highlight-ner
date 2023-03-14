import React from 'react'

import { Divider, Layout } from 'antd'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'

const { Header, Footer, Sider, Content } = Layout
function MainLayout() {
  return (
    <div
      className=" min-h-screen bg-cover "
      style={{}}
    >
      <Layout className="bg-slate-300 min-h-screen">
        <Header className="bg-slate-300">
          <Nav />
          <Divider />
        </Header>
        <Content className="mt-8">
          <Outlet />
        </Content>
      </Layout>
    </div>
  )
}

export default MainLayout
