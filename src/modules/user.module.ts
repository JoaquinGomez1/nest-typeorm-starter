import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ONE_HOUR } from 'src/common/constants/time';
import { UserController } from 'src/controllers';
import { JwtStrategy } from 'src/services/jwt-strategy.service';
import { User } from '../entities/user.entity';
import { UserRepositoryService } from '../repositories/user-repository.service';
import { UserService } from '../services/user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: ONE_HOUR },
    }),
  ],
  controllers: [UserController],
  providers: [UserService, UserRepositoryService, JwtStrategy],
})
export class UserModule {}
