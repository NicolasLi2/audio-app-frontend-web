export const categories = [
  'Arts',
  'Business',
  'Education',
  'Entertainment',
  'Kids & Family',
  'Music',
  'Science',
  'Tech',
  'Others',
];

export type categoriesTypes =
  | 'Arts'
  | 'Business'
  | 'Education'
  | 'Entertainment'
  | 'Kids & Family'
  | 'Music'
  | 'Science'
  | 'Tech'
  | 'Others';

export interface AudioData {
  id: string;
  title: string;
  poster?: string;
  file: string;
  category: categoriesTypes;
  about: string;
  owner: {
    id: string;
    name: string;
  };
}

export interface Playlist {
  id: string;
  title: string;
  itemsCount: number;
  visibility: 'public' | 'private';
}
