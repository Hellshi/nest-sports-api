import { ICategories } from 'src/categories/interfaces/categories';
import { IPlayer } from 'src/players/interfaces/player';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  // eslint-disable-next-line prettier/prettier
  UpdateDateColumn
} from 'typeorm';
import { CategoryEntity } from './';

@Entity({
  name: 'users',
})
export class UserEntity extends BaseEntity implements IPlayer {
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

  @Column()
  rakingPosition?: string;

  @Column()
  raking?: string;

  @OneToOne(() => CategoryEntity, (category) => category.player)
  category?: ICategories;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
  })
  updatedAt: Date;

  @Column({
    type: 'enum',
    enum: ['ADMIN', 'PLAYER'],
    default: 'PLAYER',
  })
  role?: 'ADMIN' | 'PLAYER';
}
