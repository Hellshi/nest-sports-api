import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity, UserEntity } from '../database/entities';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, CategoryEntity])],
  controllers: [PlayersController],
  providers: [PlayersService],
})
export class PlayersModule {}
