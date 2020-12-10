import request from 'supertest';
import {
  ListOfProducts,
  NewProduct,
  NewProductBadRequest,
  Product,
  ProductNotFound,
  ProductValidationErrors,
} from './__mocks__/product.mocks';

jest.mock('typeorm');

const app = require('../../src/app').default;

describe('Products', () => {
  const repository = require('typeorm').getRepository();

  describe('List all products', () => {
    test('it should list all products', async () => {
      repository.find.mockResolvedValue(ListOfProducts);

      await request(app).get('/ecommerce/products').expect(200, ListOfProducts);
    });

    test('it should return a empty list', async () => {
      repository.find.mockResolvedValue([]);

      await request(app).get('/ecommerce/products').expect(200, []);
    });
  });

  describe('Create a product', () => {
    test('it should create a new product', async () => {
      repository.save.mockResolvedValue(NewProduct);

      await request(app)
        .post('/ecommerce/products')
        .send(NewProduct)
        .expect(200, NewProduct);
    });

    test('it shouldnt create a new product with invalid payload', async () => {
      repository.save.mockResolvedValue(NewProductBadRequest);

      await request(app)
        .post('/ecommerce/products')
        .send(NewProductBadRequest)
        .expect(400, ProductValidationErrors);
    });
  });

  describe('Find a product by id', () => {
    test('it should return a product', async () => {
      repository.findOne.mockResolvedValue(Product);

      await request(app).get(`/ecommerce/products/1`).expect(200, Product);
    });

    test('it shouldnt return a product when id is invalid', async () => {
      repository.findOne.mockResolvedValue(null);

      await request(app)
        .get(`/ecommerce/products/2`)
        .expect(404, ProductNotFound);
    });
  });

  describe('Delete a product by id', () => {
    test('it should return a status code 204', async () => {
      repository.findOne.mockResolvedValue({});
      repository.delete.mockResolvedValue({});

      await request(app).delete(`/ecommerce/products/1`).expect(204);
    });

    test('it shouldnt delete a product when id is invalid', async () => {
      repository.findOne.mockResolvedValue(null);
      repository.delete.mockResolvedValue(null);

      await request(app)
        .get(`/ecommerce/products/2`)
        .expect(404, ProductNotFound);
    });
  });
});
