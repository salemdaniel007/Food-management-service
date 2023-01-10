import { BaseModel } from './base.model';
import { Model } from 'objection';

export class BrandsModel extends BaseModel {
  static tableName = 'brands';

  name: string;
  static relationMappings = {
    addons: {
      modelClass: `${__dirname}/addons.model`,
      relation: Model.ManyToManyRelation,
      join: {
        from: 'brands.id',
        through: {
          from: 'brand_addons.brandId',
          to: 'brand_addons.addonId'
        },
        to: 'addons.id'
      }
    }
  };
}