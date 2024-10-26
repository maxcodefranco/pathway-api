import { ListLifeMomentsOutput } from './dto';

export const listLifeMomentsMock: ListLifeMomentsOutput = {
  datasets: [
    {
      id: '1',
      name: 'Newly Weds',
      description:
        'Marriage is a beautiful relation designed by God to perpetuate the humanity through love. Recommend for couples under 2 years.',
      category: {
        id: '1',
        slug: 'family',
        name: 'Family',
      },
    },
    {
      id: '2',
      name: 'Life Moment 2',
      description: 'Life Moment 2 Description',
      category: {
        id: '2',
        slug: 'slug-2',
        name: 'Category 2',
      },
    },
  ],
};
