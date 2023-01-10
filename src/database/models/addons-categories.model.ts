import { BaseModel } from './base.model';

export class AddonsCategoriesModel extends BaseModel {
  static tableName = 'addons';

  name: string;
}