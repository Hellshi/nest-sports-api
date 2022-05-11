import { ICategories } from '../../categories/interfaces/categories';

export interface IPlayer {
  readonly id: number;
  readonly email: string;
  readonly phone?: string;
  category?: ICategories;
  createdAt?: Date;
  updatedAt?: Date;
  rakingPosition?: string;
  raking?: string;
  name: string;
  playerPicture?: string;
  role?: 'ADMIN' | 'PLAYER';
}
