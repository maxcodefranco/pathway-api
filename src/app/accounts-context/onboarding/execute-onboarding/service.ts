import { Injectable } from '@nestjs/common';
import { ExecuteOnboardingInput, ExecuteOnboardingOutput } from './dto';
import * as uuid from 'uuid';

@Injectable()
export class ExecuteOnboardingService {
  async udpate({}: ExecuteOnboardingInput): Promise<ExecuteOnboardingOutput> {
    return {
      accessToken: uuid.v4(),
    };
  }
}
