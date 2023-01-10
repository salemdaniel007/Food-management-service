import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    UseGuards,
    Post,
    Put,
    Req,
  } from '@nestjs/common';
  import { JwtAuthGuard } from '../auth/jwt-auth.guard';
  import { AddonsCategoriesService } from './addons_categories.service';
  import { AddonsModel } from '../database/models/addons.model';
  import { BrandsModel } from '../database/models/brands.model';
  import { RoleGuard } from 'src/auth/role.guard';
  import { Roles } from '../auth/roles.decorator';
  
  @Controller('/brands/:brandId/addons')
  export class AddonsCategoriesController {
    constructor(private addonsService: AddonsCategoriesService) {}
  
    @Roles('ADMIN')
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Get()
    async findAll() {
      return this.addonsService.findAllAddons();
    }
  
    @Roles('ADMIN')
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Get(':id')
    async findOne(@Req() req, @Param('id', new ParseIntPipe()) id: number) {
      return this.addonsService.findOneAddon(id, req.params.brandId);
    }
  
    @Roles('ADMIN')
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Post()
    async create(@Req() req, @Body() props: Partial<AddonsModel>) {
      props.brandId = req.params.brandId;
      console.log(props);
      return this.addonsService.createAddons(props);
    }
  
    @Roles('ADMIN')
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Delete(':id')
    async delete(@Req() req, @Param('id', new ParseIntPipe()) id: number) {
      return this.addonsService.deleteAddon(id, req.params.brandId);
    }
  
    @Roles('ADMIN')
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Put(':id')
    async update(
      @Req() req,
      @Param('id', new ParseIntPipe()) id: number,
      @Body() props: Partial<AddonsModel>,
    ) {
      props.brandId = req.params.brandId;
      return this.addonsService.updateAddon(id, props);
    }
  }
  