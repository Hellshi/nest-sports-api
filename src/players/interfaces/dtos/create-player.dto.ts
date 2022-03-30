export class CreatePlayerDto {
  readonly email: string;
  readonly phone: string;
  readonly name: string;
  readonly playerPicture?: string;
  readonly role?: 'ADMIN' | 'PLAYER';
}
