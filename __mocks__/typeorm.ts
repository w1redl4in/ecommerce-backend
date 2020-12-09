import { Repository } from 'typeorm';

import { mock } from 'jest-mock-extended';

export const repositoryMock = mock<Repository<any>>();

// repositoryMock.find.mockName('find');
export const getConnection = jest.fn().mockReturnValue({
  getRepository: () => repositoryMock,
});

export class BaseEntity {}
export const ObjectIdColumn = () => {};
export const Column = () => {};
export const Index = () => {};
export const CreateDateColumn = () => {};
export const UpdateDateColumn = () => {};
export const Entity = () => {};
export const PrimaryGeneratedColumn = () => {};
export const getRepository = () => repositoryMock;
export const save = jest.fn();
