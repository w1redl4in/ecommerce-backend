export const createUser = {
  id: 1,
  name: 'Felipe Austríaco',
  email: 'felipe1180@hotmail.com',
};

export const UserBadRequest400 = {
  errors: [
    { code: 'ValidationError', message: 'name é um campo obrigatório' },
    {
      code: 'ValidationError',
      message: 'email é um campo obrigatório',
    },
  ],
};

export const ListOfUsers = [
  {
    id: 1,
    name: 'Felipe Austríaco',
    email: 'felipe1180@hotmail.com',
  },
  {
    id: 2,
    name: 'Felipe Austríaco',
    email: 'felipe1180@hotmail.com.br',
  },
];

export const UserAlreadyExists = {
  errors: [
    {
      code: 'USER_ALREADY_EXISTS',
      message: 'Usuário já existe',
      status: 400,
    },
  ],
};
