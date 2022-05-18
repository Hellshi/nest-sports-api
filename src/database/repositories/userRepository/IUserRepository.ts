import { UserEntity } from 'src/database/entities';
import { IRepository } from '../IRepository';

export type IUserRepository = IRepository<UserEntity>;
