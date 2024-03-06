import { Card, Flex, Image } from 'antd';
import { useState } from 'react';
import useSound from 'use-sound';

interface Props {
  title: string;
  poster?: string;
  file: string;
  onClick?: () => void;
}

export default function AudioCard({ title, poster, file, onClick }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, sound }] = useSound(file);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={title} src={poster} />}
      onClick={playingButton}
    >
      <Card.Meta title={title} />
    </Card>
  );
}
