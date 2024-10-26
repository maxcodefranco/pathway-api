import { Injectable } from '@nestjs/common';
import { ListLifeMomentsInput, ListLifeMomentsOutput } from './dto';
import { listLifeMomentsMock } from './mock';

@Injectable()
export class ListLifeMomentsService {
  async list({}: ListLifeMomentsInput): Promise<ListLifeMomentsOutput> {
    return listLifeMomentsMock;
  }
}
