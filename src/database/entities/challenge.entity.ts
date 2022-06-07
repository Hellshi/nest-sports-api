import { ICategories } from 'src/categories/interfaces/categories';
import { IMatch } from 'src/matches/interfaces/IMatch';
import { IPlayer } from 'src/players/interfaces/player';
import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import {
  IChallenge,
  TStatus,
  TStatusValues
} from '../../challenges/interfaces';
import { BaseModel, MatchesEntity } from './';
import { CategoryEntity } from './category.entity';
import { UserEntity } from './user.entity';

@Entity({
  name: 'challenges',
})
export class ChallengesEntity extends BaseModel implements IChallenge {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  challengedId: number;

  @Column()
  challengerId: number;

  @Column({
    type: 'enum',
    enum: TStatusValues,
  })
  status: TStatus;

  @Column()
  categoryId: number;

  @Column()
  matchId?: number;

  @OneToOne(() => MatchesEntity, (match) => match.challenge)
  match?: IMatch;

  @ManyToOne(() => CategoryEntity, (category) => category.challenges)
  category?: ICategories;

  @ManyToOne(() => UserEntity, (user) => user.challenges)
  challenged?: IPlayer;

  @ManyToOne(() => UserEntity, (user) => user.challenges)
  challenger?: IPlayer;
}
