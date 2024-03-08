import type { GetProp, UploadProps } from 'antd';
import { Avatar, Button, Upload, message } from 'antd';
import { useState } from 'react';
import { Profile } from '../store/userSlice';

export type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

interface Props {
  profile: Profile;
  userInfo: { name: string; avatar?: string | FileType };
  setUserInfo: (userInfo: { name: string; avatar?: string | FileType }) => void;
}

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

export default function ImageSelectorSetting({
  profile,
  userInfo,
  setUserInfo,
}: Props) {
  const [selected, setSelected] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps['onChange'] = (info) => {
    const { file } = info;
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      return message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = (file.size || 0) / 1024 / 1024 < 2;
    if (!isLt2M) {
      return message.error('Image must smaller than 2MB!');
    }

    getBase64(file.originFileObj as FileType, (url) => {
      setImageUrl(url);
      setSelected(true);
      setUserInfo({ ...userInfo, avatar: file.originFileObj as FileType });
    });
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
            src={profile.avatar || '/public/default-user.png'}
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
        // beforeUpload={beforeUpload}
        onChange={handleChange}
        customRequest={() => {}}
      >
        <Button type='default'>Update your avatar</Button>
      </Upload>
    </div>
  );
}
