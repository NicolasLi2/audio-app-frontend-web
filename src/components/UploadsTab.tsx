import { useFetchUploadsByProfile } from '../hooks/query';

export default function UploadsTab() {
  const { data } = useFetchUploadsByProfile();
  console.log(data);
  return (
    <div className=''>
      {data &&
        data.map((item) => {
          return (
            <div className='flex m-4 bg-gray-50 rounded-md overflow-hidden'>
              <img
                src={item.poster}
                alt={item.title}
                className='w-16 aspect-square rounded-md'
              />
              <div className='flex flex-col justify-center ml-4'>
                <div className='text-blue-500 font-bold'>{item.title}</div>
                <div className='text-blue-400 '>{item.owner.name}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
