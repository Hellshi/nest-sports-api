import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SetResultsEntity } from 'src/database/entities';
import { Repository } from 'typeorm';
import { BaseRepository } from '../BaseRepository';
import { ISetResultsRepository } from './ISetResultsRepository';

@Injectable()
export default class SetResultsRepositories
  extends BaseRepository<SetResultsEntity>
  implements ISetResultsRepository
{
  constructor(
    @InjectRepository(SetResultsEntity)
    private readonly setResultsRepository: Repository<SetResultsEntity>,
  ) {
    super(setResultsRepository);
  }
}
