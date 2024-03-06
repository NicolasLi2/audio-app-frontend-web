import { useSelector } from 'react-redux';
import { useFetchRecommended } from '../hooks/query';
import AudioCard from '../ui/AudioCard';
import { RootState } from '../store';

export default function RecommendedAudios() {
  const { data } = useFetchRecommended();
  const { onGoingAudio } = useSelector((state: RootState) => state.player);
  console.log('recommend', data);

  return (
    <div className='flex gap-3 flex-wrap'>
      {data &&
        data.map((item) => {
          return (
            <AudioCard
              key={item.id}
              item={item}
              playing={item.id === onGoingAudio?.id}
            />
          );
        })}
    </div>
  );
}
