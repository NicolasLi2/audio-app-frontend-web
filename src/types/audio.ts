// export const categories = [
//   'Arts',
//   'Business',
//   'Education',
//   'Entertainment',
//   'Kids & Family',
//   'Music',
//   'Science',
//   'Tech',
//   'Others',
// ]

// export type Categories =
//   | 'Arts'
//   | 'Business'
//   | 'Education'
//   | 'Entertainment'
//   | 'Kids & Family'
//   | 'Music'
//   | 'Science'
//   | 'Tech'
//   | 'Others';

enum Categories {
  Arts = 'Arts',
  Business = 'Business',
  Education = 'Education',
  Entertainment = 'Entertainment',
  KidsFamily = 'Kids & Family',
  Music = 'Music',
  Science = 'Science',
  Tech = 'Tech',
  Others = 'Others',
}

export interface AudioData {
  id: string;
  title: string;
  poster?: string;
  file: string;
  category: Categories;
  about: string;
  owner: {
    id: string;
    name: string;
  };
}
