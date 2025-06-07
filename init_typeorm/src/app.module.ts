import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { entities } from './entities';

import { RestaurantModule } from './restaurant/restaurant.module';
import { MenuModule } from './menu/menu.module';
import { FoodModule } from './food/food.module';

import { AuthModule } from './auth/auth.module';
import { AuthMiddleware } from './common/middleware/auth.middleware';

import typeOrmConfig from './typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature(entities),
    RestaurantModule,
    MenuModule,
    FoodModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes('protegido'); // Aquí decides qué rutas protege el middleware
  }
}

