import { ApiProperty } from '@nestjs/swagger';

export class GetLifeMomentInput {
  lifeMomentId: string;
}

export class LifeMomentCategoryOutput {
  @ApiProperty()
  id: string;
  @ApiProperty()
  slug: string;
  @ApiProperty()
  name: string;
}

export class GetLifeMomentOutput {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  category: LifeMomentCategoryOutput;
}
