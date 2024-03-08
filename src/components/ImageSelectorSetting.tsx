import type { GetProp, UploadProps } from 'antd';
import { Avatar, Button, Upload, message } from 'antd';
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

  return (
    <div>
      <Avatar
        shape='square'
        size={100}
        style={{ backgroundColor: 'white', marginRight: '15px' }}
      >
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
        className='poster-uploader'
        accept='image/*'
        showUploadList={false}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        <Button type='default'>Update your avatar</Button>
      </Upload>
    </div>
  );
}
