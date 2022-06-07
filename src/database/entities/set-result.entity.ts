import { ISetResults } from 'src/set-results/interfaces/ISetResults';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseModel } from './base.entity';

@Entity({
  name: 'set-result',
})
export class SetResultsEntity extends BaseModel implements ISetResults {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  challengerPoints: number;

  @Column()
  challengedPoints: number;

  @Column()
  matchId: number;
}
