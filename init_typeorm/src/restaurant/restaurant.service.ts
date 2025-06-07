import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Restaurant } from '../entities/restaurant/restaurant.entity';


@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private restaurantRepository: Repository<Restaurant>,
  ) {}

  create(data: Partial<Restaurant>) {
    const newItem = this.restaurantRepository.create(data);
    return this.restaurantRepository.save(newItem);
  }

  findAll() {
    return this.restaurantRepository.find();
  }

  findOne(id: number) {
    return this.restaurantRepository.findOne({ where: { id } });
  }

  update(id: number, data: Partial<Restaurant>) {
    return this.restaurantRepository.update(id, data);
  }

  async remove(id: number) {
    await this.restaurantRepository.delete(id);
    return { message: 'deleted' };
  }
}
