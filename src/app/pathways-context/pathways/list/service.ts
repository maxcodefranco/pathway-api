import { Injectable } from '@nestjs/common';
import { ListPathwaysInput, ListPathwaysOutput } from './dto';
import { listPathwayOutputMock } from './mock';

@Injectable()
export class ListPathwaysService {
  async list({}: ListPathwaysInput): Promise<ListPathwaysOutput> {
    return listPathwayOutputMock;
  }
}
