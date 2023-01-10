import { Knex, knex } from 'knex'

const tableName = 'addons_categories';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, t => {
    // this creates an "id" column that gets autoincremented
    t.increments();

    t.string('name').notNullable();

  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
