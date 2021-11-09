import { Body, Controller, Get, Post } from '@nestjs/common';
import UserLoginModel from 'src/domain/models/user-login.model';
import UserRegisterModel from 'src/domain/models/user-register.model';
import UserModel from 'src/domain/models/user.model';
import { UserService } from 'src/services/user.service';

@Controller('users')
export class UserController {
  private readonly _userService: UserService;
  constructor(userService: UserService) {
    this._userService = userService;
  }

  @Get()
  test() {
    return 'Test';
  }

  @Post('/login')
  async login(@Body() data: UserLoginModel) {
    return this._userService.login(data);
  }

  @Post('/register')
  async register(@Body() data: UserRegisterModel) {
    return this._userService.register(data);
  }
}
