import { Repository, getRepository } from 'typeorm';
import { User } from './User.entity';

class UserService {
  private userRepository!: Repository<User>;

  constructor() {
    this.userRepository = getRepository(User);
  }

  async create(data: User) {
    const response = await this.userRepository.save(data);
    return response;
  }
}

export default new UserService();
