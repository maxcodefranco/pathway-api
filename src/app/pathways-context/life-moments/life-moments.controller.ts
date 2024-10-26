import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ListLifeMomentsService } from './list/service';
import { ListLifeMomentsInput, ListLifeMomentsOutput } from './list/dto';
import { GetLifeMomentInput, GetLifeMomentOutput } from './get/dto';
import { GetLifeMomentService } from './get/service';
import { listLifeMomentsMock } from './list/mock';
import { getLifeMomentOutputMock } from './get/mock';

@Controller()
@ApiTags('pathways-context:life-moments')
export class LifeMomentsController {
  constructor(
    private readonly listLifeMomentsService: ListLifeMomentsService,
    private readonly getLifeMomentService: GetLifeMomentService,
  ) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'List of life moments',
    type: ListLifeMomentsOutput,
    example: listLifeMomentsMock,
  })
  @ApiOperation({ summary: 'List life moments' })
  list(@Query() query: ListLifeMomentsInput): Promise<ListLifeMomentsOutput> {
    return this.listLifeMomentsService.list({ query });
  }

  @Get(':lifeMomentId')
  @ApiResponse({
    status: 200,
    description: 'Get life moment',
    type: GetLifeMomentOutput,
    example: getLifeMomentOutputMock,
  })
  @ApiOperation({ summary: 'Get life moment' })
  async getLifeMoment(
    @Param() params: Pick<GetLifeMomentInput, 'lifeMomentId'>,
  ): Promise<GetLifeMomentOutput> {
    return this.getLifeMomentService.get({ ...params });
  }
}
