import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';
import { ForeignKeyMetadata } from 'typeorm/metadata/ForeignKeyMetadata';

export class addSetResultsTableRelations1654301399557
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'set_results',
      new TableForeignKey({
        columnNames: ['matchId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'matches',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('set_results');
    const matchFk = (table as any).foreignKeys.find(
      (fk: ForeignKeyMetadata) => fk.columnNames.indexOf('matchId') !== -1,
    );

    if (matchFk) {
      await queryRunner.dropForeignKey('set_results', matchFk);
    }
  }
}
