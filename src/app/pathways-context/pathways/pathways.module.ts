import { Module } from '@nestjs/common';
import { PathwayController } from './pathway.controller';
import { createTransientProider } from 'src/shared/utlis/nestjs';
import { GetPathwayService } from './get/service';
import { ListPathwaysService } from './list/service';
import { SharedModule } from 'src/shared/shared.module';

const providers = createTransientProider([
  GetPathwayService,
  ListPathwaysService,
]);

@Module({
  imports: [SharedModule],
  controllers: [PathwayController],
  providers,
})
export class PathwaysModule {}
