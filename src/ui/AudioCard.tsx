import { Card } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSound from 'use-sound';
import { RootState } from '../store';
import { updateOnGoingAudio } from '../store/playerSlice';
import { AudioData } from '../types/audio';
import PlayAnimation from './PlayAnimation';

interface Props {
  onClick?: () => void;
  item: AudioData;
  playing: boolean;
}

export default function AudioCard({ onClick, item, playing }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, sound, stop }] = useSound(item.file, {
    interrupt: true,
  });
  const dispatch = useDispatch();
  const { onGoingAudio } = useSelector((state: RootState) => state.player);

  if (item.id !== onGoingAudio?.id) {
    stop();
  }

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
      dispatch(updateOnGoingAudio(item));
    }
  };

  return (
    <>
      <Card
        className='relative'
        hoverable
        style={{ width: 240 }}
        cover={<img alt={item.title} src={item.poster} />}
        onClick={playingButton}
        // onClick={handleClick}
      >
        <Card.Meta title={item.title} />
        <PlayAnimation visible={playing} />
      </Card>
    </>
  );
}
