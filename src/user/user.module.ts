import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { GroceryItem } from 'src/grocery-item/grocery-item.model';
import { Order } from 'src/grocery-item/order.model';

@Module({
  imports: [TypeOrmModule.forFeature([GroceryItem, Order])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
