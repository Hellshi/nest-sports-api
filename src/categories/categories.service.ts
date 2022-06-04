import { Inject, Injectable } from '@nestjs/common';
import { ICategoryRepository } from 'src/database/repositories/categories/ICategoriesRepository';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  private repository: ICategoryRepository;
  constructor(
    @Inject('REPOSITORY_CATALOG') categoryRepository: ICategoryRepository,
  ) {
    this.repository = categoryRepository;
  }

  async create(createCategoryDto: CreateCategoryDto) {
    return this.repository.insert(createCategoryDto);
  }

  async findAll() {
    return this.categoryRepository.findAllWithRelations(['events', 'user']);
  }

  findOne(id: number) {
    return this.repository.findWithRelations({ id }, ['user', 'events']);
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.repository.update(id, updateCategoryDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
