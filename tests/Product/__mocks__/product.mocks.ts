export const ListOfProducts = [
  {
    id: 1,
    name: 'Mouse',
    description: 'Logitech G403',
    user: {
      id: 1,
      name: 'Felipe Austríaco',
      email: 'felipe1180@hotmail.com.br',
      created_at: '2020-12-10T00:22:28.632Z',
      updated_at: '2020-12-10T00:22:28.632Z',
    },
  },
  {
    id: 1,
    name: 'Mouse',
    description: 'Logitech G403',
    user: {
      id: 1,
      name: 'Felipe Austríaco',
      email: 'felipe1180@hotmail.com.br',
      created_at: '2020-12-10T00:22:28.632Z',
      updated_at: '2020-12-10T00:22:28.632Z',
    },
  },
];

export const NewProduct = {
  name: 'Mouse',
  description: 'Logitech G403',
  user: 1,
};

export const NewProductBadRequest = {
  x: 1,
};

export const ProductValidationErrors = {
  errors: [
    { code: 'ValidationError', message: 'name é um campo obrigatório' },
    {
      code: 'ValidationError',
      message: 'description é um campo obrigatório',
    },
    { code: 'ValidationError', message: 'user é um campo obrigatório' },
  ],
};

export const Product = {
  name: 'Mouse',
  description: 'Logitech G403',
  user: 1,
};

export const ProductNotFound = {
  errors: [
    {
      code: 'PRODUCT_NOT_FOUND',
      message: 'Produto não encontrado',
      status: 404,
    },
  ],
};
