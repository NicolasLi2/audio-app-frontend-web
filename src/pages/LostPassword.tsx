import { MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import ButtonGroup from 'antd/es/button/button-group';
import catchError from '../api/catchError';
import { getClient } from '../api/client';

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

export default function LostPassword() {
  const onFinish = async (values: SignInInfo) => {
    try {
      const client = await getClient();
      const { data } = await client.post('/auth/forget-password', values);
      message.success('Check your email to reset password', 3);
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

      <Form.Item {...tailFormItemLayout}>
        <Button type='primary' htmlType='submit' className='login-form-button'>
          Send link
        </Button>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <ButtonGroup
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <a href='#'>Sign In</a>
          <a href='#'>Sign Up</a>
        </ButtonGroup>
      </Form.Item>
    </Form>
  );
}
