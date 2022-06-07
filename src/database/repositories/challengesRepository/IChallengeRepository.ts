import { ChallengesEntity } from 'src/database/entities';
import { IRepository } from '../IRepository';

export type IChallengeRepository = IRepository<ChallengesEntity>;
