import { ICategories } from 'src/categories/interfaces/categories';
import { IPlayer } from 'src/players/interfaces/player';
import { Column, Entity, OneToOne } from 'typeorm';
import { BaseModel, CategoryEntity } from './';

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

  @OneToOne(() => CategoryEntity, (category) => category.player)
  category?: ICategories;

  @Column({
    type: 'enum',
    enum: ['ADMIN', 'PLAYER'],
    default: 'PLAYER',
  })
  role?: 'ADMIN' | 'PLAYER';
}
