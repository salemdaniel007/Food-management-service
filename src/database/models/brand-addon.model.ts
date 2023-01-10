import { BaseModel } from './base.model';

export class BrandAddonModel extends BaseModel {
  static tableName = 'brand_addons';

  brandId: number;
  addonId: number;
}