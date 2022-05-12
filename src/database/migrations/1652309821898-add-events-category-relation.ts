import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey
} from 'typeorm';
import { ForeignKeyMetadata } from 'typeorm/metadata/ForeignKeyMetadata';

export class addEventsCategoryRelation1652309821898
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'events',
      new TableColumn({
        name: 'categoryId',
        type: 'int',
        isNullable: false,
      }),
    );
    await queryRunner.createForeignKey(
      'events',
      new TableForeignKey({
        columnNames: ['categoryId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'categories',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const eventsTable = await queryRunner.getTable('events');
    const foreignKey = (eventsTable as any).foreignKeys.find(
      (fk: ForeignKeyMetadata) => fk.columnNames.indexOf('categoryId') !== -1,
    );
    if (foreignKey) {
      await queryRunner.dropForeignKey('events', foreignKey);
    }
    await queryRunner.dropColumn('events', 'categoryId');
  }
}
