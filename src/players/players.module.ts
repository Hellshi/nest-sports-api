import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userEntity } from '../database/entities/user.entity';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';

@Module({
  imports: [TypeOrmModule.forFeature([userEntity])],
  controllers: [PlayersController],
  providers: [PlayersService],
})
export class PlayersModule {}
