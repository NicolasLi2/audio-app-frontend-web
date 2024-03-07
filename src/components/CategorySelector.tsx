import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import { categories } from '../types/audio';

// const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];
const OPTIONS = categories;

export default function CategorySelector({ onSelect }) {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

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
