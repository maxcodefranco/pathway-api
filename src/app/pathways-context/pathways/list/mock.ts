import {
  PathwayStatus,
  PathwaySubscriptionStatus,
} from 'src/domain/life-moments/enums';
import { ListPathwaysOutput } from './dto';

export const listPathwayOutputMock: ListPathwaysOutput = {
  datasets: [
    {
      id: '1',
      name: 'House Dynamics',
      category: {
        id: '1',
        slug: 'newly-weds',
        name: 'Newly Weds',
      },
      status: PathwayStatus.active,
      enroll_availability_start_date: new Date(
        Date.parse('2024-11-01'),
      ).toISOString(),
      managers: [
        {
          id: '1',
          user: {
            id: '1',
            name: 'Mike Smith',
            thumbnail_url:
              'https://images.generated.photos/VEFNRr8_f-ZbZSGTxh5Cf8VLGOb1b2ts9UoF-Rlzeh4/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTI0MDk2LmpwZw.jpg',
          },
        },
        {
          id: '2',
          user: {
            id: '2',
            name: 'John Doe',
            thumbnail_url:
              'https://images.generated.photos/hduC_c_9RYIUAnQvFf6wh91HGwQ9ch3IceyinaIQcnY/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTc0NzA1LmpwZw.jpg',
          },
        },
      ],
      total_members: 10,
      subscription: {
        status: PathwaySubscriptionStatus.not_subscribed,
      },
    },
    {
      id: '2',
      name: 'Creating Limits with Step-Family',
      category: {
        id: '1',
        slug: 'newly-weds',
        name: 'Newly Weds',
      },
      status: PathwayStatus.closed,
      managers: [
        {
          id: '1',
          user: {
            id: '1',
            name: 'Pavio Muniz',
            thumbnail_url:
              'https://images.generated.photos/VEFNRr8_f-ZbZSGTxh5Cf8VLGOb1b2ts9UoF-Rlzeh4/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTI0MDk2LmpwZw.jpg',
          },
        },
      ],
      total_members: 10,
      subscription: {
        status: PathwaySubscriptionStatus.not_subscribed,
      },
    },
  ],
};
