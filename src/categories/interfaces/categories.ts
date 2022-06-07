import { IChallenge } from '../../challenges/interfaces';
import { IPlayer } from '../../players/interfaces/player';

export interface IEvent {
  name: string;
  operation: string;
  value: number;
}

export interface ICategories {
  id: number;
  description: string;
  userId: number;
  challenges?: IChallenge;
  events?: IEvent[];
  user?: IPlayer;
}
