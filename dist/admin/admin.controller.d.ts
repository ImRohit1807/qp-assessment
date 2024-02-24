import { AdminService } from './admin.service';
import { GroceryItem } from 'src/grocery-item/grocery-item.model';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    addItem(item: GroceryItem): Promise<GroceryItem>;
    viewItems(): Promise<GroceryItem[]>;
    updateItem(id: number, item: Partial<GroceryItem>): Promise<GroceryItem>;
    removeItem(id: number): Promise<void>;
    manageInventory(id: number, data: {
        quantity: number;
    }): Promise<GroceryItem>;
}
