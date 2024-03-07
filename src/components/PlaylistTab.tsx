import { RiPlayListFill } from 'react-icons/ri';
import { AiOutlineLock } from 'react-icons/ai';
import { IoMdGlobe } from 'react-icons/io';
import { useFetchPlaylist } from '../hooks/query';

export default function PlaylistTab() {
  const { data } = useFetchPlaylist();
  // console.log(data);
  return (
    <div className=''>
      {data &&
        data.map((item) => {
          return (
            <div
              key={item.id}
              className='flex m-4 bg-gray-50 rounded-md overflow-hidden'
            >
              <div className='flex items-center justify-center w-10 text-blue-500 '>
                <RiPlayListFill size={25} />
              </div>
              <div className='flex flex-col justify-center ml-2'>
                <div className='text-blue-500 font-bold'>{item.title}</div>
                <div className='text-gray-500 flex items-center gap-3'>
                  {item.visibility === 'public' ? (
                    <IoMdGlobe />
                  ) : (
                    <AiOutlineLock />
                  )}
                  <div>
                    {item.itemsCount}
                    <span className='ml-1'>
                      {item.itemsCount === 1 ? 'audio' : 'audios'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
