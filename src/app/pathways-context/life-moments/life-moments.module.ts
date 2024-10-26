import { Module } from '@nestjs/common';
import { LifeMomentsController } from './life-moments.controller';
import { createTransientProider } from 'src/shared/utlis/nestjs';
import { ListLifeMomentsService } from './list/service';
import { GetLifeMomentService } from './get/service';
import { SharedModule } from 'src/shared/shared.module';

const providers = createTransientProider([
  GetLifeMomentService,
  ListLifeMomentsService,
]);

@Module({
  imports: [SharedModule],
  controllers: [LifeMomentsController],
  providers,
})
export class LifeMomentsModule {}
