import { CustomError } from 'express-handler-errors';
import { getRepository, Repository } from 'typeorm';
import { Order } from './Order.entity';

class OrderService {
  private orderRepository!: Repository<Order>;

  constructor() {
    this.orderRepository = getRepository(Order);
  }

  async create(order: Order) {
    try {
      const newOrder = await this.orderRepository.save(order);
      return newOrder;
    } catch (error) {
      throw new CustomError({
        code: 'ORDERS_ERROR',
        message: 'Houve um problema na criação do pedido',
        status: 500,
      });
    }
  }

  async list() {
    try {
      const orders = await this.orderRepository.find({
        relations: ['product'],
      });
      return orders;
    } catch (error) {
      throw new CustomError({
        code: 'ORDERS_LIST_ERROR',
        message: 'Houve um problema na listagem de pedidos',
        status: 500,
      });
    }
  }

  async index(id: string) {
    try {
      const order = await this.orderRepository.findOne(id, {
        relations: ['products', 'user'],
      });

      if (!order)
        throw new CustomError({
          code: 'ORDER_NOT_FOUND',
          message: 'Pedido não encontrado',
          status: 404,
        });

      return order;
    } catch (error) {
      console.log('pedido', error);
      throw new CustomError({
        code: 'INDEX_ORDER_ERROR',
        message: 'Houve um problema na busca do pedido',
        status: 500,
      });
    }
  }
}

export default new OrderService();
