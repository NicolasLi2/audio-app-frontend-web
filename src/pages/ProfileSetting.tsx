import { Avatar, Button, Input } from 'antd';
import { VscUnverified, VscVerifiedFilled } from 'react-icons/vsc';

import ImageSelectorSetting from '../components/ImageSelectorSetting';
import { Profile } from '../store/userSlice';
import { ChangeEvent, useState } from 'react';

export default function ProfileSetting() {
  const profileString = localStorage.getItem('user-profile');
  const profile: Profile = profileString ? JSON.parse(profileString) : null;
  const [name, setName] = useState(profile.name || '');
  const [email, setEmail] = useState(profile.email || '');

  if (!profile) {
    return <div>User not found</div>;
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div className='flex flex-col max-w-96 m-auto gap-8'>
      <ImageSelectorSetting profile={profile} />
      <div className='flex gap-2 items-center'>
        <Input value={email} onChange={handleChange} disabled />
        <div className='text-blue-500'>
          {profile.verified ? (
            <VscVerifiedFilled size={20} />
          ) : (
            <Button type='link'>Verify Email</Button>
          )}
        </div>
      </div>
      <div>
        <Input value={name} onChange={handleChange} />
      </div>
      <div>
        <Button type='default'>Save</Button>
      </div>
    </div>
  );
}
