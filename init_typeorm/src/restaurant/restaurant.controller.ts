import { Controller, Get, Post, Put, Patch, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from '../entities/restaurant/restaurant.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @UseGuards(JwtAuthGuard)
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

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<Restaurant>) {
    return this.restaurantService.update(+id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  partialUpdate(@Param('id') id: string, @Body() data: Partial<Restaurant>) {
    return this.restaurantService.update(+id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restaurantService.remove(+id);
  }
}

