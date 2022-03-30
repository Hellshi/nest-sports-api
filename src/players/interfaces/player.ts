export interface IPlayer {
  readonly id: number;
  readonly email: string;
  readonly phone?: string;
  createdAt?: Date;
  updatedAt?: Date;
  rakingPosition?: string;
  raking?: string;
  name: string;
  playerPicture?: string;
  role?: 'ADMIN' | 'PLAYER';
}
