import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';
import { FoodService } from './food.service';
import { Food } from '../entities/food/food.entity';

@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Post()
  create(@Body() data: Partial<Food>) {
    return this.foodService.create(data);
  }

  @Get()
  findAll() {
    return this.foodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<Food>) {
    return this.foodService.update(+id, data);
  }

  @Patch(':id')
  partialUpdate(@Param('id') id: string, @Body() data: Partial<Food>) {
    return this.foodService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foodService.remove(+id);
  }
}
