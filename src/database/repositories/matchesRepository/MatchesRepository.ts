import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MatchesEntity } from 'src/database/entities';
import { Repository } from 'typeorm';
import { BaseRepository } from '../BaseRepository';
import { IMatchRepository } from './IMatchRepository';

@Injectable()
export default class MatcheRepository
  extends BaseRepository<MatchesEntity>
  implements IMatchRepository
{
  constructor(
    @InjectRepository(MatchesEntity)
    private readonly matchesRepository: Repository<MatchesEntity>,
  ) {
    super(matchesRepository);
  }
}
