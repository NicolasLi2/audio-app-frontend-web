import { PlusOutlined } from '@ant-design/icons';
import type { GetProp, UploadProps } from 'antd';
import { Upload, message } from 'antd';
import { useState } from 'react';

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
  const [selected, setSelected] = useState(false);

  const handleChange: UploadProps['onChange'] = (info) => {
    getBase64(info.file.originFileObj as FileType, () => {
      setSelected(true);
    });
  };

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type='button'>
      <PlusOutlined />
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
        accept='audio/*'
        showUploadList={false}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {selected ? (
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
