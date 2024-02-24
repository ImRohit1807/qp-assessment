import { UserService } from './user.service';
import { GroceryItem } from 'src/grocery-item/grocery-item.model';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    viewItems(): Promise<GroceryItem[]>;
}
