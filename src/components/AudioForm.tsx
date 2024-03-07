import { Button, Form, Input, message } from 'antd';
import catchError from '../api/catchError';
import { getClient } from '../api/client';
import AudioSelector from './AudioSelector';
import TextArea from 'antd/es/input/TextArea';
import CategorySelector from './CategorySelector';
import ImageSelector from './ImageSelector';
import { useState } from 'react';

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

interface FormFields {
  title: string;
  category: string;
  about: string;
  file?: File;
  poster?: File;
}

const defaultForm: FormFields = {
  title: '',
  category: '',
  about: '',
  file: undefined,
  poster: undefined,
};

interface Props {
  onSubmit: (formData: FormData) => void;
  busy: boolean;
  progress: number;
}

export default function AudioForm({ onSubmit, busy, progress }: Props) {
  const [form] = Form.useForm();
  const [audioInfo, setAudioInfo] = useState({ ...defaultForm });

  const handleSubmit = () => {
    const formData = new FormData();

    formData.append('title', audioInfo.title);
    formData.append('category', audioInfo.category);
    formData.append('about', audioInfo.about);
    formData.append('file', audioInfo.file as Blob);
    formData.append('poster', audioInfo.poster as Blob);

    console.log(audioInfo);
    onSubmit(formData);
  };

  console.log(audioInfo);

  return (
    <Form
      // {...layout}
      {...formItemLayout}
      labelAlign='left'
      fields={Object.entries(audioInfo).map(([name, value]) => ({
        name,
        value,
      }))}
      form={form}
      name='upload'
      onFinish={handleSubmit}
      style={{ maxWidth: 500, margin: '0 auto' }}
      scrollToFirstError
    >
      <Form.Item name='poster' label='Select Poster'>
        <ImageSelector
          onSelect={(file) => {
            setAudioInfo({ ...audioInfo, poster: file });
          }}
        />
      </Form.Item>
      <Form.Item
        name='file'
        label='Select Audio'
        rules={[{ required: true, message: 'Please select audio file!' }]}
      >
        <AudioSelector
          onSelect={(file) => {
            setAudioInfo({ ...audioInfo, file: file });
          }}
        />
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
        <Input
          onChange={(e) =>
            setAudioInfo({ ...audioInfo, title: e.target.value })
          }
        />
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
        <CategorySelector
          onSelect={(value) => {
            setAudioInfo({ ...audioInfo, category: value });
          }}
        />
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
        <TextArea
          onChange={(e) =>
            setAudioInfo({ ...audioInfo, about: e.target.value })
          }
        />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type='default' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
