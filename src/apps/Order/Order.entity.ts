import {
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from '../Product/Product.entity';
import { User } from '../User/User.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id!: string;

  @OneToMany(() => Product, (product) => product.order)
  product!: Product;

  @OneToOne((type) => User, (user) => user.order, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  user!: User;
}
