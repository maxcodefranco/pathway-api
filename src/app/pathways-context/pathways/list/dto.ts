import { ApiProperty } from '@nestjs/swagger';
import {
  PathwayStatus,
  PathwaySubscriptionStatus,
} from 'src/domain/life-moments/enums';

export class PathwayManagerUser {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  thumbnail_url: string;
}

export class PathwayManager {
  @ApiProperty()
  id: string;
  @ApiProperty()
  user: PathwayManagerUser;
}

export class PathwaySubscriptionOutput {
  @ApiProperty({ enum: PathwaySubscriptionStatus })
  status: PathwaySubscriptionStatus;
  @ApiProperty()
  start_date?: string;
  @ApiProperty()
  end_date?: string;
}

export class PathwayCategoryOutput {
  @ApiProperty()
  id: string;
  @ApiProperty()
  slug: string;
  @ApiProperty()
  name: string;
}

export class PathwayListItemOutput {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty({ type: [PathwayManager] })
  managers: PathwayManager[];
  @ApiProperty()
  total_members: number;
  @ApiProperty()
  subscription?: PathwaySubscriptionOutput;
  @ApiProperty()
  category: PathwayCategoryOutput;
  @ApiProperty({ enum: PathwayStatus })
  status: PathwayStatus;
  @ApiProperty()
  enroll_availability_start_date?: string;
}

export class ListPathwaysInput {}

export class ListPathwaysOutput {
  @ApiProperty({ type: [PathwayListItemOutput] })
  datasets: PathwayListItemOutput[];
}
