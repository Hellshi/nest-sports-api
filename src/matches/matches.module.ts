import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChallengesEntity, MatchesEntity } from 'src/database/entities';
import MatcheRepository from 'src/database/repositories/matchesRepository/MatchesRepository';
import { MatchesController } from './matches.controller';
import { MatchesService } from './matches.service';

@Module({
  imports: [TypeOrmModule.forFeature([ChallengesEntity, MatchesEntity])],
  controllers: [MatchesController],
  providers: [
    MatchesService,
    {
      provide: 'REPOSITORY_CATALOG',
      useClass: MatcheRepository,
    },
  ],
})
export class MatchesModule {}
