// src/admin/admin.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { GroceryItem } from 'src/grocery-item/grocery-item.model';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('add-item')
  addItem(@Body() item: GroceryItem): Promise<GroceryItem> {
    return this.adminService.addItem(item);
  }

  @Get('view-items')
  viewItems(): Promise<GroceryItem[]> {
    return this.adminService.viewItems();
  }

  @Put('update-item/:id')
  updateItem(
    @Param('id') id: number,
    @Body() item: Partial<GroceryItem>,
  ): Promise<GroceryItem> {
    return this.adminService.updateItem(id, item);
  }

  @Delete('remove-item/:id')
  removeItem(@Param('id') id: number): Promise<void> {
    return this.adminService.removeItem(id);
  }

  @Put('manage-inventory/:id')
  manageInventory(
    @Param('id') id: number,
    @Body() data: { quantity: number },
  ): Promise<GroceryItem> {
    return this.adminService.manageInventory(id, data.quantity);
  }
}
