/* eslint-disable camelcase */
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Order } from '../Order/Order.entity';
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column({
    unique: true,
  })
  email!: string;

  @Column({
    nullable: true,
  })
  password?: string;

  @Column({
    nullable: true,
    default: true,
  })
  firstLogin: boolean;

  @Column({
    nullable: true,
    default: '',
  })
  imageUrl: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @OneToMany((type) => Order, (order) => order.user, {
    onDelete: 'CASCADE',
  })
  order!: Order;
}
