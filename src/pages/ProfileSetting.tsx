import { Avatar, Button } from 'antd';
import ImageSelectorSetting from '../components/ImageSelectorSetting';

export default function ProfileSetting() {
  const profileString = localStorage.getItem('user-profile');
  const profile = profileString ? JSON.parse(profileString) : null;
  if (!profile) {
    return <div>User not found</div>;
  }
  return (
    <div>
      {/* <Avatar shape='square' size={100} style={{ backgroundColor: 'white' }}>
        <img src={profile.avatar} alt={profile.name} className='rounded-md' />
      </Avatar>
      <Button type='link'>Update profile image</Button> */}
      <ImageSelectorSetting profile={profile} />
    </div>
  );
}
