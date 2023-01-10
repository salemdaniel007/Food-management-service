import { Knex, knex } from 'knex'
import { BrandAddonModel } from '../models/brand-addon.model'

export async function seed(knex: Knex): Promise<any> {
    await BrandAddonModel.query(knex).insert([
       
      ]);
}
