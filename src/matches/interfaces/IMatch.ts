import { IChallenge } from '../../challenges/interfaces';

export interface IMatch {
  id: number;
  def: string;
  challengeId: number;
  challenge?: IChallenge;
  createdAt: Date;
  updatedAt: Date;
}
