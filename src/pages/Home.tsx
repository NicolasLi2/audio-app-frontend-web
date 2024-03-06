import { Card } from 'antd';
import LatestUploads from '../components/LatestUploads';

interface Props {}

export default function Home({}: Props) {
  return (
    <div>
      <h2>Latest Uploads</h2>

      <LatestUploads />
    </div>
  );
}
