import { Avatar, Button, Input } from 'antd';
import { VscUnverified, VscVerifiedFilled } from 'react-icons/vsc';
import { IoLogOutOutline } from 'react-icons/io5';
import { AiOutlineClear, AiOutlineLogout } from 'react-icons/ai';

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
    <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
      <div>
        <div className='border-b border-blue-300 py-1 text-lg text-blue-600 font-semibold'>
          Profile Setting
        </div>
        <div className='flex flex-col max-w-96 gap-8 my-4'>
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
      </div>

      <div>
        <div className=''>
          <div className='border-b border-blue-300 py-1 text-lg text-blue-600 font-semibold'>
            History
          </div>
          <Button
            type='default'
            icon={<AiOutlineClear />}
            className='flex items-center my-7'
          >
            Clear History
          </Button>
        </div>
        <div>
          <div className='border-b border-blue-300 py-1 text-lg text-blue-600 font-semibold'>
            Log out
          </div>
          <Button
            type='default'
            icon={<IoLogOutOutline />}
            className='flex items-center my-7'
          >
            Log Out
          </Button>
          <Button
            type='default'
            icon={<IoLogOutOutline />}
            className='flex items-center my-7'
          >
            Log Out From All Devices
          </Button>
        </div>
      </div>
    </div>
  );
}
