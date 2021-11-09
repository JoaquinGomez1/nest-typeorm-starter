import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export default class UserModel {
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  id?: number;

  @IsString()
  username!: string;

  @IsString()
  password?: string;

  @IsString()
  @IsEmail()
  email!: string;

  @IsBoolean()
  status?: boolean;

  @IsDate()
  createdAt: Date;

  @IsDate()
  lastLogin: Date;

  @IsDate()
  lastUpdate: Date;
}
