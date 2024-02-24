import { GroceryItem } from 'src/grocery-item/grocery-item.model';
import { Repository } from 'typeorm';
export declare class AdminService {
    private readonly groceryItemRepository;
    constructor(groceryItemRepository: Repository<GroceryItem>);
    addItem(item: GroceryItem): Promise<GroceryItem>;
    viewItems(): Promise<GroceryItem[]>;
    updateItem(id: number, item: Partial<GroceryItem>): Promise<GroceryItem>;
    removeItem(id: number): Promise<void>;
    manageInventory(id: number, quantity: number): Promise<GroceryItem>;
}
