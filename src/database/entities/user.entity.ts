import { IPlayer } from 'src/players/interfaces/player';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User implements IPlayer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  playerPicture: string;

  @Column()
  phone: string;

  @Column()
  rakingPosition: string;

  @Column()
  raking: string;
}
