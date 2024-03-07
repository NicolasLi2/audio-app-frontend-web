import PlaylistTab from '../components/PlaylistTab';
import UploadsTab from '../components/UploadsTab';

interface Props {}

export default function Profile({}: Props) {
  return (
    <div className='grid grid-cols-2 gap-2'>
      <div>
        <h2 className='uppercase ml-4 text-lg font-bold'>Uploads</h2>
        <div className=' h-72 overflow-scroll'>
          <UploadsTab />
        </div>
      </div>

      <div>
        <h2 className='uppercase ml-4 text-lg font-bold'>Playlists</h2>
        <div className='h-72 overflow-scroll'>
          <PlaylistTab />
        </div>
      </div>
      <div>
        <h2 className='uppercase ml-4 text-lg font-bold'>Favorites</h2>
        <div className='bg-green-300 h-72 overflow-scroll'>Favorites</div>
      </div>
      <div>
        <h2 className='uppercase ml-4 text-lg font-bold'>Histories</h2>
        <div className='bg-yellow-300 h-72 overflow-scroll'>Histories</div>
      </div>
    </div>
  );
}
