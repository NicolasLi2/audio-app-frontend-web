import { Card, Flex, Image } from 'antd';

interface Props {
  title: string;
  poster?: string;
}

export default function AudioCard({ title, poster }: Props) {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<Image alt={title} src={poster} />}
    >
      <Card.Meta title={title} />
    </Card>
  );
}
