import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class challenges1654216865477 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'challenges',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'challengedId',
            type: 'integer',
          },
          {
            name: 'challengerId',
            type: 'integer',
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['ACCOMPLISHED', 'PENDING', 'DENIED', 'ACCEPTED'],
            default: '"PENDING"',
          },
          {
            name: 'categoryId',
            type: 'integer',
          },
          {
            name: 'matchId',
            type: 'integer',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('challenges');
  }
}
