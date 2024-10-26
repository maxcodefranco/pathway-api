import { Module } from '@nestjs/common';
import { OnboardingModule } from './app/accounts-context/onboarding/onboarding.module';
import { RouterModule } from '@nestjs/core';
import { PathwaysModule } from './app/pathways-context/pathways/pathways.module';
import { LifeMomentsModule } from './app/pathways-context/life-moments/life-moments.module';

@Module({
  imports: [
    OnboardingModule,
    PathwaysModule,
    LifeMomentsModule,
    RouterModule.register([
      {
        path: 'accounts-context',
        children: [
          {
            path: 'onboarding',
            module: OnboardingModule,
          },
        ],
      },
      {
        path: 'pathways-context',
        children: [
          {
            path: 'pathways',
            module: PathwaysModule,
          },
          {
            path: 'life-moments',
            module: LifeMomentsModule,
          },
        ],
      },
    ]),
  ],
  controllers: [],
})
export class AppModule {}
