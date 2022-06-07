import { Inject, Injectable } from '@nestjs/common';
import { IChallengeRepository } from 'src/database/repositories/challengesRepository/IChallengeRepository';
import { CreateChallengeDto } from './interfaces/dto/create-challenge.dto';
import { UpdateChallengeDto } from './interfaces/dto/update-challenge.dto';

@Injectable()
export class ChallengesService {
  private repository: IChallengeRepository;
  constructor(
    @Inject('REPOSITORY_CATALOG') challengeRepository: IChallengeRepository,
  ) {
    this.repository = challengeRepository;
  }
  create(createChallengeDto: CreateChallengeDto) {
    return 'This action adds a new challenge';
  }

  findAll() {
    return `This action returns all challenges`;
  }

  findOne(id: number) {
    return `This action returns a #${id} challenge`;
  }

  update(id: number, updateChallengeDto: UpdateChallengeDto) {
    return `This action updates a #${id} challenge`;
  }

  remove(id: number) {
    return `This action removes a #${id} challenge`;
  }
}
