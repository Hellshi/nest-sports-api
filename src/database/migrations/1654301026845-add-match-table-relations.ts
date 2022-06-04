import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';
import { ForeignKeyMetadata } from 'typeorm/metadata/ForeignKeyMetadata';

export class addMatchTableRelations1654301026845 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'matches',
      new TableForeignKey({
        columnNames: ['challengeId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'challenges',
      }),
    );

    await queryRunner.createForeignKey(
      'matches',
      new TableForeignKey({
        columnNames: ['def'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('matches');
    const challengeFk = (table as any).foreignKeys.find(
      (fk: ForeignKeyMetadata) => fk.columnNames.indexOf('challengeId') !== -1,
    );

    const userFk = (table as any).foreignKeys.find(
      (fk: ForeignKeyMetadata) => fk.columnNames.indexOf('def') !== -1,
    );

    if (challengeFk) {
      await queryRunner.dropForeignKey('matches', challengeFk);
    }

    if (challengeFk) {
      await queryRunner.dropForeignKey('matches', userFk);
    }
  }
}
