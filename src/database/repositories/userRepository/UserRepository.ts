import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/database/entities';
import { Repository } from 'typeorm';
import { BaseRepository } from '../BaseRepository';
import { IUserRepository } from './IUserRepository';

@Injectable()
export default class UserRepository
  extends BaseRepository<UserEntity>
  implements IUserRepository
{
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {
    super(usersRepository);
  }
}
