import { Inject, Injectable } from '@nestjs/common';
import { IMatchRepository } from 'src/database/repositories/matchesRepository/IMatchRepository';
import { CreateMatchDto } from './interfaces/dto/create-match.dto';
import { UpdateMatchDto } from './interfaces/dto/update-match.dto';

@Injectable()
export class MatchesService {
  private repository: IMatchRepository;
  constructor(
    @Inject('REPOSITORY_CATALOG') matcheRepository: IMatchRepository,
  ) {
    this.repository = matcheRepository;
  }
  create(createMatchDto: CreateMatchDto) {
    return 'This action adds a new match';
  }

  findAll() {
    return `This action returns all matches`;
  }

  findOne(id: number) {
    return `This action returns a #${id} match`;
  }

  update(id: number, updateMatchDto: UpdateMatchDto) {
    return `This action updates a #${id} match`;
  }

  remove(id: number) {
    return `This action removes a #${id} match`;
  }
}
