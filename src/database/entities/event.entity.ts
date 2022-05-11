import { IEvent } from 'src/categories/interfaces/categories';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Event implements IEvent {
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

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
