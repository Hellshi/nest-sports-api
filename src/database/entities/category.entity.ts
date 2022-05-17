import { IPlayer } from 'src/players/interfaces/player';
import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  OneToOne
} from 'typeorm';
import { ICategories, IEvent } from '../../categories/interfaces/categories';
import { BaseModel, EventEntity, UserEntity } from './';

@Entity({
  name: 'categories',
})
export class CategoryEntity extends BaseModel implements ICategories {
  @Column()
  description: string;

  @OneToMany(() => EventEntity, (events) => events.category, { cascade: true })
  @JoinTable({
    name: 'events',
    joinColumn: {
      name: 'categoryId',
      referencedColumnName: 'id',
    },
  })
  events?: IEvent[];

  @OneToOne(() => UserEntity, (user) => user.category)
  player?: IPlayer;

  @Column()
  playerId: number;
}
