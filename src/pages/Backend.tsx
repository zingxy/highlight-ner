import React, { useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import {
  Col,
  Layout,
  Menu,
  Row,
  theme,
  Card,
  Divider,
  Descriptions,
  Button,
} from 'antd'

const { Header, Sider, Content } = Layout

const Backend: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout className="min-h-screen">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: '模型管理',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: '数据管理',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <p className="flex justify-center items-center text-2xl">
            基因组变异命名实体识别数据管理
          </p>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Row gutter={16}>
            <Col span={8}>
              <Card
                className="h-40 model"
                title="BioBERT-BILSTM-CRF模型"
              >
                <Descriptions title="">
                  <Descriptions.Item label="时间">2023.3.1</Descriptions.Item>
                </Descriptions>
                <div className="flex justify-around gap-8">
                  <Button>重新训练</Button>
                  <Button className="bg-red-700">删除</Button>
                </div>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                className="h-40 model"
                title="BioBERT+StackedBiGRU+CRF模型"
              >
                <Descriptions title="">
                  <Descriptions.Item label="时间">2023.3.1</Descriptions.Item>
                </Descriptions>
                <div className="flex justify-around gap-8">
                  <Button>重新训练</Button>
                  <Button className="bg-red-700">删除</Button>
                </div>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                className="h-40 model"
                title="BioBERT-CRF模型"
              >
                <Descriptions title="">
                  <Descriptions.Item label="时间">2023.3.1</Descriptions.Item>
                </Descriptions>
                <div className="flex justify-around gap-8">
                  <Button>重新训练</Button>
                  <Button className="bg-red-700">删除</Button>
                </div>
              </Card>
            </Col>
          </Row>
          <Divider />
          <Row gutter={16}>
            <Col span={8}>
              <Card
                className="h-40 model"
                title="BioBERT+Stacked BiGRU+Self-Attention+Multi-Tasks"
              >
                <Descriptions title="">
                  <Descriptions.Item label="时间">2023.3.1</Descriptions.Item>
                </Descriptions>
                <div className="flex justify-around gap-8">
                  <Button>重新训练</Button>
                  <Button className="bg-red-700">删除</Button>
                </div>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                className="h-40 model"
                title="fastText-BILSTM-CRF模型"
              >
                <Descriptions title="">
                  <Descriptions.Item label="时间">2023.3.1</Descriptions.Item>
                </Descriptions>
                <div className="flex justify-around gap-8">
                  <Button>重新训练</Button>
                  <Button className="bg-red-700">删除</Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Backend
