import { Avatar, Button, Input, message } from 'antd';
import { VscUnverified, VscVerifiedFilled } from 'react-icons/vsc';
import { IoLogOutOutline } from 'react-icons/io5';
import { AiOutlineClear, AiOutlineLogout } from 'react-icons/ai';

import ImageSelectorSetting from '../components/ImageSelectorSetting';
import { Profile, updateLoggedIn, updateProfile } from '../store/userSlice';
import { ChangeEvent, useState } from 'react';
import { getClient } from '../api/client';
import { Keys } from '../types/user';
import { useDispatch } from 'react-redux';
import catchError from '../api/catchError';

export default function ProfileSetting() {
  const profileString = localStorage.getItem(Keys.USER_PROFILE);
  const profile: Profile = profileString ? JSON.parse(profileString) : null;
  const [name, setName] = useState(profile?.name || '');
  const dispatch = useDispatch();

  if (!profile) {
    return <div>User not found</div>;
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleLogout = async (fromAll?: boolean) => {
    try {
      const endpoint = '/auth/log-out?fromAll=' + (fromAll ? 'yes' : '');
      const client = await getClient();
      await client.post(endpoint);
      localStorage.removeItem(Keys.ACCESS_TOKEN);
      localStorage.removeItem(Keys.USER_PROFILE);
      message.success('Logged out successfully', 3);
      // dispatch(updateProfile(null));
      // dispatch(updateLoggedIn(false));
    } catch (error) {
      const errorMessage = catchError(error);
      message.error(errorMessage, 5);
    }
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
            <Input value={profile.email} onChange={handleChange} disabled />
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
            onClick={() => handleLogout()}
          >
            Log Out
          </Button>
          <Button
            type='default'
            icon={<IoLogOutOutline />}
            className='flex items-center my-7'
            onClick={() => handleLogout(true)}
          >
            Log Out From All Devices
          </Button>
        </div>
      </div>
    </div>
  );
}
