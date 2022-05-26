import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/database/entities';
import { Repository } from 'typeorm';
import { BaseRepository } from '../BaseRepository';
import { ICategoryRepository } from './ICategoriesRepository';

@Injectable()
export default class CategoriesRepository
  extends BaseRepository<CategoryEntity>
  implements ICategoryRepository
{
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoriesRepository: Repository<CategoryEntity>,
  ) {
    super(categoriesRepository);
  }
}
