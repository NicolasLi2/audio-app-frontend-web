import FavoriteTab from '../components/FavoriteTab';
import HistoryTab from '../components/HistoryTab';
import PlaylistTab from '../components/PlaylistTab';
import UploadsTab from '../components/UploadsTab';

export default function Profile() {
  return (
    <div className='grid grid-cols-2 gap-x-2 gap-y-10'>
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
        <div className=' h-72 overflow-scroll'>
          <FavoriteTab />
        </div>
      </div>
      <div>
        <h2 className='uppercase ml-4 text-lg font-bold'>Histories</h2>
        <div className=' h-72 overflow-scroll'>
          <HistoryTab />
        </div>
      </div>
    </div>
  );
}
