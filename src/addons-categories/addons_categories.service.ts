import { Inject, Injectable } from '@nestjs/common';
import { AddonsCategoriesModel } from '../database/models/addons-categories.model';
import { ModelClass, transaction } from 'objection';

@Injectable()
export class AddonsCategoriesService {
  constructor(@Inject('AddonsCategoriesModel') private modelClass: ModelClass<AddonsCategoriesModel>) {}

  findAllAddons() {
    return this.modelClass.query();
  }

  findOneAddon(id: number, brandId: number) {
    return this.modelClass.query().findById(id).where('brandId', brandId);
  }

  createAddons(props: Partial<AddonsCategoriesModel>) {
    return this.modelClass
      .query()
      .insert(props)
      .returning('*');
  }

  updateAddon(id: number, props: Partial<AddonsCategoriesModel>) {
    return this.modelClass
      .query()
      .patch(props)
      .where({ id })
      .returning('*')
      .first();
  }

  deleteAddon(id: number, brandId: number) {
    return transaction(this.modelClass, async (_, trx) => {

      return this.modelClass
        .query()
        .delete()
        .where({ id })
        .where('brandId', brandId)
        .returning('*')
        .first()
        .transacting(trx);
    });
  }
}
