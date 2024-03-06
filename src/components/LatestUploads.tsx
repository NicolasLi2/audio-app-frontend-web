import { useSelector } from 'react-redux';
import { useFetchLatestAudios } from '../hooks/query';
import AudioCard from '../ui/AudioCard';
import { RootState } from '../store';

interface Props {
  onClick?: () => void;
}

export default function LatestUploads({ onClick }: Props) {
  const { data } = useFetchLatestAudios();
  const { onGoingAudio } = useSelector((state: RootState) => state.player);

  console.log(data);

  return (
    <div className='flex gap-3 flex-wrap'>
      {data &&
        data.map((item) => {
          return (
            <AudioCard
              key={item.id}
              title={item.title}
              poster={item.poster}
              file={item.file}
              onClick={onClick}
              item={item}
              playing={item.id === onGoingAudio?.id}
            />
          );
        })}
    </div>
  );
}
