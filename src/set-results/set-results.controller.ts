import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common';
import { CreateSetResultDto } from './interfaces/dto/create-set-result.dto';
import { UpdateSetResultDto } from './interfaces/dto/update-set-result.dto';
import { SetResultsService } from './set-results.service';

@Controller('set-results')
export class SetResultsController {
  constructor(private readonly setResultsService: SetResultsService) {}

  @Post()
  create(@Body() createSetResultDto: CreateSetResultDto) {
    return this.setResultsService.create(createSetResultDto);
  }

  @Get()
  findAll() {
    return this.setResultsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.setResultsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSetResultDto: UpdateSetResultDto,
  ) {
    return this.setResultsService.update(+id, updateSetResultDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.setResultsService.remove(+id);
  }
}
