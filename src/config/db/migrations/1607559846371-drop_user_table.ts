import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class dropUserTable1607559846371 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
      })
    );
  }
}
