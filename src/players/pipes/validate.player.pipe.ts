import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform
} from '@nestjs/common';

export class playerValidatorPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!value) {
      throw new BadRequestException(`${metadata.data} is required!`);
    }
    console.log(`${value} ${metadata.type}`);
    return value;
  }
}
