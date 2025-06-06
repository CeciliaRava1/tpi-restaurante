import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Menu } from '../menu/menu.entity';

@Entity()
export class Food {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column()
  imageUrl: string;

  @ManyToOne(() => Menu, menu => menu.foodItems)
  menu: Menu;
}

