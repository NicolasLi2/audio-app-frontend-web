import { useEffect, useState } from 'react';
import { useFetchLatestAudios } from '../hooks/query';
import AudioCard from '../ui/AudioCard';
import { Flex } from 'antd';

interface Props {}

export default function LatestUploads() {
  const { data } = useFetchLatestAudios();
  console.log(data);

  return (
    <div className='flex gap-3'>
      {data &&
        data.map((item) => {
          return (
            <AudioCard key={item.id} title={item.title} poster={item.poster} />
          );
        })}
    </div>
  );
}
