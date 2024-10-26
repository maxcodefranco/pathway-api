import { ApiProperty } from '@nestjs/swagger';

export class ListLifeMomentsInput {}

export class LifeMomentCategoryOutput {
  @ApiProperty()
  id: string;
  @ApiProperty()
  slug: string;
  @ApiProperty()
  name: string;
}

export class LifeMomentItemOutput {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  category: LifeMomentCategoryOutput;
}

export class ListLifeMomentsOutput {
  @ApiProperty({ type: [LifeMomentItemOutput] })
  datasets: LifeMomentItemOutput[];
}
