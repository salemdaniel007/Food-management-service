import { Knex, knex } from 'knex';

const tableName = 'addons';

export async function up(knex: Knex) {
  return knex.schema.table(tableName, table => {
    table.string('brandId', 128);
  })
}

export async function down(knex: Knex) {
  return knex.schema.table(tableName, table => {
    table.dropColumn('brandId');
  })
}
