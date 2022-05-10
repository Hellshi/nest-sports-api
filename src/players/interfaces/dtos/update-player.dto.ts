import { IsEmail, IsPhoneNumber, IsString } from 'class-validator';

export class UpdatePlayerDto {
  @IsEmail()
  readonly email: string;
  @IsPhoneNumber()
  readonly phone?: string;
  @IsString()
  readonly name: string;
}
