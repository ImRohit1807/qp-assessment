import { Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { GroceryItem } from './grocery-item.model';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => GroceryItem, { cascade: true })
  @JoinTable()
  items: GroceryItem[];
}
