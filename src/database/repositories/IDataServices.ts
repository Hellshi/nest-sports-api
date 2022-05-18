import { CategoryEntity, UserEntity } from '../entities';
import { IRepository } from './IRepository';

export interface IDataServices {
  userRepository: IRepository<UserEntity>;
  categoryRepository: IRepository<CategoryEntity>;
}
