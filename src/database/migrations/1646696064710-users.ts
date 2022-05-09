import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class users1646696064710 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
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
            default: '"PLAYER"',
          },
          {
            name: 'email',
            isNullable: false,
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'phone',
            type: 'varchar',
            isNullable: true,
            isUnique: true,
          },
          {
            name: 'rakingPosition',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'raking',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'playerPicture',
            type: 'varchar',
            isNullable: true,
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
    await queryRunner.dropTable('users');
  }
}
