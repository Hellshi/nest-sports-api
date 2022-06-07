import { IChallenge } from 'src/challenges/interfaces';
import { IMatch } from 'src/matches/interfaces/IMatch';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseModel } from './base.entity';
import { ChallengesEntity } from './challenge.entity';

@Entity({
  name: 'match',
})
export class MatchesEntity extends BaseModel implements IMatch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  def: string;

  @Column()
  challengeId: number;

  @OneToOne(() => ChallengesEntity, (challenge) => challenge.match)
  challenge?: IChallenge;
}
