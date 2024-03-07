import { useFetchHistories } from '../hooks/query';
import { AiOutlineClose } from 'react-icons/ai';

export default function HistoryTab() {
  const { data } = useFetchHistories();

  return (
    <div className=''>
      {data &&
        data.map((item, index) => {
          return (
            <div key={item.date + index} className='m-4  overflow-hidden'>
              <div className='text-blue-500 font-bold '>{item.date}</div>
              {item.audios.map((audio, index) => {
                return (
                  <div
                    key={index}
                    className='text-gray-500 bg-gray-50 rounded-md m-1 p-1 flex items-center justify-between'
                  >
                    {audio.title}
                    <AiOutlineClose />
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
}
