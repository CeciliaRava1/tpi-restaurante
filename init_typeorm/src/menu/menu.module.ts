import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from '../entities/menu/menu.entity';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Menu])], // <- esto permite inyectar MenuRepository
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}
