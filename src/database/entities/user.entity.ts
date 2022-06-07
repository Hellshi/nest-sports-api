import { ICategories } from 'src/categories/interfaces/categories';
import { IChallenge } from 'src/challenges/interfaces';
import { IPlayer } from 'src/players/interfaces/player';
import { Column, Entity, OneToMany } from 'typeorm';
import { BaseModel, CategoryEntity } from './';
import { ChallengesEntity } from './challenge.entity';

@Entity({
  name: 'users',
})
export class UserEntity extends BaseModel implements IPlayer {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  playerPicture?: string;

  @Column()
  phone: string;

  @Column()
  rakingPosition?: string;

  @Column()
  raking?: string;

  @OneToMany(() => CategoryEntity, (category) => category.user)
  category?: ICategories;

  @OneToMany(() => ChallengesEntity, (challenge) => challenge.challenger)
  challenges?: IChallenge;

  @OneToMany(() => ChallengesEntity, (challenge) => challenge.challenged)
  challenged?: IChallenge;

  @Column({
    type: 'enum',
    enum: ['ADMIN', 'PLAYER'],
    default: 'PLAYER',
  })
  role?: 'ADMIN' | 'PLAYER';
}
