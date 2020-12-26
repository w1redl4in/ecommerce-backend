import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from '../Product/Product.entity';
import { User } from '../User/User.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @OneToMany(() => Product, (product) => product.order)
  products!: Product[];

  @ManyToOne((type) => User, (user) => user.order, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  user!: User;
}
