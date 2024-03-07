import React, { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import type { GetProp, UploadProps } from 'antd';

interface Props {
  onSelect: (file: FileType) => void;
}

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

export default function FileSelector({ onSelect }: Props) {
  const [loading, setLoading] = useState(false);
  // const [imageUrl, setImageUrl] = useState<string>();
  const [selected, setSelected] = useState(false);

  const handleChange: UploadProps['onChange'] = (info) => {
    getBase64(info.file.originFileObj as FileType, (url) => {
      setSelected(true);
    });
  };

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type='button'>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  const beforeUpload = (file: FileType) => {
    const isAudio = file.type.startsWith('audio/');
    if (!isAudio) {
      message.error('You can only upload audio file!');
    }
    const isLt10M = file.size / 1024 / 1024 < 10;
    if (!isLt10M) {
      message.error('Audio file must smaller than 10MB!');
    }
    if (isAudio && isLt10M) onSelect(file);
    return isAudio && isLt10M;
  };

  return (
    <>
      <Upload
        name='audio'
        listType='picture-card'
        className='audio-uploader'
        // fileList={}
        accept='audio/*'
        showUploadList={false}
        // action='https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'
        beforeUpload={beforeUpload}
        onChange={handleChange}
        // customRequest={}
      >
        {selected ? (
          // <img src={imageUrl} alt='audio' style={{ width: '100%' }} />
          <img
            src={'public/music.png'}
            alt='audio'
            style={{
              width: '100%',
              aspectRatio: 1,
              objectFit: 'cover',
              borderRadius: '7px',
            }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
    </>
  );
}
