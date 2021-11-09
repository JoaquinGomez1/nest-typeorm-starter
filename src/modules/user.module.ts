import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from 'src/controllers';
import { User } from '../entities/user.entity';
import { UserRepositoryService } from '../repositories/user-repository.service';
import { UserService } from '../services/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, UserRepositoryService],
})
export class UserModule {}
