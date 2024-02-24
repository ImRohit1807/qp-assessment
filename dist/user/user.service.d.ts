import { CreateOrderDto } from 'src/grocery-item/create-order.dto';
import { GroceryItem } from 'src/grocery-item/grocery-item.model';
import { Order } from 'src/grocery-item/order.model';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly userOrderRepository;
    private readonly groceryItemRepository;
    constructor(userOrderRepository: Repository<Order>, groceryItemRepository: Repository<GroceryItem>);
    viewItems(): Promise<GroceryItem[]>;
    bookItems(createOrderDto: CreateOrderDto): Promise<Order>;
}
