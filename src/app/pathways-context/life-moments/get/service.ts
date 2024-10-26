import { Injectable } from '@nestjs/common';
import { GetLifeMomentInput, GetLifeMomentOutput } from './dto';
import { getLifeMomentOutputMock } from './mock';

@Injectable()
export class GetLifeMomentService {
  async get({}: GetLifeMomentInput): Promise<GetLifeMomentOutput> {
    return getLifeMomentOutputMock;
  }
}
