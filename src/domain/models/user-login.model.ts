import { IsString } from 'class-validator';

export default class UserLoginModel {
  @IsString()
  password?: string;

  @IsString()
  email!: string;
}
