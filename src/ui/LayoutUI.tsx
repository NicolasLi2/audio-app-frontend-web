import React from 'react';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LockOutlined,
  ProfileOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const items = [
  { icon: UserOutlined, label: 'Home' },
  { icon: VideoCameraOutlined, label: 'Sign up' },
  { icon: UploadOutlined, label: 'Sign in' },
  { icon: UserOutlined, label: 'Verify' },
  { icon: UploadOutlined, label: 'Upload' },
  { icon: LockOutlined, label: 'Lost Password' },
  { icon: ProfileOutlined, label: 'Profile' },
  { icon: ProfileOutlined, label: 'Setting' },
].map((item, index) => ({
  key: String(index + 1),
  icon: React.createElement(item.icon),
  label: item.label,
}));

export default function LayoutUI() {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        breakpoint='lg'
        collapsedWidth='0'
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className='demo-logo-vertical' />
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['1']}
          items={items}
          onClick={(item) => {
            switch (item.key) {
              case '1':
                navigate('/');
                break;
              case '2':
                navigate('/signup');
                break;
              case '3':
                navigate('/signin');
                break;
              case '4':
                navigate('/verify');
                break;
              case '5':
                navigate('/upload');
                break;
              case '6':
                navigate('/lost-password');
                break;
              case '7':
                navigate('/profile');
                break;
              case '8':
                navigate('/setting');
                break;
            }
          }}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
