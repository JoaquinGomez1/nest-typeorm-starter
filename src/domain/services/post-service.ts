import { Post } from 'src/entities/post.entity';
import { CreatePostDto } from '../models/post-create.model';
import { EditPostDto } from '../models/post-edit.model';
import AppResponse from '../models/response.model';

export default interface IPostService {
  insert: (dto: CreatePostDto) => Promise<AppResponse<CreatePostDto>>;
  getAll: () => Promise<AppResponse<Post[]>>;
  getById: (id: number) => Promise<AppResponse<Post>>;
  update: (id: number, dto: EditPostDto) => Promise<AppResponse<EditPostDto>>;
  delete: (id: number) => Promise<AppResponse<void>>;
}
