import { ICategories, IEvent } from 'src/categories/interfaces/categories';
import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseModel, CategoryEntity } from './';

@Entity({
  name: 'events',
})
export class EventEntity extends BaseModel implements IEvent {
  @Column()
  name: string;

  @Column()
  operation: string;

  @Column()
  value: number;

  @Column()
  categoryId: number;

  @ManyToMany(() => CategoryEntity, (category) => category.events)
  category?: ICategories;
}
