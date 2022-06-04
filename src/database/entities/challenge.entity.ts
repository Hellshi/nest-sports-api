import { IChallenge, TStatus } from 'src/challenges/interfaces';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseModel } from './base.entity';

@Entity({
  name: 'challenges',
})
export class Challenges extends BaseModel implements IChallenge {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  challengedId: number;

  @Column()
  challengerId: number;

  @Column({
    type: 'enum',
  })
  status: TStatus;

  @Column()
  categoryId: number;

  @Column()
  matchId: number;
}
