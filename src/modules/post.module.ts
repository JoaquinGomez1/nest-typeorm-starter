import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from '../entities/post.entity.js';
import { PostController } from '../controllers/post.controller';
import { PostService } from '../services/post.service';
import { PostRepositoryService } from '../repositories/post-repository.service.js';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  controllers: [PostController],
  providers: [PostService, PostRepositoryService],
})
export class PostModule {}
