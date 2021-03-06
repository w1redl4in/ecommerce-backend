import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class dropUsersTable1607713008952 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
      })
    );
  }
}
