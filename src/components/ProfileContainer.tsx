import { useSelector } from 'react-redux';
import { RootState } from '../store';

export default function ProfileContainer() {
  const {} = useSelector((state: RootState) => state.user);
  return <div>ProfileContainer</div>;
}
