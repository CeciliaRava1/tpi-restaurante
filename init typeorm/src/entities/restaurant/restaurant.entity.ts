import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Menu } from '../menu/menu.entity';

class Location {
  @Column('float')
  lat: number;

  @Column('float')
  lng: number;
}

class Address {
  @Column()
  street: string;

  @Column()
  number: string;

  @Column()
  cityId: number;

  @Column(() => Location)
  location: Location;
}

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column(() => Address)
  address: Address;

  @Column()
  imageUrl: string;

  @OneToMany(() => Menu, menu => menu.restaurant)
  menuItems: Menu[];
}
