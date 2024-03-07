import { Select } from 'antd';
import { useEffect, useState } from 'react';
import { categories } from '../types/audio';

const OPTIONS = categories;

interface Props {
  onSelect: (category: string) => void;
}

export default function CategorySelector({ onSelect }: Props) {
  const [selectedItems, setSelectedItems] = useState<string>('');

  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

  useEffect(() => {
    onSelect(selectedItems);
  }, [selectedItems]);

  return (
    <Select
      value={selectedItems}
      onChange={setSelectedItems}
      // onChange={onSelect}
      style={{ width: '100%' }}
      options={filteredOptions.map((item) => ({
        value: item,
        label: item,
      }))}
    />
  );
}
