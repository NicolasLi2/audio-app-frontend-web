import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import ButtonGroup from 'antd/es/button/button-group';
import catchError from '../api/catchError';
import { getClient } from '../api/client';
import { Link } from 'react-router-dom';

interface SignInInfo {
  email: string;
  password: string;
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export default function SignIn() {
  const onFinish = async (values: SignInInfo) => {
    try {
      const client = await getClient();
      const { data } = await client.post('/auth/sign-in', values);
      localStorage.setItem('access-token', data.token);
      message.success('Logged in successfully', 3);
    } catch (error) {
      const errorMessage = catchError(error);
      message.error(errorMessage, 5);
    }
  };

  return (
    <Form
      {...formItemLayout}
      name='normal_login'
      className='login-form'
      labelAlign='left'
      initialValues={{ remember: true }}
      onFinish={onFinish}
      style={{ maxWidth: 500, margin: 'auto' }}
    >
      <Form.Item
        name='email'
        label='Email'
        rules={[
          {
            type: 'email',
            message: 'The input is not valid Email!',
          },
          { required: true, message: 'Please input your Email!' },
        ]}
      >
        <Input
          prefix={<MailOutlined className='site-form-item-icon' />}
          placeholder='Email'
        />
      </Form.Item>
      <Form.Item
        name='password'
        label='Password'
        rules={[
          { required: true, message: 'Please input your Password!' },
          {
            min: 6,
            message: 'Password must be at least 6 characters long',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className='site-form-item-icon' />}
          type='password'
          placeholder='Password'
        />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type='default' htmlType='submit' className='login-form-button'>
          Log in
        </Button>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <ButtonGroup
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Link to='/lost-password'>Forget Password</Link>
          <Link to='/signup'>Sign Up</Link>
        </ButtonGroup>
      </Form.Item>
    </Form>
  );
}
