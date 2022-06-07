import { ICategories } from 'src/categories/interfaces/categories';
import { IPlayer } from 'src/players/interfaces/player';

export const TStatusValues = [
  'ACCOMPLISHED',
  'PENDING',
  'DENIED',
  'ACCEPTED',
] as const;

export type TStatus = typeof TStatusValues[number];

export interface IChallenge {
  id: number;
  challengedId: number;
  challenged?: IPlayer;
  challengerId: number;
  challenger?: IPlayer;
  status: TStatus;
  categoryId: number;
  category?: ICategories;
  matchId?: number;
  match?: any;
  createdAt: Date;
  updatedAt: Date;
}
