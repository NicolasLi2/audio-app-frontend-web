import { PlusOutlined } from '@ant-design/icons';
import type { GetProp, UploadProps } from 'antd';
import { Avatar, Button, Image, Upload, message } from 'antd';
import { useState } from 'react';
import { Profile } from '../store/userSlice';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

interface Props {
  profile: Profile;
  onSelect: (file: FileType) => void;
}

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  console.log(img);
  reader.readAsDataURL(img);
};

export default function ImageSelectorSetting({ onSelect, profile }: Props) {
  const [selected, setSelected] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps['onChange'] = (info) => {
    getBase64(info.file as FileType, (url) => {
      setImageUrl(url);
      setSelected(true);
    });
  };

  const beforeUpload = (file: FileType) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    if (isJpgOrPng && isLt2M) {
      onSelect(file);
    }
    return isJpgOrPng && isLt2M;
  };

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type='button'>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <>
      <Avatar shape='square' size={100} style={{ backgroundColor: 'white' }}>
        {/* <img
          src={selected ? imageUrl : profile.avatar}
          alt={profile.name}
          className='rounded-md'
        /> */}

        {!selected && (
          <img
            src={profile.avatar}
            alt={profile.name}
            className='rounded-md aspect-square'
          />
        )}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={profile.name}
            className='rounded-md aspect-square'
          />
        )}
      </Avatar>
      <Upload
        name='poster'
        // listType='picture-card'
        className='poster-uploader'
        accept='image/*'
        showUploadList={false}
        // action='https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {/* {imageUrl ? (
          <img
            src={selected ? imageUrl : profile.avatar}
            alt='avatar'
            style={{
              width: '100%',
              aspectRatio: 1,
              objectFit: 'cover',
              borderRadius: '7px',
            }}
          />
        ) : (
          uploadButton
        )} */}

        {/* <Avatar shape='square' size={100} style={{ backgroundColor: 'white' }}>
          <img src={profile.avatar} alt={profile.name} className='rounded-md' />
        </Avatar> */}

        <Button type='link'>Update your avatar</Button>

        {/* <img
          src={selected ? imageUrl : profile.avatar}
          alt='avatar'
          style={{
            width: '100%',
            aspectRatio: 1,
            objectFit: 'cover',
            borderRadius: '7px',
          }}
        /> */}
      </Upload>
    </>
  );
}
