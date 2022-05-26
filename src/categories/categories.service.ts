import { Inject, Injectable } from '@nestjs/common';
import { ICategoryRepository } from 'src/database/repositories/categories/ICategoriesRepository';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  private categoryRepository: ICategoryRepository;
  constructor(
    @Inject('REPOSITORY_CATALOG') categoryRepository: ICategoryRepository,
  ) {
    this.categoryRepository = categoryRepository;
  }

  async create(createCategoryDto: CreateCategoryDto) {
    return this.categoryRepository.insert(createCategoryDto);
  }

  async findAll() {
    return this.categoryRepository.findAllWithRelations(['events', 'user']);
  }

  findOne(id: number) {
    return this.categoryRepository.findWithRelations({ id }, [
      'user',
      'events',
    ]);
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
