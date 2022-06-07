import { Module } from '@nestjs/common';
import { SetResultsEntity } from 'src/database/entities';
import { SetResultsController } from './set-results.controller';
import { SetResultsService } from './set-results.service';

@Module({
  controllers: [SetResultsController],
  providers: [
    SetResultsService,
    {
      provide: 'REPOSITORY_CATALOG',
      useClass: SetResultsEntity,
    },
  ],
})
export class SetResultsModule {}
