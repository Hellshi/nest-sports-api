import { IPlayer } from 'src/players/interfaces/player';
import { Column, Entity, JoinTable, ManyToOne, OneToMany } from 'typeorm';
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

  @ManyToOne(() => UserEntity, (user) => user.category)
  user?: IPlayer;

  @Column()
  userId: number;
}
