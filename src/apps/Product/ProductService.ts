/* eslint-disable no-useless-catch */
import { CustomError } from 'express-handler-errors';
import { Repository, getRepository } from 'typeorm';
import { server } from '../../config/config';
import { Product } from './Product.entity';

class ProductService {
  private productRepository!: Repository<Product>;

  constructor() {
    this.productRepository = getRepository(Product);
  }

  async list() {
    const response = await this.productRepository.find({
      relations: ['order'],
    });

    return response;
  }

  async create(data: Product, file: Express.Multer.File) {
    const { description, name } = data;

    const response = await this.productRepository.save({
      name,
      description,
      imageUrl: `http://localhost:${server.port}/ecommerce/files/${file.filename}`,
    });

    return response;
  }

  async index(id: string) {
    try {
      const product = await this.productRepository.findOne(id);

      if (!product)
        throw new CustomError({
          code: 'PRODUCT_NOT_FOUND',
          message: 'Produto não encontrado',
          status: 404,
        });

      return product;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string) {
    try {
      const productToBeDeleted = await this.productRepository.findOne(id);

      if (!productToBeDeleted)
        throw new CustomError({
          code: 'PRODUCT_NOT_FOUND',
          message: 'Produto não encontrado',
          status: 404,
        });

      return this.productRepository.delete(productToBeDeleted.id);
    } catch (error) {
      throw error;
    }
  }
}

export default new ProductService();
