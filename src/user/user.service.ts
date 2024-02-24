// src/user/user.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderDto } from 'src/grocery-item/create-order.dto';
import { GroceryItem } from 'src/grocery-item/grocery-item.model';
import { Order } from 'src/grocery-item/order.model';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Order)
    private readonly userOrderRepository: Repository<Order>,
    @InjectRepository(GroceryItem)
    private readonly groceryItemRepository: Repository<GroceryItem>,
  ) {}

  async viewItems(): Promise<GroceryItem[]> {
    return this.groceryItemRepository.find();
  }

  async bookItems(createOrderDto: CreateOrderDto): Promise<Order> {
    const order = new Order();
    order.items = await Promise.all(
      createOrderDto.items.map(async (itemDto) => {
        const groceryItem = await this.groceryItemRepository.findOne({
          where: {
            id: itemDto.itemId,
          },
        });

        if (!groceryItem) {
          throw new NotFoundException(
            `Grocery item with ID ${itemDto.itemId} not found`,
          );
        }

        if (groceryItem.inventory < itemDto.quantity) {
          throw new NotFoundException(
            `Not enough inventory for item with ID ${itemDto.itemId}`,
          );
        }

        groceryItem.inventory -= itemDto.quantity;
        await this.groceryItemRepository.save(groceryItem);

        return groceryItem;
      }),
    );

    return this.userOrderRepository.save(order);
  }
}
