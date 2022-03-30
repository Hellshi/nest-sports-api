import { IPlayer } from 'src/players/interfaces/player';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  // eslint-disable-next-line prettier/prettier
  UpdateDateColumn
} from 'typeorm';

@Entity({
  name: 'users',
})
export class userEntity extends BaseEntity implements IPlayer {
  @PrimaryGeneratedColumn()
  id: number;

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

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
  })
  updatedAt: Date;

  @Column({
    default: 'PLAYER',
  })
  role?: 'ADMIN' | 'PLAYER';
}
