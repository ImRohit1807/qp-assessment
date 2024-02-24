// src/user/user.controller.ts
import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { GroceryItem } from 'src/grocery-item/grocery-item.model';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('view-items')
  viewItems(): Promise<GroceryItem[]> {
    return this.userService.viewItems();
  }

  //   @Post('book-items')
  //   bookItems(
  //     @Body() items: { itemId: number; quantity: number }[],
  //   ): Promise<void> {
  //     return this.userService.bookItems(items);
  //   }
}
