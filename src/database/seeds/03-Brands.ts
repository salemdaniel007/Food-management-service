import { Knex, knex } from 'knex'
import { BrandsModel } from '../models/brands.model'

export async function seed(knex: Knex): Promise<any> {
    await BrandsModel.query(knex).insert([
        {
          name: 'Best Foods',
        },
        {
          name:
            'Lipton',
        },
        {
          name: 'Knorr',
        },
        {
          name:
            "Hellmann's_01",
        }
        , {
          name:
            "Hellmann's_02",
        },
        {
          name:
            "Hellmann's_03",
        },
        {
          name:
            "Hellmann's_04",
        },
        {
          name:
            "Hellmann's_05",
        },
        {
          name:
            "Hellmann's_06",
        },
        {
          name:
            "Hellmann's_07",
        },
        {
          name:
            "Hellmann's_08",
        },
        {
          name:
            "Hellmann's_09",
        }
      ]);
}
