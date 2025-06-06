import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from '../entities/restaurant/restaurant.entity';

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Post()
  create(@Body() data: Partial<Restaurant>) {
    return this.restaurantService.create(data);
  }

  @Get()
  findAll() {
    return this.restaurantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restaurantService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<Restaurant>) {
    return this.restaurantService.update(+id, data);
  }

  @Patch(':id')
  partialUpdate(@Param('id') id: string, @Body() data: Partial<Restaurant>) {
    return this.restaurantService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restaurantService.remove(+id);
  }
}
