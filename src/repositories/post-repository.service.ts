import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from '../domain/models/post-create.model';
import { EditPostDto } from '../domain/models/post-edit.model';
import IPostRepository from '../domain/repositories/post-repository';
import { Post } from '../entities/post.entity';

@Injectable()
export class PostRepositoryService implements IPostRepository {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async getAll() {
    const data = await this.postRepository.find();
    return data;
  }

  async getById(id: number) {
    return await this.postRepository.findOne({ id });
  }

  async insert(post: CreatePostDto) {
    const entity = this.postRepository.create(post as any)[0];
    await this.postRepository.save(entity);

    return Object.assign(post, entity);
  }

  async update(id: number, post: EditPostDto) {
    const entity = await this.postRepository.findOne({ id });

    if (!entity) throw new NotFoundException();

    const edited = Object.assign(entity, post);

    await this.postRepository.save(edited);
    return edited;
  }

  async delete(id: number) {
    await this.postRepository.delete({ id });
  }
}
