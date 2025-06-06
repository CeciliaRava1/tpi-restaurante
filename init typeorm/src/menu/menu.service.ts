import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from '../entities/menu/menu.entity';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private menuRepository: Repository<Menu>,
  ) {}

  create(data: Partial<Menu>) {
    const newItem = this.menuRepository.create(data);
    return this.menuRepository.save(newItem);
  }

  findAll() {
    return this.menuRepository.find({ relations: ['foodItems'] });
  }

  findOne(id: number) {
    return this.menuRepository.findOne({ where: { id }, relations: ['foodItems'] });
  }

  async update(id: number, data: Partial<Menu>) {
    await this.menuRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.menuRepository.delete(id);
    return { message: 'deleted' };
  }

  async getByRestaurant(restaurantId: number) {
    return this.menuRepository.find({
      where: {
        restaurant: { id: restaurantId },
      },
      relations: ['restaurant', 'foodItems'],
    });
  }
}
