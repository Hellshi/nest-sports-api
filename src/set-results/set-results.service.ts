import { Injectable } from '@nestjs/common';
import { CreateSetResultDto } from './dto/create-set-result.dto';
import { UpdateSetResultDto } from './dto/update-set-result.dto';

@Injectable()
export class SetResultsService {
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
