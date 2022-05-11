import { ICategories, IEvent } from 'src/categories/interfaces/categories';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryEntity } from './';

@Entity({
  name: 'events',
})
export class EventEntity implements IEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  operation: string;

  @Column()
  value: number;

  @Column()
  categoryId: number;

  @ManyToOne(() => CategoryEntity, (category) => category.events)
  category?: ICategories;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
