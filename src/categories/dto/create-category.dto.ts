import { ArrayMinSize, IsNotEmpty, IsString } from 'class-validator';
import { IEvent } from '../interfaces/categories';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  readonly category: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @ArrayMinSize(1)
  events?: IEvent[];
}
