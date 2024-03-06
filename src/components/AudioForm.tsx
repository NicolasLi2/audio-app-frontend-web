import { Button, Form, Input, message } from 'antd';
import catchError from '../api/catchError';
import { getClient } from '../api/client';
import AudioSelector from './AudioSelector';
import TextArea from 'antd/es/input/TextArea';
import CategorySelector from './CategorySelector';
import ImageSelector from './ImageSelector';

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

export default function AudioForm() {
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
      <Form.Item name='poster' label='Select Poster'>
        <ImageSelector />
      </Form.Item>
      <Form.Item name='audio' label='Select Audio' rules={[{ required: true }]}>
        <AudioSelector />
      </Form.Item>

      <Form.Item
        name='title'
        label='Title'
        rules={[
          {
            required: true,
            message: 'Please input audio title!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name='category'
        label='Category'
        rules={[
          {
            required: true,
            message: 'Please select a category!',
          },
        ]}
      >
        <CategorySelector />
      </Form.Item>

      <Form.Item
        name='about'
        label='About'
        rules={[
          {
            required: true,
            message: 'Please input your audio about!',
          },
        ]}
      >
        <TextArea />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type='default' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
