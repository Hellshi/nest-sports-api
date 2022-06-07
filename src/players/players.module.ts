import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserRepository from 'src/database/repositories/userRepository/UserRepository';
import {
  CategoryEntity,
  ChallengesEntity,
  UserEntity
} from '../database/entities';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, CategoryEntity, ChallengesEntity]),
  ],
  controllers: [PlayersController],
  providers: [
    PlayersService,
    {
      provide: 'REPOSITORY_CATALOG',
      useClass: UserRepository,
    },
  ],
})
export class PlayersModule {}
