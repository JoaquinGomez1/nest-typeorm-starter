import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import UserLoginModel from 'src/domain/models/user-login.model';
import UserRegisterModel from 'src/domain/models/user-register.model';
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
    const appResponse = await this._userService.register(data);

    return appResponse;
  }
}
