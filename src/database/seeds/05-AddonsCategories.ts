import { Knex, knex } from 'knex';
import { AddonsCategoriesModel } from '../models/addons-categories.model';

export async function seed(knex: Knex): Promise<any> {
  await AddonsCategoriesModel.query(knex).insert([
    {
      name: 'cat1',
    },
    {
      name: 'cat2',
    },
    {
      name: 'cat3',
    },
    {
      name: 'cat4',
    },
  ]);
}
