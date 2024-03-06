import { useFetchLatestAudios } from '../hooks/query';
import AudioCard from '../ui/AudioCard';

interface Props {
  onClick?: () => void;
}

export default function LatestUploads({ onClick }: Props) {
  const { data } = useFetchLatestAudios();
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
            />
          );
        })}
    </div>
  );
}
