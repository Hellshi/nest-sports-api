import { IPlayer } from 'src/players/interfaces/player';
import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  OneToOne,
  // eslint-disable-next-line prettier/prettier
  PrimaryGeneratedColumn
} from 'typeorm';
import { ICategories, IEvent } from '../../categories/interfaces/categories';
import { EventEntity, UserEntity } from './';

@Entity({
  name: 'categories',
})
export class CategoryEntity implements ICategories {
  @PrimaryGeneratedColumn()
  id: number;

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
  players: IPlayer;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
