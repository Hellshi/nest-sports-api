import { ICategories } from 'src/categories/interfaces/categories';
import { IPlayer } from 'src/players/interfaces/player';

export type TStatus = 'ACCOMPLISHED' | 'PENDING' | 'DENIED' | 'ACCEPTED';

export interface IChallenge {
  id: number;
  challengedId: number;
  challenged?: IPlayer;
  challengerId: number;
  challenger?: IPlayer;
  status: TStatus;
  categoryId: number;
  category?: ICategories;
  matchId: number;
  match?: any;
  createdAt: Date;
  updatedAt: Date;
}
