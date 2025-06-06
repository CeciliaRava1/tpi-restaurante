import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Food } from '../entities/food/food.entity';

@Injectable()
export class FoodService {
  constructor(
    @InjectRepository(Food)
    private foodRepository: Repository<Food>,
  ) {}

  create(data: Partial<Food>) {
    const newItem = this.foodRepository.create(data);
    return this.foodRepository.save(newItem);
  }

  findAll() {
    return this.foodRepository.find({ relations: ['menu'] });
  }

  findOne(id: number) {
    return this.foodRepository.findOne({ where: { id }, relations: ['menu'] });
  }

  async update(id: number, data: Partial<Food>) {
    await this.foodRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.foodRepository.delete(id);
    return { message: 'deleted' };
  }
}

