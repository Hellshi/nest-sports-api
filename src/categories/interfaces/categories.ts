import { IPlayer } from 'src/players/interfaces/player';

export interface IEvent {
  name: string;
  operation: string;
  value: number;
}

export interface ICategories {
  id: number;
  description: string;
  userId: number;
  events?: IEvent[];
  user?: IPlayer;
}
