import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  ChallengesEntity,
  MatchesEntity,
  UserEntity
} from 'src/database/entities';
import ChallengeRepository from 'src/database/repositories/challengesRepository/ChallengeRepository';
import { ChallengesController } from './challenges.controller';
import { ChallengesService } from './challenges.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, ChallengesEntity, MatchesEntity]),
  ],
  controllers: [ChallengesController],
  providers: [
    ChallengesService,
    {
      provide: 'REPOSITORY_CATALOG',
      useClass: ChallengeRepository,
    },
  ],
})
export class ChallengesModule {}
