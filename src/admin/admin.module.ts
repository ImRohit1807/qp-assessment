import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { GroceryItem } from 'src/grocery-item/grocery-item.model';

@Module({
  imports: [TypeOrmModule.forFeature([GroceryItem])],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
