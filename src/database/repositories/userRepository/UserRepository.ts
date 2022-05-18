import { UserEntity } from 'src/database/entities';
import { EntityManager } from 'typeorm';
import { BaseRepository } from '../BaseRepository';
import { IUserRepository } from './IUserRepository';

export default class UserRepository
  extends BaseRepository<UserEntity>
  implements IUserRepository
{
  constructor(entityManager: EntityManager) {
    super(entityManager, UserEntity);
  }
}
