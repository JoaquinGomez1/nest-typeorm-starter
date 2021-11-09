import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import AppResponse from 'src/domain/models/response.model';
import IPostService from 'src/domain/services/post-service';
import { Post } from 'src/entities/post.entity';
import { PostRepositoryService } from 'src/repositories/post-repository.service';
import { CreatePostDto } from '../domain/models/post-create.model';
import { EditPostDto } from '../domain/models/post-edit.model';

@Injectable()
export class PostService implements IPostService {
  constructor(private postRepository: PostRepositoryService) {}

  async insert(dto: CreatePostDto) {
    const response = new AppResponse<CreatePostDto>();

    try {
      response.data = await this.postRepository.insert(dto);
    } catch (ex) {
      throw new InternalServerErrorException();
    }

    return response;
  }

  async getAll() {
    const response = new AppResponse<Post[]>();
    response.data = await this.postRepository.getAll();

    return response;
  }

  async getById(id: number) {
    const response = new AppResponse<Post>();
    try {
      response.data = await this.postRepository.getById(id);
    } catch (ex) {
      throw new InternalServerErrorException();
    }
    return response;
  }

  async update(id: number, dto: EditPostDto) {
    const response = new AppResponse<EditPostDto>();

    try {
      response.data = await this.postRepository.update(id, dto);
    } catch (ex) {
      throw new InternalServerErrorException();
    }
    return response;
  }

  async delete(id: number) {
    const response = new AppResponse<void>();
    try {
      response.data = await this.postRepository.delete(id);
    } catch (ex) {
      throw new InternalServerErrorException();
    }
    return response;
  }
}
