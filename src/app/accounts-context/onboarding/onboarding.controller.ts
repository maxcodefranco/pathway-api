import { Body, Controller, Post } from '@nestjs/common';
import { ExecuteOnboardingService } from './execute-onboarding/service';
import {
  ExecuteOnboardingInput,
  ExecuteOnboardingOutput,
} from './execute-onboarding/dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('account:onboarding')
export class OnboardingController {
  constructor(private executeOnboardingService: ExecuteOnboardingService) {}

  @Post()
  @ApiResponse({
    status: 200,
    description: 'Onboarding executed successfully',
    type: ExecuteOnboardingOutput,
  })
  @ApiOperation({ summary: 'Register an user' })
  executeOnboarding(
    @Body() input: ExecuteOnboardingInput,
  ): Promise<ExecuteOnboardingOutput> {
    return this.executeOnboardingService.udpate(input);
  }
}
