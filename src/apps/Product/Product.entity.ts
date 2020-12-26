import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from '../Order/Order.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column({
    nullable: true,
  })
  imageUrl!: string;

  @ManyToOne(() => Order, (order) => order.products)
  order!: Order;
}
