import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class CreatePlayerDto {
  @IsEmail()
  readonly email: string;
  @IsPhoneNumber()
  readonly phone: string;
  @IsNotEmpty()
  readonly name: string;
  readonly playerPicture?: string;
  readonly role?: 'ADMIN' | 'PLAYER';
}
