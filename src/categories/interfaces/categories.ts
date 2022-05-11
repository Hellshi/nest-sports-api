import { IPlayer } from 'src/players/interfaces/player';

export interface IEvent {
  name: string;
  operation: string;
  value: number;
}

export interface ICategories {
  id: number;
  description: string;
  events?: IEvent[];
  players?: IPlayer;
}
