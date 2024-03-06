import { Card } from 'antd';
import LatestUploads from '../components/LatestUploads';
import { useDispatch, useSelector } from 'react-redux';
import useSound from 'use-sound';
import { RootState } from '../store';
import usePlayer from '../hooks/usePlayer';
import { useEffect, useState } from 'react';
import { updateIsPlaying, updateOnGoingAudio } from '../store/playerSlice';
import PlayAnimation from '../ui/PlayAnimation';

export default function Home() {
  const [file, setFile] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const { onGoingAudio } = useSelector((state: RootState) => state.player);

  console.log(isPlaying);

  // const dispatch = useDispatch();

  // dispatch(updateOnGoingAudio(onGoingAudio));

  // console.log(file);
  // const { play, pause, stop } = usePlayer(file);

  // const handleClick = () => {
  //   console.log('clicked');
  //   if (isPlaying) {
  //     stop();
  //     setIsPlaying(false);
  //     // dispatch(updateIsPlaying(false));
  //   } else {
  //     play();
  //     setIsPlaying(true);
  //     // dispatch(updateIsPlaying(true));
  //   }
  // };

  // useEffect(() => {
  //   if (onGoingAudio) setFile(onGoingAudio.file);
  // }, [onGoingAudio]);

  return (
    <div>
      <h2>Latest Uploads</h2>

      <LatestUploads />
    </div>
  );
}
