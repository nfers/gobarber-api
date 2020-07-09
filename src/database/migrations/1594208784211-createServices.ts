import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class createServices1594208784211 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'services',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'service',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'price',
            type: 'numeric(5,2)',
            isNullable: true,
          },
          {
            name: 'isActive',
            type: 'boolean',
            isNullable: false,
            default: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('services');
  }
}
