import { Module } from '@nestjs/common';
import { SetResultsService } from './set-results.service';
import { SetResultsController } from './set-results.controller';

@Module({
  controllers: [SetResultsController],
  providers: [SetResultsService]
})
export class SetResultsModule {}
