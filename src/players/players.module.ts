import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { repositoryCatalogProvider } from 'src/database/repositories/RepositoryCatalogFactory';
import { CategoryEntity, UserEntity } from '../database/entities';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, CategoryEntity])],
  controllers: [PlayersController],
  providers: [PlayersService, repositoryCatalogProvider],
})
export class PlayersModule {}
