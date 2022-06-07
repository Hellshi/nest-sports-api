import { Inject, Injectable } from '@nestjs/common';
import { IMatchRepository } from 'src/database/repositories/matchesRepository/IMatchRepository';
import { CreateSetResultDto } from './interfaces/dto/create-set-result.dto';
import { UpdateSetResultDto } from './interfaces/dto/update-set-result.dto';

@Injectable()
export class SetResultsService {
  private repository: IMatchRepository;
  constructor(@Inject('REPOSITORY_CATALOG') matchRepository: IMatchRepository) {
    this.repository = matchRepository;
  }
  create(createSetResultDto: CreateSetResultDto) {
    return 'This action adds a new setResult';
  }

  findAll() {
    return `This action returns all setResults`;
  }

  findOne(id: number) {
    return `This action returns a #${id} setResult`;
  }

  update(id: number, updateSetResultDto: UpdateSetResultDto) {
    return `This action updates a #${id} setResult`;
  }

  remove(id: number) {
    return `This action removes a #${id} setResult`;
  }
}
