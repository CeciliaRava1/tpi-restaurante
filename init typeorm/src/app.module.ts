import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { entities } from './entities';

import { RestaurantModule } from './restaurant/restaurant.module';
import { MenuModule } from './menu/menu.module';
import { FoodModule } from './food/food.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433, // puerto correcto según tu Docker
      username: 'postgres',
      password: 'mipassword', // cambiá si usás otra
      database: 'tpi', // base que ya creaste 
      synchronize: true, // solo para desarrollo
      entities,
    }),
    TypeOrmModule.forFeature(entities),
    RestaurantModule,
    MenuModule,
    FoodModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
