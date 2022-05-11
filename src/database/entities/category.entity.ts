import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ICategories } from '../../categories/interfaces/categories';

@Entity()
export class Category implements ICategories {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  /* @Column()
  events: IEvent[];
 */
  /*  @Column()
  players: IPlayer; */

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
