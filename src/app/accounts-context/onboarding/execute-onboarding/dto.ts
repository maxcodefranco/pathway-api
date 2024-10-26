import { ApiProperty } from '@nestjs/swagger';
import { OnboardingData } from '../definitions';

export class ExecuteOnboardingProfileInput
  implements
    Pick<
      OnboardingData['profile'],
      'firstname' | 'lastname' | 'birthdate' | 'email' | 'city'
    >
{
  @ApiProperty()
  firstname: string;
  @ApiProperty()
  lastname: string;
  @ApiProperty()
  birthdate: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  city: string;
}

export class ExecuteOnboardingMaritalInput
  implements Pick<OnboardingData['marital'], 'status' | 'duration'>
{
  @ApiProperty()
  status: string;
  @ApiProperty()
  duration: string;
}

export class ExecuteOnboardingParentingInput
  implements Pick<OnboardingData['parenting'], 'total_children' | 'how_old'>
{
  @ApiProperty()
  total_children: number;
  @ApiProperty()
  how_old: number;
}

export class ExecuteOnboardingPayloadInput
  implements
    Pick<
      OnboardingData,
      | 'profile'
      | 'learning_tags'
      | 'employment_tags'
      | 'industry'
      | 'marital'
      | 'parenting'
      | 'seasons_in_life_tags'
      | 'interests_tags'
      | 'struggles_you_are_facing'
    >
{
  @ApiProperty()
  profile: ExecuteOnboardingProfileInput;
  @ApiProperty()
  learning_tags: string[];
  @ApiProperty()
  is_currently_studying?: boolean;
  @ApiProperty()
  employment_tags: string[];
  @ApiProperty()
  industry: string;
  @ApiProperty()
  marital: ExecuteOnboardingMaritalInput;
  @ApiProperty()
  parenting: ExecuteOnboardingParentingInput;
  @ApiProperty()
  seasons_in_life_tags: string[];
  @ApiProperty()
  interests_tags: string[];
  @ApiProperty()
  struggles_you_are_facing: string[];
}

export class ExecuteOnboardingInput {
  @ApiProperty()
  id: string;
  @ApiProperty()
  payload: ExecuteOnboardingPayloadInput;
}

export class ExecuteOnboardingOutput {
  @ApiProperty()
  accessToken: string;
}
