import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChallengesEntity } from 'src/database/entities';
import { Repository } from 'typeorm';
import { BaseRepository } from '../BaseRepository';
import { IChallengeRepository } from './IChallengeRepository';

@Injectable()
export default class ChallengeRepository
  extends BaseRepository<ChallengesEntity>
  implements IChallengeRepository
{
  constructor(
    @InjectRepository(ChallengesEntity)
    private readonly challengesRepository: Repository<ChallengesEntity>,
  ) {
    super(challengesRepository);
  }
}
