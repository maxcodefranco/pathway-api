import { Injectable } from '@nestjs/common';
import { GetPathwayInput, GetPathwayOutput } from './dto';

@Injectable()
export class GetPathwayService {
  async get({}: GetPathwayInput): Promise<GetPathwayOutput> {
    return null;
  }
}
