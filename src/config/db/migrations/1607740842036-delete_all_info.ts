import { MigrationInterface, QueryRunner } from 'typeorm';

export class deleteAllInfo1607740842036 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropDatabase('postgres');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createDatabase('postgres');
  }
}
