import { Global, Module } from '@nestjs/common';
import { AddonsCategoriesController } from './addons_categories.controller';
import { AddonsCategoriesService } from './addons_categories.service';

@Global()
@Module({
  controllers: [AddonsCategoriesController],
  providers: [AddonsCategoriesService],
  exports: [AddonsCategoriesService],
})
export class AddonCategoriesModule {
}
