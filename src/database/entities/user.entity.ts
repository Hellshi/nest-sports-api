import { IPlayer } from 'src/players/interfaces/player';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class userEntity implements IPlayer {
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

  @Column({
    default: undefined,
  })
  rakingPosition?: string | undefined;

  @Column()
  raking?: string;

  @Column({
    default: 'PLAYER',
  })
  role?: 'ADMIN' | 'PLAYER';
}
