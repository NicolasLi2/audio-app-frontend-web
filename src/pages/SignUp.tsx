import { Button, Form, Input, message } from 'antd';
import catchError from '../api/catchError';
import { getClient } from '../api/client';

interface NewUser {
  name: string;
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

// const layout = {
//   labelCol: { span: 8 },
//   wrapperCol: { span: 8 },
// };

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

export default function SignUp() {
  const [form] = Form.useForm();

  const onFinish = async (values: NewUser) => {
    try {
      const client = await getClient();
      const { data } = await client.post('/auth/create', values);
      console.log(data);
      // { user: { id: user._id, name, email } }
    } catch (error) {
      const errorMessage = catchError(error);
      message.error(errorMessage, 5);
    }
  };

  return (
    // <div className='container'>
    <Form
      // {...layout}
      {...formItemLayout}
      labelAlign='left'
      form={form}
      name='register'
      onFinish={onFinish}
      style={{ maxWidth: 500, margin: '0 auto' }}
      scrollToFirstError
    >
      <Form.Item
        name='name'
        label='Name'
        // tooltip='What do you want others to call you?'
        rules={[
          {
            required: true,
            message: 'Please input your name!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name='email'
        label='Email'
        rules={[
          {
            type: 'email',
            message: 'The input is not valid Email!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name='password'
        label='Password'
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
          {
            min: 6,
            message: 'Password must be at least 6 characters long',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type='primary' htmlType='submit'>
          Sign Up
        </Button>
      </Form.Item>
    </Form>
    // </div>
  );
}
