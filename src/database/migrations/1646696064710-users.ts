import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class users1646696064710 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            isPrimary: true,
            isGenerated: true,
            generatedType: 'STORED',
            type: 'integer',
          },
          {
            name: 'name',
            isNullable: false,
            type: 'varchar',
          },
          {
            name: 'role',
            isNullable: false,
            type: 'enum',
            enum: ['ADMIN', 'PLAYER'],
          },
          {
            name: 'email',
            isNullable: false,
            type: 'varchar',
          },
          {
            name: 'phone',
            type: 'varchar',
          },
          {
            name: 'rakingPosition',
            type: 'varchar',
          },
          {
            name: 'raking',
            type: 'varchar',
          },
          {
            name: 'playerPicture',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
