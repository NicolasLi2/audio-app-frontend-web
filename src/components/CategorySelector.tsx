import React, { useState } from 'react';
import { Select } from 'antd';
import { categories } from '../types/audio';

// const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];
const OPTIONS = categories;

export default function CategorySelector() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

  return (
    <Select
      value={selectedItems}
      onChange={setSelectedItems}
      style={{ width: '100%' }}
      options={filteredOptions.map((item) => ({
        value: item,
        label: item,
      }))}
    />
  );
}
