import { Card, Flex, Image } from 'antd';

interface Props {
  title: string;
  poster?: string;
  onClick?: () => void;
}

export default function AudioCard({ title, poster, onClick }: Props) {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={title} src={poster} />}
      onClick={onClick}
    >
      <Card.Meta title={title} />
    </Card>
  );
}
