// src/admin/admin.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GroceryItem } from 'src/grocery-item/grocery-item.model';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(GroceryItem)
    private readonly groceryItemRepository: Repository<GroceryItem>,
  ) {}

  async addItem(item: GroceryItem): Promise<GroceryItem> {
    return this.groceryItemRepository.save(item);
  }

  async viewItems(): Promise<GroceryItem[]> {
    return this.groceryItemRepository.find();
  }

  async updateItem(
    id: number,
    item: Partial<GroceryItem>,
  ): Promise<GroceryItem> {
    await this.groceryItemRepository.update(id, item);
    return this.groceryItemRepository.findOne({ where: { id: id } });
  }

  async removeItem(id: number): Promise<void> {
    await this.groceryItemRepository.delete(id);
  }

  async manageInventory(id: number, quantity: number): Promise<GroceryItem> {
    const item = await this.groceryItemRepository.findOne({
      where: { id: id },
    });
    item.inventory += quantity;
    return this.groceryItemRepository.save(item);
  }
}
