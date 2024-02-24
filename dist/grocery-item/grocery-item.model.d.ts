import { Order } from './order.model';
export declare class GroceryItem {
    id: number;
    name: string;
    price: number;
    inventory: number;
    orders: Order[];
}
