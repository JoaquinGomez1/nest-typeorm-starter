import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepositoryService } from 'src/repositories/user-repository.service';
import AppResponse from '../domain/models/response.model';
import UserLoginModel from '../domain/models/user-login.model';
import UserRegisterModel from '../domain/models/user-register.model';
import UserModel from '../domain/models/user.model';
import IUserService from '../domain/services/user-service';

@Injectable()
export class UserService implements IUserService {
  userRepository: UserRepositoryService;
  constructor(userRepository: UserRepositoryService) {
    this.userRepository = userRepository;
    console.log({ PP: Object.getOwnPropertyNames(userRepository) });
  }

  async login(model: UserLoginModel) {
    const response = new AppResponse<UserModel>();
    const user = await this.userRepository.getByEmail(model.email);
    if (!user) throw new NotFoundException('User does not exists');

    return response;
  }

  async register(user: UserRegisterModel) {
    const response = new AppResponse<UserModel>();
    const userData = await this.userRepository.getByEmail(user.email);

    if (!userData) throw new NotFoundException('User does not exists');

    const userModel = new UserModel();
    const mappedUser: UserModel = Object.assign(userModel, userData);
    const createdUser = await this.userRepository.insert(mappedUser);
    delete createdUser.password;

    response.data = createdUser;

    return response;
  }
}
