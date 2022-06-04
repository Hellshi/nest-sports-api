import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';
import { ForeignKeyMetadata } from 'typeorm/metadata/ForeignKeyMetadata';

export class addChallengesTableRelations1654299040745
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'challenges',
      new TableForeignKey({
        columnNames: ['matchId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'matches',
      }),
    );

    await queryRunner.createForeignKey(
      'challenges',
      new TableForeignKey({
        columnNames: ['challengerId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
      }),
    );

    await queryRunner.createForeignKey(
      'challenges',
      new TableForeignKey({
        columnNames: ['categoryId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'categories',
      }),
    );

    await queryRunner.createForeignKey(
      'challenges',
      new TableForeignKey({
        columnNames: ['challengedId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('challenges');
    const matchFk = (table as any).foreignKeys.find(
      (fk: ForeignKeyMetadata) => fk.columnNames.indexOf('matchId') !== -1,
    );
    const challengedFk = (table as any).foreignKeys.find(
      (fk: ForeignKeyMetadata) => fk.columnNames.indexOf('challengedId') !== -1,
    );
    const challengerFk = (table as any).foreignKeys.find(
      (fk: ForeignKeyMetadata) => fk.columnNames.indexOf('challengerId') !== -1,
    );

    const categoriesFk = (table as any).foreignKeys.find(
      (fk: ForeignKeyMetadata) => fk.columnNames.indexOf('categoryId') !== -1,
    );

    if (matchFk) {
      await queryRunner.dropForeignKey('challenges', matchFk);
    }

    if (challengedFk) {
      await queryRunner.dropForeignKey('challenges', challengedFk);
    }

    if (challengerFk) {
      await queryRunner.dropForeignKey('challenges', challengerFk);
    }

    if (categoriesFk) {
      await queryRunner.dropForeignKey('challenges', categoriesFk);
    }
  }
}
