import { IsEmail, IsString } from 'class-validator';

export default class UserRegisterModel {
  @IsString()
  username!: string;

  @IsString()
  password?: string;

  @IsString()
  @IsEmail()
  email!: string;
}
