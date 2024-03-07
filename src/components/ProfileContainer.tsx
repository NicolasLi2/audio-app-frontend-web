import { Avatar } from 'antd';
import { VscUnverified, VscVerifiedFilled } from 'react-icons/vsc';

export default function ProfileContainer() {
  // const { profile } = useSelector((state: RootState) => state.user);
  const profileString = localStorage.getItem('user-profile');
  const profile = profileString ? JSON.parse(profileString) : null;
  console.log(profile);
  if (!profile) return null;
  return (
    <div className='flex gap-5 items-center text-gray-700 bg-gray-50 mb-10 w-1/2'>
      <Avatar shape='square' size={100} style={{ backgroundColor: 'white' }}>
        <img src={profile.avatar} alt={profile.name} className='rounded-md' />
      </Avatar>
      <div className='flex flex-col gap-1'>
        <div className='text-xl font-bold text-blue-500'>{profile.name}</div>
        <div className='flex gap-2'>
          <div className='text-base'>{profile.email}</div>
          <div className='text-blue-500 flex items-center text-lg'>
            {profile.verified ? <VscVerifiedFilled /> : <VscUnverified />}
          </div>
        </div>
        <div className='flex gap-4 text-gray-500 text-xs'>
          <div>{profile.followers} Followers</div>
          <div>{profile.followings} Following</div>
        </div>
      </div>
    </div>
  );
}
