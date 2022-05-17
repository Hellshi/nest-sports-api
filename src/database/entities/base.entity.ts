import { BaseEntity, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export abstract class BaseModel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @CreateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;
}
