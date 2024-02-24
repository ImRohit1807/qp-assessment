import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Order } from './order.model';

@Entity()
export class GroceryItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  inventory: number;

  @ManyToMany(() => Order, { cascade: true })
  @JoinTable()
  orders: Order[];
}
