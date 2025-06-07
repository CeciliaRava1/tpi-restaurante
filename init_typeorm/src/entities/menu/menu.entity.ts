import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Restaurant } from '../restaurant/restaurant.entity';
import { Food } from '../food/food.entity';

@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('float')
  price: number;

  @Column()
  imageUrl: string;

  @ManyToOne(() => Restaurant, restaurant => restaurant.menuItems, { eager: false })
  restaurant: Restaurant;

  @OneToMany(() => Food, food => food.menu, { cascade: true })
  foodItems: Food[];
}
