import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController } from './admin/admin.controller';
import { UserController } from './user/user.controller';
import { AdminService } from './admin/admin.service';
import { UserService } from './user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroceryItem } from './grocery-item/grocery-item.model';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { Order } from './grocery-item/order.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'interviewAssessment',
      entities: [GroceryItem, Order],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([GroceryItem, Order]),
    UserModule,
    AdminModule,
  ],
  controllers: [AppController, AdminController, UserController],
  providers: [AppService, AdminService, UserService],
})
export class AppModule {}
