import { Module } from '@nestjs/common';
import { createTransientProider } from 'src/shared/utlis/nestjs';
import { OnboardingController } from './onboarding.controller';
import { ExecuteOnboardingService } from './execute-onboarding/service';
import { SharedModule } from 'src/shared/shared.module';

const providers = createTransientProider([ExecuteOnboardingService]);

@Module({
  imports: [SharedModule],
  controllers: [OnboardingController],
  providers,
})
export class OnboardingModule {}
