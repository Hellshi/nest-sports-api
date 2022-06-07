import { PartialType } from '@nestjs/mapped-types';
import { CreateSetResultDto } from './create-set-result.dto';

export class UpdateSetResultDto extends PartialType(CreateSetResultDto) {}
