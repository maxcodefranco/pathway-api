import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetPathwayInput, GetPathwayOutput } from './get/dto';
import { GetPathwayService } from './get/service';
import { ListPathwaysInput, ListPathwaysOutput } from './list/dto';
import { ListPathwaysService } from './list/service';
import { listPathwayOutputMock } from './list/mock';
import { getPathwayOutputMock } from './get/mock';

@Controller()
@ApiTags('pathways-context:pathways')
export class PathwayController {
  constructor(
    private readonly listPathwaysService: ListPathwaysService,
    private readonly getListPathwayService: GetPathwayService,
  ) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'List of pathways',
    type: ListPathwaysOutput,
    example: listPathwayOutputMock,
  })
  @ApiOperation({ summary: 'List pathways' })
  listPathways(@Query() query: ListPathwaysInput): Promise<ListPathwaysOutput> {
    return this.listPathwaysService.list(query);
  }

  @Get(':pathwayId')
  @ApiResponse({
    status: 200,
    description: 'Get pathway',
    type: GetPathwayOutput,
    example: getPathwayOutputMock,
  })
  @ApiOperation({ summary: 'Get a pathway' })
  getPathway(
    @Param() params: Pick<GetPathwayInput, 'pathwayId'>,
  ): Promise<GetPathwayOutput> {
    return this.getListPathwayService.get(params);
  }
}
