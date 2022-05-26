import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import CategoriesRepository from 'src/database/repositories/categories/CategoriesRepository';
import { CategoryEntity, EventEntity, UserEntity } from '../database/entities';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, CategoryEntity, EventEntity]),
  ],
  controllers: [CategoriesController],
  providers: [
    CategoriesService,
    {
      provide: 'REPOSITORY_CATALOG',
      useClass: CategoriesRepository,
    },
  ],
})
export class CategoriesModule {}
