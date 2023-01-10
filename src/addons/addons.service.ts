import { Inject, Injectable } from '@nestjs/common';
import { AddonsModel } from '../database/models/addons.model';
import { ModelClass, transaction } from 'objection';

@Injectable()
export class AddonsService {
  constructor(@Inject('AddonsModel') private modelClass: ModelClass<AddonsModel>) {}

  findAllAddons() {
    return this.modelClass.query();
  }

  findOneAddon(id: number, brandId: number) {
    return this.modelClass.query().findById(id).where('brandId', brandId);
  }

  createAddons(props: Partial<AddonsModel>) {
    return this.modelClass
      .query()
      .insert(props)
      .returning('*');
  }

  updateAddon(id: number, props: Partial<AddonsModel>) {
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
