import { BaseEntity, CreateDateColumn } from 'typeorm';

export abstract class BaseModel extends BaseEntity {
  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @CreateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;
}
