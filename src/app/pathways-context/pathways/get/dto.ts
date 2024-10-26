import { ApiProperty } from '@nestjs/swagger';
import {
  PathwayStatus,
  PathwaySubscriptionStatus,
} from 'src/domain/life-moments/enums';

export class GetPathwayInput {
  @ApiProperty()
  pathwayId: string;
}

export class LifeMomentCategoryOutput {
  @ApiProperty()
  id: string;
  @ApiProperty()
  slug: string;
  @ApiProperty()
  name: string;
}

export class GetPathwayParticipantUser {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  thumbnail_url: string;
}

export class GetPathwayParticipant {
  @ApiProperty()
  id: string;
  @ApiProperty()
  user: GetPathwayParticipantUser;
}

export class PathwaySubscriptionOutput {
  @ApiProperty()
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

export class GetPathwayOutput {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty({ type: [GetPathwayParticipant] })
  managers: GetPathwayParticipant[];
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
