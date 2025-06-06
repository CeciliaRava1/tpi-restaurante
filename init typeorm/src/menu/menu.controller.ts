import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';
import { MenuService } from './menu.service';
import { Menu } from '../entities/menu/menu.entity';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  create(@Body() data: Partial<Menu>) {
    return this.menuService.create(data);
  }

  @Get()
  findAll() {
    return this.menuService.findAll();
  }

  @Get('/restaurant/:id')
  getByRestaurant(@Param('id') id: string) {
    return this.menuService.getByRestaurant(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<Menu>) {
    return this.menuService.update(+id, data);
  }

  @Patch(':id')
  partialUpdate(@Param('id') id: string, @Body() data: Partial<Menu>) {
    return this.menuService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuService.remove(+id);
  }

  
}

